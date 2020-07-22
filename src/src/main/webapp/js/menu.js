function changeSelect(checked,type){
    if(checked==false){
        type.hidden=true;
    }
    else{
        type.hidden=false;
    }
}

function searchName(value){
    var root=document.getElementsByClassName("no-gutters");
    console.log(root.length);

    for(i=0;i<root.length;i++){
        var str=String(root[i].childNodes[1].innerHTML);
        if( str.indexOf(value)!=-1){
            root[i].parentNode.hidden=false;
        }
        else{
            root[i].parentNode.hidden=true;
        }
    }
}

function createMenu(data){
    for(i=0;i<data.length;i++){
        var id=date[i].id;
        var src=data[i].src;
        var name=data[i].name;
        var price=data[i].price;
        var type=data[i].type;
        addOne(src,name,price,type);
    }
}
function addOne(src,foodid,name,price,type){
    console.log(type);
    let foodtype;
    switch(type){
        case "1":foodtype="coffee";break;
        case "2":foodtype="dish";break;
        case "3":foodtype="main";break;
        case "4":foodtype="snack";break;
        case "5":foodtype="ice";break;
    }
    var div =document.createElement("div");
    div.innerHTML='<div id="'+foodid+'"><div><img src="images/'+src+'" crossorigin="anonymous" class="img-fluid img-style" alt="restaurant"></div>'+
				  '<div class="row no-gutters"><h6>'+name+' ￥'+price+'</h6>'+
				  '<div class="col-lg-6 col-6"><div class="choose-food-btn text-right">'+
                  '<a href="javascript:void(0);" '+
                  'onclick=\'addToShop("'+foodid+'","'+name+'","'+src+'","'+price+'","1");\' title="add" class="btn btn-success">加入购物车</a>'+
                  '</div></div></div></div>';
    console.log(foodtype);
    var root=document.getElementById(foodtype);
    root.childNodes[3].appendChild(div);
};

function addToShop(foodid,name,src,price,number){
    if(confirm("是否添加的购物车")){
        shop.addProduct(foodid,name,src,price,number);
    }
}
var food1={
    "id":"wudikafei2",
    "src":"images/menu2.jpg",
    "name":"大咖啡2",
    "price":"202",
    "type":"1"
};
$(document).ready(function(){
    var images = new Array()
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }
    preload(
        "images/affogato.jpg"
    )

     $.ajax({
        type: "POST",
        url: "getMenuList.action",
        contentType:"application/x-www-form-urlencoded",
        dataType: "json",
        success: function (data) {
            for(let i=0;i<data.length;i++){
                addOne(data[i].foodImg,data[i].foodId,
                    data[i].foodName,data[i].foodPrice,
                    data[i].foodType);
            }
        }
    });
})
