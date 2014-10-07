module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */\n',

        cssmin: {
            build: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'dist/css/bl-utilities.min.css': ['dist/css/bl-utilities.css']
                }
            }
        },

        // Task configuration
        less: {
            build: {
                options: {
                    paths: [
                        "bower_components/bootstrap/less",
                        "src/less"
                    ]
                },
                files: {
                    "dist/css/bl-utilities.css": ["src/less/bl-config.less"]
                }
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task
    grunt.registerTask('default', ['less','cssmin']);
};

