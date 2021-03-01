
'use strict';

/**
 * @param {String} value (for property 'text')
 */
//var lastString;
var lastb;
//var stringIndex = 0;
export function update() {
 
//This section loads the current date
let year = new Date().getFullYear();
let month = new Date().getMonth();
let date = new Date();
let day = date.getDate();

//This section used for troubleshooting, comment out when not in use
//let year = 2020;
//let month = 8;
//let day = 9;
//day += 11; 

//look I'm sorry, I didnt' write the gregorian calendar. this is monks' fault. 
if (month < 3) {
      year--;
      month += 12;
    }

++month;

  let c = year * 365.25;
  let e = 30.6 * month;
  let jd = (c + e + day - 694039.09);	// jd is total days elapsed
  jd /= 29.5305882;  					// divide by the moon cycle
  let b = parseInt(jd);					// int(jd) -> b, take integer part of jd
  jd -= b;								// subtract integer part to leave fractional part of original jd
  b = Math.round(jd * 8);				// scale fraction from 0-8 and round
  if (b >= 8) b = 0; 					// 0 and 8 are the same so turn 8 into 0

	//let phase = b;
	//var newString;
	switch (b) {						//sets layer visability IFF correct phase
		//there are more effecient ways to code it, but this way was easy for me to conceptualize
		case 0:
    	thisLayer.visible=false;
   	 	break;
    	case 1:
		thisLayer.visible=false;
		break;
		case 2:
		thisLayer.visible=false;
		break;
		case 3:
		thisLayer.visible=false;
		break;
		case 4:
		thisLayer.visible=false;
		break;
		case 5:
		thisLayer.visible=false;
		break;
    	case 6:
		thisLayer.visible=false;
		break;
		case 7:
		thisLayer.visible=true;
		break;
    	case 8:
    	thisLayer.visible=false;
    	break;
	}
	if (lastb != b) {
		lastb = b;
	}
}
