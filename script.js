function validEmail(str) {
  //your JS code here.
	if(!str){
		return false;  
	}
	const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if(str.includes("..")){
		return false;
	}   
	return emailRegex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

// str=lsurekha2002@gmail.com
