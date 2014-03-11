//Gruntfile
module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      app: {
        src: [
          './public/assets/bower/jquery/dist/jquery.js',
          './public/assets/bower/bootstrap/dist/js/bootstrap.js',
        ],
        dest: './public/assets/js/app.js',
      },
    },
    cssmin: {
      app: {
        src: [
          './public/assets/bower/bootstrap/dist/css/bootstrap.css',
        ],
        dest: './public/assets/css/app.css'
      }
    },
    uglify: {
      options: {
        mangle: false 
      },
      app: {
        files: {
          './public/assets/js/app.js': './public/assets/js/app.js',
        }
      },
    },
    copy: {
      app: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: './public/assets/bower/bootstrap/fonts/',
            src: ['**'], 
            dest: './public/assets/fonts/', 
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      app: {
        files: [
          './public/assets/bower/jquery/dist/jquery.js',
          './public/assets/bower/bootstrap/dist/js/bootstrap.js',
          './public/assets/bower/bootstrap/dist/css/bootstrap.css',
        ],   
        tasks: ['concat:app','uglify:app','cssmin:app','copy:app'],
        options: {
          livereload: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('default', ['concat:app','uglify:app','cssmin:app','copy:app']);

};
