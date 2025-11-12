import { addUpdate, removeUpdate } from '@/utils/update';

export class anim_data {
	value : number;
	lastTime ?: number;
	animId : number;
	progress : number;
}
export enum Ease {
	line, outback, inback, outcircle, incircle
}
export enum LoopType {
	normal, goback
}
let easeFunc = [
	(start : number, end : number, t : number) => {
		return (end - start) * t + start
	},
	(start : number, end : number, t : number) => {
		var x = t - 0.75
		var y = -2 * x * x + 1.125
		var val = (end - start) * y + start
		return val
	},
	(start : number, end : number, t : number) => {
		var x = t - 0.25
		var y = 2 * x * x - 0.125
		var val = (end - start) * y + start
		return val
	},
	(start : number, end : number, t : number) => {
		var x = t - 1
		var y = Math.sqrt(1 - x * x)
		var val = (end - start) * y + start
		return val
	},
	(start : number, end : number, t : number) => {
		var y = Math.sqrt(1 - t * t) + 1
		var val = (end - start) * y + start
		return val
	}
]
export class animParam {
	data : anim_data
	endValue : number
	time : number
	speed : number
	progress : number
	loop : number
	startValue : number
	ease : Ease
	type : LoopType
	onComplete : Function
	onUpdate : Function
	loopFunc : Function
	id : string
}
function resetAnimParam(param : animParam) {
	if (!param.data || param.endValue == null || !param.time == null) {
		return false;
	}
	if (param.time <= 0) {
		console.log("time is less than 0");
		return false
	}
	param.startValue = param.data.value
	if (!param.ease) param.ease = Ease.line
	if (!param.loop) param.loop = 1
	if (!param.type) param.type = LoopType.normal
	if (param.speed) {
		param.time = Math.abs((param.startValue - param.endValue) / param.speed)
	}
	param.loopFunc = easeFunc[param.ease]
	param.progress = 0
	return true
}
export function playAnim(param : animParam) {
	var test = resetAnimParam(param)
	if (!test) { console.log("data、endValue、time is necessary value"); return }
	return animFrame(param)
}
function animFrame(param : animParam) {
	if (param.loop <= 0) {
		removeUpdate(param.id);
		if (param.onComplete)
			param.onComplete()
		return null
	}
	param.id = addUpdate((dt) => {
		param.progress += dt / param.time;
		param.data.value = param.loopFunc(param.startValue, param.endValue, param.progress);
		if (param.onUpdate)
			param.onUpdate(dt)
		if (param.progress >= 1) {
			param.loop--;
			param.data.value = param.endValue;
			param.progress = 0;
			if (param.loop <= 0) {
				removeUpdate(param.id);
				if (param.onComplete)
					param.onComplete()
			} else {

				if (param.type == LoopType.normal) {
					param.data.value = param.startValue
				} else {
					var val = param.startValue
					param.startValue = param.endValue
					param.endValue = val
				}
			}
		}
	})
	return param.id
}