"use strict";

var sleepCount = 0;

async function sleep (ms = 0) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			sleepCount++;
			resolve();
		}, ms)
	});
};

function logCount() {
	console.log("sleep count: %s", sleepCount);
}

(async () => {

	logCount()

  sleep(1000);

	logCount();

	await sleep(1000);

	logCount();

	await sleep(1000);

	logCount();

})();
