var Me = (function() {
	var name = 'Andrey';
	var age = 28;
	var skills = [];

	return {
		get: function() {
			console.log(name + ', ' + age + ' old');
			console.log('skills', skills);
		},
		set: function(value) {
			skills.push(value)
		}
	}
})();