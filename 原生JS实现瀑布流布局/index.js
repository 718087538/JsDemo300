
window.onload=function () {
	// 实现瀑布流(本来就存在的数据至少要占一屏)
	waterFull("main","box");


	//动态加载图片
	
	window.onscroll=function(){
		if(checkWillLoadImage()){
			// console.log("AAAA")
			//2.1搞数据
			var dataArr=[
				{"src":"5.jpg"},
				{"src":"10.jpg"},
				{"src":"5.jpg"},
				{"src":"5.jpg"},
				{"src":"10.jpg"},
				{"src":"6.jpg"},
				{"src":"5.jpg"},
				{"src":"5.jpg"},
				{"src":"10.jpg"},
				{"src":"5.jpg"},
			];
			//2.2创建数据
			for(var i = 0;i<dataArr.length;i++){
				var newBox=document.createElement("div");
				newBox.className="box";
				var main=document.getElementById("main");
				// alert(main);
				main.appendChild(newBox);

				var newPic=document.createElement("div");
				newPic.className="pic";
				newBox.appendChild(newPic);

				var newImg=document.createElement("img");
				newImg.src="image/"+dataArr[i].src;
				newPic.appendChild(newImg);
			}
			//2.3由于是新加进来的元素，则重新布局
			waterFull("main","box");

		}
	}








}

function waterFull(parent,child){


	let test=document.getElementById(parent);

//1.1 获取所有的盒子
var allBox=test.getElementsByClassName(child);
//1/2 获取盒子的宽度
var boxWidth=allBox[0].offsetWidth;
//1.3获取屏幕的宽度
var screenW=document.documentElement.clientWidth;

//1.4获取列数,列数=屏幕总宽度/每个小盒子的宽度
var cols=parseInt(screenW/boxWidth);
	// 1.5父盒子居中
	test.style.width = cols*boxWidth+"px";
	test.style.margin="0 auto";	
	// console.log(cols);


	//2子盒子的定位
	//2.1定义高度数组
	var heightArr=[],boxHeight,minBoxHeight;
	var minBoxIndex = 0;
	// 2.2遍历子盒子
	for(var i=0;i<allBox.length;i++){
		//2.2.1求出每一个子盒子的高度。（此时的boxHeight就是当前为i的盒子。）
		boxHeight=allBox[i].offsetHeight;
		//2.2.2取出第一行盒子的高度，放入高度数组
		if (i<cols) {
			heightArr.push(boxHeight);
		}else{
			// 剩余行
			// 找出一行中最短的
			minBoxHeight= Math.min.apply(this,heightArr);
			//找出最短盒子对应的索引
			minBoxIndex=getMinBoxIndex(heightArr,minBoxHeight)
			//3,子盒子的定位
			allBox[i].style.position="absolute";
			allBox[i].style.left=minBoxIndex*boxWidth+"px";
			allBox[i].style.top=minBoxHeight+"px";
			//重要，重要，重要
			//4.更新数组中的高度,避免全部集中在第一个最矮的盒子上
			//(此时的boxHeight就是当前为i的盒子。）
			//这里其实只更新了数组中最矮盒子的高度，在实际CSS中并未改变。
			//
			//
			//整个思路是先找好第一行，然后找最矮的拼接上去，然后更新“数组”中最矮的高度，这样一来最矮的变长后，
			//下一个盒子会以为还是只有1行，根据数组中的高度继续在第1行上拼接。
			//
			heightArr[minBoxIndex]+=boxHeight;
		}
	}
	console.log(heightArr);
	console.log(minBoxHeight);
	console.log(minBoxIndex);
// 获取最短高度盒子的索引
	function getMinBoxIndex(arr,val){
		for (var i =0; i <= arr.length; i++) {
			if (arr[i]===val) {
				return i;
			}
		}
	}
}

/**
 * 判断是否该加载图片
 * @return {[type]} [description]
 */
function checkWillLoadImage(){

	//1获取最后一个盒子
	var allBoxs=document.getElementsByClassName("box");
	var lastBox=allBoxs[allBoxs.length-1];

	//2,求出最后1个盒子自身高度的一半+offsetTop
	var lastBoxDis=lastBox.offsetHeight*0.5+lastBox.offsetTop;

	//3.求出屏幕的高度，
	var screenW=document.body.clientHeight || document.documentElement.clientHeight;

	//4，求出页面偏离浏览器的高度
	//?????????????????????没听懂？？？？？？？？？？？？？？？
	var scrollTop =document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

	return lastBoxDis<=screenW+scrollTop;
}



