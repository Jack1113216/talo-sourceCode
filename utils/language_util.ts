let lan : {};
export async function setLanguage(simple_name : string) {
	simple_name = simple_name.toLowerCase()
	var url = `/static/datas/languages/${simple_name}.json`;
	console.log(url)
	try {
		lan = (await import(url)).default;
	} catch { }
}

export function get(key : string) {
	if (!lan) {
		console.log("lan file is empty");
		return `{${key}}`;
	}
	if (!lan[key]) {
		console.log("key is not found");
		return `{${key}}`;
	}
	return lan[key]
}