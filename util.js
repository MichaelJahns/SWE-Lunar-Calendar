//  JD is a representation of the current date in Julian?
export function getJD(){
let year = new Date().getFullYear();
let month = new Date().getMonth();
let day = new Date().getDate();

//let year = 2020;
//let month = 8;
//let day = 9;
//day += 11; 

if (month < 3) {
      year--;
      month += 12;
    }
++month;

  let c = year * 365.25;
  let e = 30.6 * month;
  let jd = (c + e + day - 694039.09);
   // jd is total days elapsed
   return jd
}

// B is a representation of how many days we are from the next full moon in Julian
export function getBfromJD(jd){
  let b = parseInt(jd / 29.5305882);	// int(jd) -> b, take integer part of jd
  jd -= (b * 29.5305882)              // Subtract b * lunar cycle from jd. Result will be between 0.1 and 29.5
  //The new jd value is how far we are in the current lunar cycle.  Full moons fall on 14, 
  if(jd>14){
	  b = (29.5305882 - jd + 14); // if we passed a full moon, then we need to rollover to 0 before adding 14
  }
  if(jd<=14){
	  b = (14 - jd); // if we have not passed a full moon, we simply need to subtract from 14.
  }
  return b
}