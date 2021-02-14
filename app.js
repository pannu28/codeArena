const port = process.env.PORT || 4000;

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    axios = require('axios');

let callback = 'http://localhost:4000/callback/'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    let output_data = {
        time: "",
        status: "",
        output: ""
    }
   res.render("home",{out: output_data});
});

app.post('/', async (request, response) => {

    try {

        let Code_Eval_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
        let clientSecret = 'df3c51f26932a70a519fd350ee716d9b871ed44c';

        let src=request.body.code,
            inp=request.body.input,
            lang=request.body.lang;
            
          let dataString = {
            'source': src,
            'lang': lang,
            'time_limit': 5,
            'memory_limit': 246323,
            'input': inp,
            'callback': callback,
            'id': "12347837"
        }

        let headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'origin,X-requested-with,content-type,accept',
            'cache-control': 'no-cache',
            'client-secret': clientSecret,
            'Content-Type': 'application/json'
        };
        let config = {
            headers: headers
        };

        let res = await axios.post(Code_Eval_URL, dataString, config);
        // console.log(3);
        // console.log(res.data);
        // response.json(res.data);

        let statusUrl = res.data.status_update_url;
    let compile_status;
    let res2;
    let is_error_present = false;
    while (1 != 0) {

        res2 = await axios.get(statusUrl, config);
        compile_status = res2.data.result.compile_status;
        if (compile_status === 'OK') {
            console.log("Compile Status:OK");
            break;
        }
        else if (compile_status === null) {
            console.log("compile status:null");
        }
        else {
            console.log("error");
            is_error_present = true;
            break;
        }

    }
        if (is_error_present === true) {
            is_error_present = false;
        let output_error = {
            time: 0,
            status: 'COMPILE ERROR',
            output: compile_status
        }
        console.log(2);
        console.log(output_error);
        response.render("home",{out: output_error});
        // response.json(output_error);
        
    }
    else {
        let code_status = res2.data.result.run_status.status;
        let code_time = res2.data.result.run_status.time_used;
        // console.log(res2);
        let output_console;
        if (code_status === "AC") {
            let outputURL = res2.data.result.run_status.output;
            let res3 = await axios.get(outputURL);
            let finalOutput = await res3.data;
            output_console = finalOutput;
            
        }
        else {
            let outputError = res2.data.result.run_status.stderr;
            output_console = outputError;
        }
        let output_data = {
            time: code_time,
            status: code_status,
            output:output_console
        }
        // console.log(1);
        // console.log(output_data);
        response.render("home",{out: output_data});
        // response.json(output_data);
    }
}
    catch (error) {
        // console.log(4);
        // console.log(error.message);
        response.send("error");
    }
});


app.listen(port, () => {
    console.log("editor started");
});