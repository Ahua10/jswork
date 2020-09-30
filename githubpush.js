let request = require('request');
console.log(process.argv);
if(process.argv.length<4){
    console.log("aaa")
}
let users = process.argv[2];
let repo = process.argv[3];
let url = `https://用户名:密码@api.github.com/repos/${users}/${repo}/commits`;
console.log(url);
const options = {
    url,
    headers:{
        'User-Agent':'request'
    }
};
// console.log(options)

request(options,function(err,response,body){
    if(err){
        console.log(err);
        process.exit(0)
    }
    if(response.statusCode!=200){
        process.exit(0)
    }
    let result = JSON.parse(body)

    let res = result.reduce((sum,v)=>{
        sum + v.commit.author.name + ' ' +v.commit.author.date +'\n';
        return sum;
    },'')
    console.log(res)
})
