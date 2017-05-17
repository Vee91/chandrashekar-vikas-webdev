define([], function() {
	var routesConfig = {
		defaultRoutePath : '/',
		routes : {
			'/' : {
				templateUrl : 'pages/login.html',
				dependencies : ['loginController']
			},
			'/profile':{
				templateUrl : 'pages/profile.html',
				dependencies : ['profileController']
			},

		}
	};
	return routesConfig;
});