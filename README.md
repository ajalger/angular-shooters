#Angular Shooters

This is a skeleton template using AngularJS, Bourbon and Neat, NodeJS, and ExpressJS 4.x so you can just take a shot and Gulp. The skeleton is based on several Yeoman generators that I have used. However, I wanted to use a different task runner than Grunt, thus I used Gulp, and I wanted Bourbon and Neat right out of the box. So, I decided to try to make my own skeleton to use for projects.

This skeleton connects Bourbon and Neat through NodJS and GlupJS and uses ExpressJS to allow you to create various routes you may need for your API. Everything is connected through AngularJS, and I have also included UI Router so you would not have to.  

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
│   │   |.. └── controller1.js
│   │   ├── directives
│   │   |.. └── directive1.js
|.. |.. ├── filters
│   │   |.. └── filter1.js
|.. |.. ├── minjs
│   │   └── services
│   │   |.. └── service1.js
│   ├── stylesheets
│   │   └── scss
│   ├──  views
|.. |.. ├── _app.html
|.. |.. └── _landing.html
├── gulpfile.js
├── package.json
└── server.js
```

If you like the project, please use it. Just make sure to run ```npm install``` and ```bower install``` to get all the dependencies.

I will continue to work on this project. If you have any improvements, please fork and make a pull request. 

###Update:
I've written all the AngularJS using IFFEs. I've also added the Angular files for each folder. 

##LICENSE

The MIT License (MIT)

Copyright (c) 2015 Abdullah J. Alger

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
