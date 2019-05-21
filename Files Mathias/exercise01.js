//Basic01
function temperatur (min, max){

	var result = Math.floor(Math.random() * (max - min)) + min;
	console.log(result);
if (-5<= result && result <= 10) {
	var myImage1 = new Image(250, 250);
	myImage1.src = 'http://www.ottawapublichealth.ca/en/public-health-topics/resources/Images/frozen-branches-1065.jpg';
	document.body.appendChild(myImage1);
	document.write("The weather is cold")

}else if (11 <= result && result <= 26){
	var myImage2 = new Image(250, 250);
	myImage2.src = 'http://en.ammonnews.net/img/big/20181010438RN967.jpeg';
	document.body.appendChild(myImage2);
	document.write("The weather is moderate");

	} else if (result >= 26){
	var myImage3 = new Image(250, 250);
	myImage3.src = 'https://media.mnn.com/assets/images/2018/07/palm_trees_hot_sun.jpg.653x0_q80_crop-smart.jpg';
	document.body.appendChild(myImage3);
	document.write("The weather is hot");
	}
}
temperatur(-5, 50);
document.write("<br>")

function size(wid){
	if (wid.matches) { 
    document.body.style.backgroundColor = "pink";
  } else {
   document.body.style.backgroundColor = "yellow";
  }
}
var wid = window.matchMedia("(max-width: 700px)");
size(wid);
wid.addListener(size);
//select.addEventListener("click",size,false)



//Basic02


//document.write(Math.max(...arr));

var startValue = 0;
var arr = [1,7,-3,9];
for ( i = 0; i <= arr.length; i++) {
	if (arr[i] > startValue) {
		startValue=arr[i];
	}
}
document.write(startValue);
document.write("<br>")
//Basic02

var arr1 = [1,3,7,10,2];
var mult = 1;

for (var i = 0; i < arr1.length; i++) {
		var mult = mult * arr1[i];
		
		
	}
	document.write(mult);



