/*
 * grunt-contrib-rename
 * https://github.com/jasonlam604/grunt-contrib-rename
 *
 * Copyright (c) 2013 Jason Lam, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    clean: ["tmp"],

		copy: {
			main: {
				files: [
					{src: ['test/fixtures/**'], dest: 'tmp/'}, // includes files in path and its subdirs
				]
			}
		},

		rename: {
			main: {
				files: [
					{src: ['tmp/test/fixtures/file-original.txt'], dest: 'tmp/test/fixtures/file-renamed.txt'},
					{src: ['tmp/test/fixtures/folderorig'], dest: 'tmp//test/fixtures/folder-renamed'}
				]
			}
		},

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['clean','copy', 'rename', 'nodeunit']);
  grunt.registerTask('default', ['clean','jshint','copy', 'rename', 'nodeunit']);
};
