
'use strict';


var lastb;
export function update() {
  
//This section loads the current date
let year = new Date().getFullYear();
let month = new Date().getMonth();
let date = new Date();
let day = date.getDate();

//This section used for troubleshooting, comment out when not in use
//let year = 2020;
//let month = 10;
//let day = 31;
//day += 11; 

//look I'm sorry, I didnt' write the julian calendar. this is monks' fault. 
if (month < 3) {
      year--;
      month += 12;
    }

++month;

//let c = e = jd = b = 0;

  let c = year * 365.25;
  let e = 30.6 * month;
  let jd = (c + e + day - 694039.09);	// jd is total days elapsed since beginning of julian calendar
  let b = parseInt(jd / 29.5305882);	// int(jd) -> b, take integer part of jd
  jd -= (b*29.5305882)
  if(jd>14){
	  b = (29.5305882 - jd + 14);
  }
  if(jd<=14){
	  b = (14 - jd);
  }
  	//var newString;


if(b < 1.5){
  thisLayer.visible = false;
}
if(b > 28){
  thisLayer.visible = false;
}

if (lastb != b) {
	lastb = b;
  }
}
