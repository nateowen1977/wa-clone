//assign chai assert to global so we don't have to require it in every test file
global.testUtils = {
	stringLength: function(len) {
		return Array(++len).join('a');
	}
};