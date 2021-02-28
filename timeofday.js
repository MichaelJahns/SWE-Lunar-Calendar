'use strict';
// global vars
let cd lastTimeTag;
let greetings = [
	'Night',
	'Early Morning',
	'Morning',
	'Afternoon',
	'Evening',
]

function getTimeTag(hour){
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

export function update() {
	let hour = new Date().getHours();
	let timeTag = getTimeTag(hour)
	console.log(hour, timeTag);

	// Why are we keeping a reference for past time tags? How often is update called?
	if (lastTimeTag != timeTag) {
		lastTimeTag = timeTag
		thisLayer.text = newString.replace('$', engine.userProperties.name);
	}
}

update()