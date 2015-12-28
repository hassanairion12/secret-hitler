var rng = function(generator) {
	return generator.int32();
}

var rngInt = function(generator, max) {
	return Math.abs(rng(generator)) % (max + 1);
}

module.exports = {

	TESTING: process.env.DATABASE_URL != null,

	seconds: function() {
		return Math.round(Date.now() * 0.001);
	},

	uid: function() {
		return Math.random().toString(36).substr(2, 16);
	},

	code: function() {
		return Math.floor(Math.random() * 900000) + 100000;
	},

//RANDOM

	randomize: function(generator, arr) {
		var result = [], swapIndex;
		arr.forEach(function(val, idx) {
			if (!idx) {
				result[0] = val;
			} else {
				swapIndex = rngInt(generator, idx);
				result[idx] = result[swapIndex];
				result[swapIndex] = val;
			}
		});
		return result;
	},

}
