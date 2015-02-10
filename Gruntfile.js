'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    express: {
        options: {
          script: './index.js'
        }
      },
    jshint: {
      options:{
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true
        }
      },
    src: ['Gruntfile.js',
          'lib/**/*.js',
          'test/**/*.js',
          'index.js']
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'express', 'simplemocha:all']);
  grunt.registerTask('default', ['test']);
};
