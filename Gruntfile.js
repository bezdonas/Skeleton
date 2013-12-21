module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true
				}
			},

			css: {
				files: 'css/**/*.styl',
				tasks: ['stylus', 'autoprefixer', 'cssmin'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		},

		stylus: {
			dist: {
				src: 'css/global.styl',
				dest: 'css/global.css',
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8']
			},
			dist: {
				src: 'css/global.css',
				dest: 'css/global.css'
			}
		},

		cssmin: {
			build: {
				src: 'css/global.css',
				dest: 'css/global.min.css'
			}
		},

		concat: {
			dist: {
				src: [
					'js/libs/*.js',
					'js/global.js'
				],
				dest: 'js/prod.js',
			}
		},

		uglify: {
			build: {
				src: 'js/prod.js',
				dest: 'js/prod.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'i/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'i/'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['stylus', 'concat', 'uglify', 'imagemin']);

};