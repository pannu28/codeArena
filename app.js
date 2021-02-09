const express=require('express'),
      app=express(),
      bodyParser=require('body-parser');
      
const axios = require('axios');

// axios.get('https://codeforces.com/')
// .then(function (response) {
//   // handle success
//   console.log(response);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
  
// let CODE_EVALUATION_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';

//         let Code_Eval_URL = 'https://cors-anywhere.herokuapp.com/' + CODE_EVALUATION_URL;

//         let callback ='https://coding-bros-42213.herokuapp.com/callback'

//         let clientSecret = '5ce27249c8c7ee4fe414c322a8aa5f309221677d';  
        
 


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("home");
});

app.post("/",async(req,res)=>{
    var code=req.body.code;
//     console.log(code);
// res.send("posted");

let dataString = {
    'source': code,
    'lang': 'PYTHON3',
    'time_limit': 5,
    'memory_limit': 246323,
    'input': '',
    'callback': callback,
    'id': "2343847837"
}
let headers = {
    'Access-Control-Allow-Origin':'*',
    'cache-control': 'no-cache',
    'client-secret': clientSecret,
    'Content-Type': 'application/json'
};
var config = {
    headers: headers,
    body: dataString
};
// try {
    // console.log(2);
    // const result = await axios.post(Code_Eval_URL, dataString, config);
    // console.log(1);
    // console.log(result);
    // const statusUrl = res.data.status_update_url;
    // // console.log(statusUrl);
    // let finalStatusUrl = 'https://cors-anywhere.herokuapp.com/' + statusUrl;
    // const res2 = await axios.get(finalStatusUrl, config);
    // const code_status = res2.data.result.run_status.status;
    // const code_time = res2.data.result.run_status.time_used;
    // if (code_status === "AC") {
    //     const outputURL = res2.data.result.run_status.output;

    //     let res3 = await axios.get(outputURL);
    //     const finalOutput = res3.data;
    //     console.log(finalOutput);
    //     setCodeOutput({ ...codeOutput, output: finalOutput, status: 'AC', time: code_time });

    //     // console.log(codeOutput);
    //     // res.send(codeOutput);
    // }
    // else {
    //     let output = res2.data.result.run_status.stderr;
    //     setCodeOutput({ ...codeOutput, output: output, status: code_status, time: code_time });
        
    //     // console.log(codeOutput);
    //     // res.send(codeOutput);
    // }
    
// } catch (error) {
//     // console.log(error);
//     res.send(error);
//   }
});




app.listen(3000,()=>{
    console.log("editor started");
});