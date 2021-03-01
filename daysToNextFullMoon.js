'use strict';

  // I exported common functionality to a module called util
import { getBfromJD, getJD } from "./util.js"

export function update() {
  let jd = getJD();
  let b = getBfromJD(jd);
  console.log(`b ${b}`)

  if(b >= 1.5 && b <= 28){  
    thisLayer.text = parseInt(b);
  }
  else{ 
  thisLayer.text = "Full"; //Display Full if b is between 28 and 29.5
}

var lastb;
// Why are we keeping tracking of lastb?
if (lastb != b) {
	lastb = b;
  }
}
update();
