export function dataToJson(data) {
	return encodeURIComponent(JSON.stringify(data));
}
export function jsonToData(options) {
	return JSON.parse(decodeURIComponent(options.data))
}