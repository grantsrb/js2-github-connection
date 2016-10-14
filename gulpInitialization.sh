#!/bin/bash
npm init
npm install gulp --save-dev
npm install browserify --save-dev
npm install vinyl-source-stream --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-util --save-dev
npm install del --save-dev
npm install jshint --save-dev
npm install gulp-jshint --save-dev

bower init
bower install jquery --save
bower install bootstrap --save
bower install moment --save
npm install bower-files --save-dev
npm install browser-sync --save-dev

npm install gulp-sass gulp-sourcemaps --save-dev

# Use these in the head:
# <link rel="stylesheet" href="build/css/vendor.css">
# <link rel="stylesheet" href="css/styles.css">
# <script src="build/js/vendor.min.js"></script>
# <script type="text/javascript" src="build/js/app.js"></script>
