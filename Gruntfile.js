module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    watch: {
      sass: {
        files: ['./**/*.{sass,scss}'],
        tasks: 'sass'
      }
    },

    sass: {
      build: {
        files : [
          {
            src : ['kickstart.{sass,scss}'],
            cwd : './',
            dest : 'dist',
            ext : '.scss',
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
