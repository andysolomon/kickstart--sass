module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    watch: {
      sass: {
        files: ['./**/*.{sass,scss}'],
        tasks: 'scss'
      }
    },

    sass: {
      build: {
        files : [
          {
            src : ['**/*.{sass,scss}', '!**/_*.{sass,scss}'],
            cwd : './',
            dest : 'dist',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'expanded'
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('scss', ['sass']);
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
