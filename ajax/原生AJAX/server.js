//1.引入express
const express=require('express');

//2.创建应用对象
const app=express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
    
    response.send('nkz')
});
//all允许接受任意类型的请求
app.all('/server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头，允许自定义
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    
    response.send('李瑶萍，宁康庄是你爹,post')
});
//json
app.all('/json-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头，允许自定义
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    //响应一个数据
    const data={
        name:'lyp'
    }
    //对对象进行字符串转化
    let str=JSON.stringify(data);
    response.send(str);
});
//IE缓存 
app.get('/ie',(request,response)=>{
    //设置响应头,设置允许跨域   
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体 
    
    response.send('ie hello')
});
//延时响应 
app.get('/delay',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
    //设置响应体
});
//jQuery服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={name:'nkz'};
    response.send(JSON.stringify(data));
});
//axios服务
app.all('/axios-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={name:'  nkz'};
    response.send(JSON.stringify(data));
});
//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={name:'  nkz'};
    response.send(JSON.stringify(data));
});


//CORS响应头实现跨域
app.all('/cors-server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    response.send('name:nkz');
})
//4.监听端口请求服务
app.listen(8000,()=>{
    console.log("服务已启动,8080端口监听中....");
})