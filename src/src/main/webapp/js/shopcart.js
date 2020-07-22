// JavaScript Document

function onNumberChange(){
    if(parseInt(arguments[1].value)<=0){
        alert("非法值！");
        arguments[1].value=1;
    }
    var parent=arguments[0];
    var price=parent.nextElementSibling;
    var total=price.nextElementSibling;
    total.innerHTML=Number(price.innerHTML)*arguments[1].value;

    shop.setCount(parent.parentNode.id,parseInt(arguments[1].value)-parseInt(shop.getCount(parent.parentNode.id)));
}
function del(node){
    if(confirm("确认从购物车中移除该商品？")){
        shop.removeProduct(node.id);
        $(node).remove();
    }
}
/**增加一行购物车数据
 * @param foodId
 * @param foodName
 * @param food
 */

$(document).ready(function(){
    var shopcar=shop.readData();
    console.log(shopcar);
    for(var i=0;i<shopcar.length;i++){
        addRow(shopcar[i].id,shopcar[i].img,shopcar[i].name,shopcar[i].count,shopcar[i].price);
    }
});

function addRow(foodId,foodImg,foodName,quantity,foodPrice){
    var row=
    '<tr id='+foodId+'>'+
    '<td name="image"><img src="images/'+foodImg+'" alt="实物图" /></td>'+
    '<td name="name">'+foodName+'</td>'+
    '<td name="quantity"><input onChange="onNumberChange(parentNode,this);" min="1" type="number" class="input-number" value="'+quantity+'"/></td>'+
    '<td name="price">'+foodPrice+'</td>'+
    '<td name="total">'+foodPrice*quantity+'</td>'+
    '<td name="option"><div onclick="del(parentNode.parentNode)" class="del">删除</div></td>'+
    '</tr>';
    $("#table").append(row);
}


var shop={};
shop.addProduct = function (id, name,img, price, count) {
    var carInfo = shop.readData();
    var have=false;
    for(var i=0;i<carInfo.length;i++){
        if(carInfo[i].id==id){
            have=true;
            carInfo[i].count=parseInt(count)+parseInt(carInfo[i].count);
            break;
        }
    }
    if (!have) {
        carInfo.push({ id: id,img:img, name: name, price: price, count: count });
    }
    shop.saveData(carInfo);
};
 
shop.removeProduct = function (id) {
    var carInfo = shop.readData();
    for(var i=0;i<carInfo.length;i++){
        if(carInfo[i].id==id){
            carInfo.splice(i,1);
            break;
        }
    }
    shop.saveData(carInfo);
};
 
shop.saveData = function (info) {
    var infoStr = "";
    for (var i in info) {
        var element = info[i];
        if (element) {
            infoStr += info[i].id + "," +info[i].img+","+ info[i].name + "," + info[i].price + "," + info[i].count + ";";
        }
    }
    var shop_car = $.cookie("shop-car", infoStr);
};
 
shop.readData = function () {
    var shop_car = $.cookie("shop-car");
    var reInfo = new Array();
    if (shop_car) {
        shop_car = shop_car.split(";");
        for (var i = 0 ; i < shop_car.length; i++) {
            if (shop_car[i]) {
                shop_car[i] = shop_car[i].split(",");
                reInfo.push({ id: shop_car[i][0],img:shop_car[i][1], name: shop_car[i][2], price: shop_car[i][3], count: shop_car[i][4] });
            }
        }
    }
 
    return reInfo;
}
 
shop.getPrice = function () {
    var price = 0;
    var shop_car = $.cookie("shop-car");
    var reInfo = {};
    if (shop_car) {
        shop_car = shop_car.split(";");
        for (var i = 0 ; i < shop_car.length; i++) {
            if (shop_car[i]) {
                shop_car[i] = shop_car[i].split(",");
                for (var j = 0; j < parseInt(shop_car[i][4]) ; j++) {
                    price += parseInt(shop_car[i][3]);
                }
            }
        }
    }
    return price;
}
 
///设置数量，count可以为负数 update 2016-3-31 14:35:03 by Questionfeet
shop.setCount = function (id, count) {
    var carItems = shop.readData()
    for (var i in carItems) {
        if (carItems[i].id == id) {
            console.log(count);
            shop.addProduct(id, carItems[i].name,carItems[i].img,carItems[i].price, count);
        }
    }
}
 
//得到总数量 update 2016-3-31 14:35:03 by Questionfeet
shop.getCount = function (id) {
    var carItems = shop.readData()
    console.log(carItems);
    for (var i in carItems) {
        console.log(id,carItems[i].id)
        if (carItems[i].id == id) {
            return carItems[i].count;
        }
    }
    return 0;
}
 
shop.clear = function () {
    $.cookie("shop-car", "");
    return;
}

$("#getOrder").click(function(){
    var temp=shop.readData();
    console.log(temp);
    var data=[];
    for(var i=0;i<temp.length;i++){
        data.push({
            FoodId:temp[i].id,
            FoodNumber:parseInt(temp[i].count)
        })
    }
    if($.cookie("token")!=null){
        $.ajax({
            url:"order.action",
            type:"POST",
            dataType:"json",
            contentType:"json",
            data:JSON.stringify(data),
            success:function(){
                alert("订单提交成功");
            }
        })
    }else{
        alert("您还未登录，请登陆后下单！");
        location.href("Signin.html");
    }
});