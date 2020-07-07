export const randomString = (len = 8) => {
	let timestamp = `${new Date().getTime()}`.substr(-4);
	let $chars = 'ABCDEFGHJKNMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	let maxPos = $chars.length;
	let randomStr = '';
	for (let i = 0; i < len - 4; i++) {
		randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return randomStr + timestamp;
};