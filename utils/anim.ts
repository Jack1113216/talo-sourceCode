let time_space = 1000 / 120;
export class anim_data {
	value : number;
	lastTime ?: number;
	animId : number;
	progress : number;
}
export function playAnimWithSpeed(data : anim_data, endValue : number, speed : number, callback ?: Function, update ?: Function) {
	if (endValue == data.value) {
		if (callback != null)
			callback();
		return;
	}
	if (endValue < data.value)
		speed = -speed;
	speed = speed / 1000;
	var ratio = speed / (endValue - data.value);
	if (data.animId != null) {
		clearTimeout(data.animId);
		data.animId = null;
	}
	data.progress = 0;
	data.lastTime = new Date().getTime();
	data.animId = setTimeout(() => {
		animFrame(data, endValue, ratio, speed, callback, update)
	});
}
export function playAnim(data : anim_data, endValue : number, time : number, callback ?: Function, update ?: Function) {
	var speed = (endValue - data.value) / time;
	if (speed < 0) speed = -speed;
	playAnimWithSpeed(data, endValue, speed, callback, update);
}

function animFrame(data : anim_data, endValue : number, ratio : number, speed : number, callback ?: Function, update ?: Function) {
	if (data.progress < 1) {
		var nowTime = new Date();
		var frameTime = nowTime.getTime() - data.lastTime;
		data.progress += ratio * frameTime;
		if (data.progress >= 1) data.value = endValue;
		else data.value += speed * frameTime;
		data.lastTime = nowTime.getTime();
		if (update)
			update();
		data.animId = setTimeout(() => {
			animFrame(data, endValue, ratio, speed, callback, update)
		}, time_space);
	} else {
		clearTimeout(data.animId);
		data.progress = 1;
		data.lastTime = null;
		data.animId = null;
		if (callback != null) {
			callback();
		}
	}
}