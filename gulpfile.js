var gulp = require('gulp');
var projectFiles = require('./scripts/gulp-folders');

var PATH_TO_APP = 'www/app';
var paths = {
    sass: ['./scss/**/*.scss'],
    templatecache: ['./www/app/**/*.html']
};


gulp.task('create-folders', function () {
    var args = process.argv;
    if (args[3] === "--n") {
        var item = args[4];
        var folderLocation = PATH_TO_APP + '/' + item + '/';
        projectFiles.createFolder(folderLocation);
        projectFiles.createFiles(folderLocation, item);
    }
});