define([], function() {
	var routesConfig = {
		defaultRoutePath : '/',
		routes : {
			'/' : {
				templateUrl : 'pages/login.html',
				dependencies : []
			},
			'/profile':{
				templateUrl : 'pages/profile.html',
				dependencies : [ ]
			},

		}
	};
	return routesConfig;
});