var express=require('express');

var app=express();
//不用练级数据库，快速连接

app.post('/api/login',function(req,res){
	res.json({
		code:0,
		msg:'登录成功'
	})
})
app.post('/api/register',function(req,res){
	res.json({
		code:0,
		msg:'进入注册 '
	})
})



app.listen(9090,function(){
	console.log('启动node lagou');
});
