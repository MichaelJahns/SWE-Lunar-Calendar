'use strict';
import { getBfromJD, getJD } from "./util.js"

var lastb;

export function update() {
let jd = getJD();
let b2 = getBfromJD(jd)
  jd /= 29.5305882;  					// divide by the moon cycle
  let b = parseInt(jd);					// int(jd) -> b, take integer part of jd
  jd -= b;								// subtract integer part to leave fractional part of original jd
  b = Math.round(jd * 8);				// scale fraction from 0-8 and round
  b = b >= 8 ? 0 : b

//   It seems to me that your operations on b are different here than they 
//   were in other parts of the code, what does b represent here?
console.log(`b: ${b}`)
console.log(`b2: ${b2}`)

	switch (b) {
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

update()
