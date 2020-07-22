// JavaScript Document

function onNumberChange(){
    var parent=arguments[0];
    var price=parent.nextElementSibling;
    var total=price.nextElementSibling;
    console.log(arguments[1]);
    console.log(Number(price.innerHTML));
    total.innerHTML=Number(price.innerHTML)*arguments[1];
    console.log(total);
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
    // shop.addProduct(1,23423,"3.jpg",12,144);
    if($.cookie('token')!=null){
        $.ajax({
            url:"getShopcart.action",
            type:"POST",
            contentType:"json",
            dataType:"json",
            xhrFields: { withCredentials: true },
            success:function(result){
                
            },
        })
    }
    else{
        var shopcar=shop.readData();
        console.log(shopcar);
        for(var i=0;i<shopcar.length;i++){
            addRow(shopcar[i].id,shopcar[i].img,shopcar[i].name,shopcar[i].count,shopcar[i].price);
        }
    }
});

function addRow(foodId,foodImg,foodName,quantity,foodPrice){
    console.log("222");
    var row=
    '<tr id='+foodId+'>'+
    '<td name="image"><img src="images/'+foodImg+'" alt="实物图" /></td>'+
    '<td name="name">'+foodName+'</td>'+
    '<td name="quantity"><input onChange="onNumberChange(parentNode,this.value);addRow()" min="1" type="number" class="input-number" value="'+quantity+'"/></td>'+
    '<td name="price">'+foodPrice+'</td>'+
    '<td name="total">'+foodPrice*quantity+'</td>'+
    '<td name="option"><div onclick="del(parentNode.parentNode)" class="del">删除</div></td>'+
    '</tr>';
    $("#table").append(row);
}
var shop=[];
shop.addProduct = function (id, name,img, price, count) {
    var carInfo = shop.readData();
    console.log(carInfo);
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
        if (i == id) {
            shop.addProduct(id, carItems[i].name, carItems[i].price, count);
        }
 
    }
}
 
//得到总数量 update 2016-3-31 14:35:03 by Questionfeet
shop.getCount = function () {
    var count = 0;
    var shop_car = $.cookie("shop-car");
    var reInfo = {};
    if (shop_car) {
        shop_car = shop_car.split(";");
        for (var i = 0 ; i < shop_car.length; i++) {
            if (shop_car[i]) {
                shop_car[i] = shop_car[i].split(",");
                count += parseInt(shop_car[i][3]);
            }
        }
    }
    return count;
}
 
shop.clear = function () {
    $.cookie("shop-car", "");
    return;
}
