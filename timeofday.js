'use strict';

// global vars
var lastTimeTag;

export function update() {
	let hour = new Date().getHours();

	let timeTag = getTimeTagFromHour(hour);
	console.log(hour, timeTag);

	// Why are we keeping a reference for past time tags? How often is update called?
	if (lastTimeTag != timeTag) {
		lastTimeTag = timeTag;
		thisLayer.text = newString.replace('$', engine.userProperties.name);
	}
}
function getTimeTagFromHour(hour){
	return  hour < 5 ? 'Night' : hour < 8 ? 'Early Morning' : hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : hour < 22 ? 'Evening' : 'Night';
}
// I had to explicitly call update because im working outside of engine
update();