module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> */\n',
      },
      build: {
        src: ['src/js/*.js', '!src/js/ui.js', 'src/js/ui.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      html: {
        src: 'src/html/index.prod.html',
        dest: 'build/index.html'
      },
      static: {
        files: [{
          expand: true,
          cwd: 'src/static',
          src: '*.*',
          dest: 'build/static',
        }]
      }
    },
    cssmin: {
      options: {
        level: 2
      },
      base: {
        files: {
          'build/css/base.min.css': ['src/css/style.css']
        }
      },
      media: {
        src: ['src/css/*.css', '!src/css/style.css'],
        dest: 'build/css/media.min.css'
      }
    },
    watch: {
      less: {
        files: 'src/css/*.less',
        tasks: ['less'],
      },
      css: {
        files: 'src/css/*.css',
        tasks: ['cssmin']
      },
      scripts: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      },
      html: {
        files: 'src/html/index.prod.html',
        tasks: ['copy:html']
      },
      static: {
        files: 'src/static(*.*',
        tasks: ['copy:static']
      }
    },
    less: {
      build: {
        files: {
          'src/css/style.css': 'src/css/style.less'
        }
      }
    }
  });
//..
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy']);
};