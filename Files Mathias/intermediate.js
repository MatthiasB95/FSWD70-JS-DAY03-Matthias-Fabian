var arr = [76,85,65,93,81];



for (var i = 0; i < arr.length; i++) {
	if (arr[i] < 60) {
		document.write("You have under 60 points");
		document.write("<br>");
	}else if (arr[i] < 70 && arr[i] >= 60) {
		document.write("You got a D");
		document.write("<br>");
	}else if (arr[i] < 80 && arr[i] >= 70) {
		document.write("You got a C");
		document.write("<br>");
	}else if (arr[i] < 90 && arr[i] >= 80) {
		document.write("Yout got a B");
		document.write("<br>");
	}else if (arr[i] < 100 && arr[i] >= 90) {
		document.write("You got an A");
		document.write("<br>");
	}

}
