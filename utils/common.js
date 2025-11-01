export const SERVER_URL = "http://220.133.31.166:37080";
let baseUrl = SERVER_URL;
// // #ifdef H5
// baseUrl = "";
// // #endif
export function packApiUrl(url) {
	if (url.slice(0, 4) === 'http') return url;
	return `${baseUrl}${url}`;
}