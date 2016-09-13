module.exports = function(grunt){

grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

sass: {
	dist: {
		options: {
			style: "expanded"
		},
		files: {
			'public/css/style.css': 'public/scss/style.scss'
		}
	}
},

watch: {
	css: {
		files: 'public/scss/*.scss',
		tasks: ['sass']
	}
}

});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default', ['watch']);
}