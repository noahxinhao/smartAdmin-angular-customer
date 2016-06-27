/**
 * Created by noahli on 16/6/23.
 */
'use strict';
var filter = require('filter-array')
  , mainBowerFiles = require('main-bower-files');

exports.paths = {
  src: 'src',
  dist: 'build',
  tmp: '.tmp',
  e2e: 'e2e'
};

//插件配置
exports.pluginOpt = {
  bowerFileOpt: {
    paths: {
      bowerDirectory: './src/lib',
      bowerrc: '.bowerrc',
      bowerJson: 'bower.json'
    },
    debugging: false
  },
  minifyCssopt: {
    processImport: false
  },
  order: {
    js: {
      lib: [
        'lib/jquery/dist/jquery.js',
        'lib/angular/angular.js',
        'lib/moment/moment.js'
      ],
      application: [
        'script/app.js',
        'script/config/**/*.js',
        'script/services/**/*.js',
        'script/controllers/**/*.js',
        'script/constants/**/*.js',
        'script/directives/**/*.js',
        'script/filter/*.js'
      ],
      components: []
    },
    css: {
      lib: [
        'lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/font-awesome/css/font-awesome.css'

      ],
      application: [],
      components: [
        'style/components/smartadmin/smartadmin-production-plugins.min.css',
        'style/components/smartadmin/smartadmin-production.min.css',
        'style/components/smartadmin/smartadmin-skins.min.css'
      ]
    }
  },
  inject: {
    bower: {
      name: 'bower',
      relative: true,
      ignorePath: '../build'
    },
    application: {
      name: 'application',
      relative: true,
      ignorePath: '../build/'
    },
    template: {
      name: "template",
      relative: true,
      ignorePath: '../build/'
    },
    components: {
      name: "components",
      relative: true,
      ignorePath: '../build/'
    }
  },
  gzip: {
    threshold: 512,
    level: 9,
    memLevel: 2
  },
  html: {
    removeComments: true,
    removeCommentsFromCDATA: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeScriptTypeAttributes: true
  },
  html2js: {
    base: 'src/',
    outputModuleName: 'app',
    useStrict: true
  }
};

//项目文件路径配置
exports.filePathConf = {
  bower: {
    lib: {
      js: filter(mainBowerFiles(this.pluginOpt.bowerFileOpt), /\.js$/),
      css: filter(mainBowerFiles(this.pluginOpt.bowerFileOpt), /\.css/),
      font: filter(mainBowerFiles(this.pluginOpt.bowerFileOpt), /\.(woff|eot|svg|ttf)$/)
    }
  },
  static: {
    js: {
      application: [
        'src/script/app.js',
        'src/script/config/**/*.js',
        'src/script/router/**/*.js',
        'src/script/services/**/*.js',
        'src/script/controllers/**/*.js',
        'src/script/constants/**/*.js',
        'src/script/directives/**/*.js',
        'src/script/filters/**/*.js',
        'src/script/factory/**/*.js'
      ],
      components: ['src/script/components/**/*.js']
    },
    css: {
      application: [
        'src/style/*.css'
      ],
      components: ['src/style/components/**/*.css']
    },
    template: ['src/templates/**/*.html'],
    temporary: ['src/mock/**/**.json'],
    ref: ['src/script/**/*.*', 'src/style/**/*.*'],
    images: [
      'src/images/**/*.*'
    ],
    fonts: [
      'src/lib/font-awesome/fonts/*',
      'src/lib/bootstrap/dist/fonts/*',
      'src/fonts/*'
    ],
    manifest: {
      build: [
        'build/**/*.html',
        'build/script/**/*.js',
        'build/style/**/*.css',
        'build/images/**/*.*',
        'build/fonts/**/*.*',
        'build/**/*.*'
      ],
      local: [
        'src/*.html',
        'src/script/**/*.js',
        'src/style/**/*.css',
        'src/images/**/*.*'
      ]
    }
  }
};

