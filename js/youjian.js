<body onselectstart="return false;" oncontextmenu="alert('就是不让你按鼠标右键！');return false;" onkeydown="if(event.keyCode==27) return false;">
<script type="text/javascript">
document.onmousedown = click;  //绑定禁用鼠标右键事件
document.onkeydown = ctrl_key; //绑定禁用键盘事件
function click() {
if (event.button == 2)      //单击的鼠标键为右键
{
alert('就是不让你按鼠标右键！');
return false;
}
}
function ctrl_key() {
if (event.keyCode == 17) {                          //禁用CTRL+S 保存网页代码
window.alert("就是不让你按鼠标右键！");
return false;
}
 
if (event.keyCode == 123) {                         //禁用F12查看源代码
alert('就是不让你按鼠标右键！');
return false;
}
}
</script>