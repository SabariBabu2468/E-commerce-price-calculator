const fs=require('fs');
const path=require("path");
const utils=require("./utils.js");

const filename=process.argv[2];
const discount=process.argv[3];
const inputfilepath=path.join("input",filename);
const outputfilepath=path.join("output",filename);

console.log("processing file",inputfilepath);
if (fs.existsSync(inputfilepath)){
const data=JSON.parse(fs.readFileSync(inputfilepath,"utf-8"));
let result=utils.calculateTotalPrice(data,discount);

console.log("processing file",outputfilepath);
console.log(result);


fs.writeFileSync(outputfilepath,JSON.stringify(result));
}
else{
    console.log("file not found",inputfilepath);
}