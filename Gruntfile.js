module.exports = function (grunt) {
grunt.initConfig({
  
  ts: {
      default : {
        src: ["src/**/*.ts"],
        out: 'dist/connect4.js'
      }
    }
    
});


require('load-grunt-tasks')(grunt);

grunt.registerTask('default', ['ts']);

};