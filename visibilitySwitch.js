'use strict';
import { getBfromJD, getJD } from "./util.js"

var lastb;
export function update() {
  let jd = getJD()
  let b = getBfromJD(jd)

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
