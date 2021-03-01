'use strict';

let greetings = [
	'Night',
	'Early Morning',
	'Morning',
	'Afternoon',
	'Evening',
]
// global vars
var lastTimeTag;

export function update() {
	let hour = new Date().getHours();
	let timeTag = getTimeTagFrom(hour)
	console.log(hour, timeTag);

	// Why are we keeping a reference for past time tags? How often is update called?
	if (lastTimeTag != timeTag) {
		lastTimeTag = timeTag
		thisLayer.text = newString.replace('$', engine.userProperties.name);
	}
}

function getTimeTagFrom(hour){
	switch (hour) {
		case hour < 5 :
		timeTag = greetings[0]
		break;

		case hour < 8 :
		timeTag = greetings[1]
		break;

		case hour < 12:
		timeTag = greetings[2];
		break;

		case hour < 18 :
		timeTag = greetings[3];
		break;

		case hour < 22 :
		timeTag = greetings[4]
		break;
		
		case hour > 22 :
		timeTag = greetings[0]
		break;
	}
}
// I had to explicitly call update because im working outside of engine
update()