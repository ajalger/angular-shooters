#Angular Shooters

![](http://brunch.io/images/others/gulp.png) ![](http://megahbite.github.io/bourbon-talk/img/bourbon-logo.png)

This is a skeleton template using AngularJS, Bourbon and Neat, NodeJS, and ExpressJS 4.x so you can just take a shot and Gulp. The skeleton is based on several Yeoman generators that I have used. However, I wanted to use a different task runner than Grunt, thus I used Gulp, and I wanted Bourbon and Neat right out of the box. So, I decided to try to make my own skeleton to use for projects.

This skeleton connects Bourbon and Neat through NodeJS to GulpJS and uses ExpressJS to allow you to create various routes you may need for your API. Everything is connected through AngularJS, and I have also included UI Router so you would not have to.  

The current directory tree is as follows:

```
├── LICENSE
├── README.md
├── app
│   ├── index.html
│   ├── routes
│   │   └── index.js
│   ├── scripts
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── controller.js
│   │   ├── directives
│   │   │   └── directive.js
│   │   ├── filters
│   │   │   └── filter.js
│   │   ├── minjs
│   │   │   └── app.js
│   │   └── services
│   │       └── service.js
│   ├── stylesheets
│   │   └── scss
│   │       └── main.scss
│   └── views
│       ├── _app.html
│       └── _landing.html
├── bower.json
├── gulpfile.js
├── package.json
└── server.js
```

If you like the project, please use it. Just make sure to run ```npm install``` and ```bower install``` to get all the dependencies.

I will continue to work on this project. If you have any improvements, please fork and make a pull request. 

###Update:
 - I've written all the AngularJS using IFFEs. I've also added the Angular files for each folder.
 - Working on an update to the skeleton (5/20/15)
 - Updated Angular code to follow (somewhat) John Papa's Angular Style Guide (5/27/2015)
 - Updated Gulp-Ruby-Sass to use Node-Neat in a new configuration (6/23/2015)
 - I intend to update this project to include ES2015, all NPM modules, and reconfigure the folders. (2/4/2016)
 - I am going to fix the file structure in order to promote Angular best practices where each module will have its own file. The current skeleton does not have this. Additionally, I will refactor some of the boilerplate code to make it more purty!

##LICENSE

The MIT License (MIT)

Copyright (c) 2016 Abdullah J. Alger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
