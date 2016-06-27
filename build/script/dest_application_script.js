(function (angular) {
  'use strict';

  angular.module('app.router', []);
  angular.module('app.config', []);
  angular.module('app.interceptor', []);
  angular.module('app.constants', []);
  angular.module('app.services', []);
  angular.module('app.factory', []);
  angular.module('app.filters', []);
  angular.module('app.controllers', []);
  angular.module('app.directives', []);
  angular.module('app.components', []);

  angular
    .module('app',
    [
      'ngResource',
      'ui.bootstrap',
      'ui.router',
      'toastr',

      'app.config',
      'app.router',
      'app.constants',
      'app.services',
      'app.factory',
      'app.controllers',
      'app.filters',
      'app.interceptor',
      'app.directives',
      'app.components'
    ])
    .constant('APP_CONFIG', window.appConfig)
    .run(function () {

    });
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.router')
    .config(appConfig)
    .constant('APP_CONFIG', window.appConfig)

  function appConfig() {
    var appConfig = window.appConfig || {};

    appConfig.menu_speed = 200;

    appConfig.smartSkin = "smart-style-1";

    appConfig.voice_command = true;
    appConfig.voice_command_auto = false;

    appConfig.skins = [
      {
        name: "smart-style-0",
        logo: "images/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"
      },

      {
        name: "smart-style-1",
        logo: "images/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"
      },

      {
        name: "smart-style-2",
        logo: "images/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"
      },

      {
        name: "smart-style-3",
        logo: "images/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"
      },

      {
        name: "smart-style-4",
        logo: "images/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"
      },

      {
        name: "smart-style-5",
        logo: "images/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"
      },

      {
        name: "smart-style-6",
        logo: "images/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #2196F3; border: 1px solid rgba(121, 161, 221, 0.8); color: #FFF !important;",
        beta: true,
        label: "MaterialDesign"
      }
    ];


    appConfig.sound_path = "sound/";
    appConfig.sound_on = true;

    /*
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */

    appConfig.debugState = false;
    appConfig.debugStyle = 'font-weight: bold; color: #00f;';
    appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
    appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
    appConfig.debugStyle_warning = 'background-color:yellow';
    appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
    appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';

    appConfig.apiRootUrl = '/mock';

    window.appConfig = appConfig;


    $.sound_path = appConfig.sound_path;
    $.sound_on = appConfig.sound_on;

//初始化侧边栏缩放
    $.fn.extend({
      //pass the options variable to the function
      jarvismenu: function (options) {
        var defaults = {
            accordion: 'true',
            speed: 200,
            closedSign: '[+]',
            openedSign: '[-]'
          },
        // Extend our default options with those provided.
          opts = $.extend(defaults, options),
        //Assign current element to variable, in this case is UL element
          $this = $(this);

        //add a mark [+] to a multilevel menu
        $this.find("li").each(function () {
          if ($(this).find("ul").size() !== 0) {
            //add the multilevel sign next to the link
            $(this).find("a:first").append("<b class='collapse-sign'>" + opts.closedSign + "</b>");

            //avoid jumping to the top of the page when the href is an #
            if ($(this).find("a:first").attr('href') == "#") {
              $(this).find("a:first").click(function () {
                return false;
              });
            }
          }
        });

        //open active level
        $this.find("li.active").each(function () {
          $(this).parents("ul").slideDown(opts.speed);
          $(this).parents("ul").parent("li").find("b:first").html(opts.openedSign);
          $(this).parents("ul").parent("li").addClass("open");
        });

        $this.find("li a").click(function () {

          if ($(this).parent().find("ul").size() !== 0) {

            if (opts.accordion) {
              //Do nothing when the list is open
              if (!$(this).parent().find("ul").is(':visible')) {
                var parents = $(this).parent().parents("ul");
                var visible = $this.find("ul:visible");
                visible.each(function (visibleIndex) {
                  var close = true;
                  parents.each(function (parentIndex) {
                    if (parents[parentIndex] == visible[visibleIndex]) {
                      close = false;
                      return false;
                    }
                  });
                  if (close) {
                    if ($(this).parent().find("ul") != visible[visibleIndex]) {
                      $(visible[visibleIndex]).slideUp(opts.speed, function () {
                        $(this).parent("li").find("b:first").html(opts.closedSign);
                        $(this).parent("li").removeClass("open");
                      });

                    }
                  }
                });
              }
            }// end if
            if ($(this).parent().find("ul:first").is(":visible") && !$(this).parent().find("ul:first").hasClass("active")) {
              $(this).parent().find("ul:first").slideUp(opts.speed, function () {
                $(this).parent("li").removeClass("open");
                $(this).parent("li").find("b:first").delay(opts.speed).html(opts.closedSign);
              });

            } else {
              $(this).parent().find("ul:first").slideDown(opts.speed, function () {
                /*$(this).effect("highlight", {color : '#616161'}, 500); - disabled due to CPU clocking on phones*/
                $(this).parent("li").addClass("open");
                $(this).parent("li").find("b:first").delay(opts.speed).html(opts.openedSign);
              });
            } // end else
          } // end if
        });
      } // end function
    });
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  angular.module('app.router').config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'templates/main/basic.html',
        controller: "mainCtrl",
        controllerAs: "main"
      })
      .state('app.main', {
        url: '/main',
        views: {
          "content": {
            templateUrl: 'templates/main/main.html'
          }
        }
      });
    $urlRouterProvider.otherwise('app/main');
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  mainCtrl.$inject = ["$scope", "APP_MENU"];
  angular.module('app.controllers').controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, APP_MENU) {
    var vm = this;
    vm.menu = APP_MENU.aside.nav;

    //初始化侧边栏
    vm.initMenu = function () {
      $scope.$on("MENU_RENDER_FINISH", function (ngRepeatFinishedEvent) {
        //下面是在table render完成后执行的js
        $('nav ul').jarvismenu({
          accordion: true,
          speed: true,
          closedSign: '<em class="fa fa-plus-square-o"></em>',
          openedSign: '<em class="fa fa-minus-square-o"></em>'
        });
      });
    };

    vm.minifyMenu = function (e) {
      if (!$.root_.hasClass("menu-on-top")) {
        $.root_.toggleClass("minified");
        $.root_.removeClass("hidden-menu");
        $('html').removeClass("hidden-menu-mobile-lock");
        $this.effect("highlight", {}, 500);
      }
      e.preventDefault();
    };

    vm.initMenu();
  }
})(angular);

/**
 * Created by noahli on 16/6/25.
 */
(function (angular) {
  "use strict";
  angular.module('app.constants')
    .constant('APP_MENU', {
      aside: {
        nav: [
          {
            title: "主页",
            titleText: "机构管理",
            titleClass: "fa fa-lg fa-fw fa-home",
            url: "",
            sub: [
              {
                title: "甲方机构管理",
                titleText: "甲方机构管理",
                titleClass: "",
                url: ""
              },
              {
                title: "乙方机构管理",
                titleText: "乙方机构管理",
                titleClass: "",
                url: ""
              },
              {
                title: "组管理",
                titleText: "乙方机构管理",
                titleClass: "",
                url: ""
              }
            ]
          },
          {
            title: "SmartAdmin Intel",
            titleText: "SmartAdmin Intel",
            titleClass: "fa fa-lg fa-fw fa-cube txt-color-blue",
            url: "",
            sub: [
              {
                title: "Dashboard",
                titleText: "App Layouts",
                titleClass: "fa fa-lg fa-fw fa-gear",
                url: ""
              },
              {
                title: "Dashboard",
                titleText: "Prebuilt Skins",
                titleClass: "fa fa-lg fa-fw fa-picture-o",
                url: ""
              },
              {
                title: "Dashboard",
                titleText: "App Variations",
                titleClass: "fa fa-stack-overflow",
                url: ""
              }
            ]
          }
        ]
      }
    });
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  activitiesDropdownToggle.$inject = ["$log"];
  angular.module('app.directives').directive('activitiesDropdownToggle', activitiesDropdownToggle);
  function activitiesDropdownToggle($log) {
    var link = function($scope,$element, attrs){
      var ajax_dropdown = null;

      $element.on('click',function(){
        var badge = $(this).find('.badge');

        if (badge.hasClass('bg-color-red')) {

          badge.removeClass('bg-color-red').text(0);

        }

        ajax_dropdown = $(this).next('.ajax-dropdown');

        if (!ajax_dropdown.is(':visible')) {

          ajax_dropdown.fadeIn(150);

          $(this).addClass('active');

        }
        else {

          ajax_dropdown.fadeOut(150);

          $(this).removeClass('active');

        }

      });

      $(document).mouseup(function(e) {
        if (ajax_dropdown && !ajax_dropdown.is(e.target) && ajax_dropdown.has(e.target).length === 0) {
          ajax_dropdown.fadeOut(150);
          $element.removeClass('active');
        }
      });
    };

    return{
      restrict:'EA',
      link:link
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('test', test);
  function test() {
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('fullScreen', fullScreen);
  function fullScreen() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');
        var toggleFullSceen = function (e) {
          if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          } else {
            $body.removeClass("full-screen");
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          }
        };

        element.on('click', toggleFullSceen);

      }
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('minifyMenu', minifyMenu);
  angular.module('app.directives').directive('toggleMenu', toggleMenu);

  function minifyMenu() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');
        var minifyMenu = function () {
          if (!$body.hasClass("menu-on-top")) {
            $body.toggleClass("minified");
            $body.removeClass("hidden-menu");
            $('html').removeClass("hidden-menu-mobile-lock");
          }
        };

        element.on('click', minifyMenu);
      }
    }
  }

  function toggleMenu() {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var $body = $('body');

        var toggleMenu = function () {
          if (!$body.hasClass("menu-on-top")) {
            $('html').toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
          } else if ($body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated")) {
            $('html').toggleClass("hidden-menu-mobile-lock");
            $body.toggleClass("hidden-menu");
            $body.removeClass("minified");
          }
        };

        element.on('click', toggleMenu);

        scope.$on('requestToggleMenu', function () {
          toggleMenu();
        });
      }
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  renderFinish.$inject = ["$timeout"];
  angular.module('app.directives').directive('renderFinish', renderFinish);
  function renderFinish($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('MENU_RENDER_FINISH');
          });
        }
      }
    };
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  angular.module('app.directives').directive('smartMenu', ["$state", "$rootScope", function ($state, $rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var $body = $('body');

        var $collapsible = element.find('li[data-menu-collapse]');

        var bindEvents = function () {
          $collapsible.each(function (idx, li) {
            var $li = $(li);
            $li
              .on('click', '>a', function (e) {

                // collapse all open siblings
                $li.siblings('.open').smartCollapseToggle();

                // toggle element
                $li.smartCollapseToggle();

                // add active marker to collapsed element if it has active childs
                if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                  $li.addClass('active')
                }

                e.preventDefault();
              })
              .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

            // initialization toggle
            if ($li.find('li.active').length) {
              $li.smartCollapseToggle();
              $li.find('li.active').parents('li').addClass('active');
            }
          });
        }
        bindEvents();


        // click on route link
        element.on('click', 'a[data-ui-sref]', function (e) {
          // collapse all siblings to element parents and remove active markers
          $(this)
            .parents('li').addClass('active')
            .each(function () {
              $(this).siblings('li.open').smartCollapseToggle();
              $(this).siblings('li').removeClass('active')
            });

          if ($body.hasClass('mobile-view-activated')) {
            $rootScope.$broadcast('requestToggleMenu');
          }
        });


        scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
          if (menuOnTop) {
            $collapsible.filter('.open').smartCollapseToggle();
          }
        });
      }
    }
  }]);
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  smartMenuItems.$inject = ["$http", "$rootScope", "$compile"];
  angular.module('app.directives').directive('smartMenuItems', smartMenuItems);

  function smartMenuItems($http, $rootScope, $compile) {
    return {
      restrict: 'A',
      compile: function (element, attrs) {
        function createItem(item, parent, level) {
          var li = $('<li />', {'ui-sref-active': "active"})
          var a = $('<a />');
          var i = $('<i />');

          li.append(a);

          if (item.sref)
            a.attr('ui-sref', item.sref);
          if (item.href)
            a.attr('href', item.href);
          if (item.icon) {
            i.attr('class', 'fa fa-lg fa-fw fa-' + item.icon);
            a.append(i);
          }
          if (item.title) {
            a.attr('title', item.title);
            if (level == 1) {
              a.append(' <span class="menu-item-parent">' + item.title + '</span>');
            } else {
              a.append(' ' + item.title);

            }
          }

          if (item.items) {
            var ul = $('<ul />');
            li.append(ul);
            li.attr('data-menu-collapse', '');
            _.forEach(item.items, function (child) {
              createItem(child, ul, level + 1);
            })
          }

          parent.append(li);
        }


        $http.get(attrs.smartMenuItems).then(function (res) {
          var ul = $('<ul />', {
            'smart-menu': ''
          })
          _.forEach(res.data.items, function (item) {
            createItem(item, ul, 1);
          })

          var $scope = $rootScope.$new();
          var html = $('<div>').append(ul).html();
          var linkingFunction = $compile(html);

          var _element = linkingFunction($scope);

          element.replaceWith(_element);
        })
      }
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';
  speechRecognition.$inject = ["$log"];
  angular.module('app.directives').directive('speechRecognition', speechRecognition);

  function speechRecognition($log) {
    $.root_ = $('body');
    var root, commands;

    root = window;
    window.appConfig = window.appConfig || {};

    if (appConfig.voice_command) {
      commands = appConfig.commands;
    }

    /*
     * SMART VOICE
     * Author: MyOrange | @bootstraphunt
     * http://www.myorange.ca
     */

    var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


// function
    $.speechApp = (function (speech) {

      speech.start = function () {

        // Add our commands to smartSpeechRecognition
        smartSpeechRecognition.addCommands(commands);

        if (smartSpeechRecognition) {
          // activate plugin
          smartSpeechRecognition.start();
          // add btn class
          $.root_.addClass("voice-command-active");
          // play sound
          $.speechApp.playON();
          // set localStorage when switch is on manually
          if (appConfig.voice_localStorage) {
            localStorage.setItem('sm-setautovoice', 'true');
          }

        } else {
          // if plugin not found
          alert("speech plugin not loaded");
        }

      };
      speech.stop = function () {

        if (smartSpeechRecognition) {
          // deactivate plugin
          smartSpeechRecognition.abort();
          // remove btn class
          $.root_.removeClass("voice-command-active");
          // sound
          $.speechApp.playOFF();
          // del localStorage when switch if off manually
          if (appConfig.voice_localStorage) {
            localStorage.setItem('sm-setautovoice', 'false');
          }
          // remove popover if visible
          if ($('#speech-btn .popover').is(':visible')) {
            $('#speech-btn .popover').fadeOut(250);
          }
        }

      };

      // play sound
      speech.playON = function () {

        var audioElement = document.createElement('audio');

        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
        else
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

        //$.get();
        audioElement.addEventListener("load", function () {
          audioElement.play();
        }, true);

        if (appConfig.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };
      speech.playOFF = function () {

        var audioElement = document.createElement('audio');

        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
        else
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

        $.get();
        audioElement.addEventListener("load", function () {
          audioElement.play();
        }, true);

        if (appConfig.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };

      speech.playConfirmation = function () {

        var audioElement = document.createElement('audio');

        if (navigator.userAgent.match('Firefox/'))
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
        else
          audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

        $.get();
        audioElement.addEventListener("load", function () {
          audioElement.play();
        }, true);

        if (appConfig.sound_on) {
          audioElement.pause();
          audioElement.play();
        }
      };

      console.log(speech);

      return speech;
    })
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  systemLayoutStates.$inject = ["$rootScope"];
  angular.module('app.directives').directive('systemLayoutStates', systemLayoutStates);
  function systemLayoutStates($rootScope) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/directiveTpl/system-layout-states.tpl.html',
      scope: true,
      link: function (scope, element, attributes) {
        element.parent().css({
          position: 'relative'
        });

        element.on('click', '#demo-setting', function () {
          element.toggleClass('activate')
        })
      },
      controller: ["$scope", function ($scope) {
        var $root = $('body');

        $scope.$watch('fixedHeader', function (fixedHeader) {
          localStorage.setItem('sm-fixed-header', fixedHeader);
          $root.toggleClass('fixed-header', fixedHeader);
          if (fixedHeader == false) {
            $scope.fixedRibbon = false;
            $scope.fixedNavigation = false;
          }
        });


        $scope.$watch('fixedNavigation', function (fixedNavigation) {
          localStorage.setItem('sm-fixed-navigation', fixedNavigation);
          $root.toggleClass('fixed-navigation', fixedNavigation);
          if (fixedNavigation) {
            $scope.insideContainer = false;
            $scope.fixedHeader = true;
          } else {
            $scope.fixedRibbon = false;
          }
        });


        $scope.$watch('fixedRibbon', function (fixedRibbon) {
          localStorage.setItem('sm-fixed-ribbon', fixedRibbon);
          $root.toggleClass('fixed-ribbon', fixedRibbon);
          if (fixedRibbon) {
            $scope.fixedHeader = true;
            $scope.fixedNavigation = true;
            $scope.insideContainer = false;
          }
        });

        $scope.$watch('fixedPageFooter', function (fixedPageFooter) {
          localStorage.setItem('sm-fixed-page-footer', fixedPageFooter);
          $root.toggleClass('fixed-page-footer', fixedPageFooter);
        });

        $scope.$watch('insideContainer', function (insideContainer) {
          localStorage.setItem('sm-inside-container', insideContainer);
          $root.toggleClass('container', insideContainer);
          if (insideContainer) {
            $scope.fixedRibbon = false;
            $scope.fixedNavigation = false;
          }
        });

        $scope.$watch('rtl', function (rtl) {
          localStorage.setItem('sm-rtl', rtl);
          $root.toggleClass('smart-rtl', rtl);
        });

        $scope.$watch('menuOnTop', function (menuOnTop) {
          $rootScope.$broadcast('$smartLayoutMenuOnTop', menuOnTop);
          localStorage.setItem('sm-menu-on-top', menuOnTop);
          $root.toggleClass('menu-on-top', menuOnTop);

          if (menuOnTop)$root.removeClass('minified');
        });

        $scope.$watch('colorblindFriendly', function (colorblindFriendly) {
          localStorage.setItem('sm-colorblind-friendly', colorblindFriendly);
          $root.toggleClass('colorblind-friendly', colorblindFriendly);
        });

        $scope.fixedHeader = localStorage.getItem('sm-fixed-header') ? localStorage.getItem('sm-fixed-header') == 'true' : 'true';
        $scope.fixedNavigation = localStorage.getItem('sm-fixed-navigation') ? localStorage.getItem('sm-fixed-navigation') == 'true' : 'true';
        $scope.fixedRibbon = localStorage.getItem('sm-fixed-ribbon') ? localStorage.getItem('sm-fixed-ribbon') == 'true' : 'false';
        $scope.fixedPageFooter = localStorage.getItem('sm-fixed-page-footer') ? localStorage.getItem('sm-fixed-page-footer') == 'true' : 'false';
        $scope.insideContainer = localStorage.getItem('sm-inside-container') == 'true';
        $scope.rtl = localStorage.getItem('sm-rtl') == 'true';
        $scope.menuOnTop = localStorage.getItem('sm-menu-on-top') == 'true' || $root.hasClass('menu-on-top');
        $scope.colorblindFriendly = localStorage.getItem('sm-colorblind-friendly') == 'true';


        $scope.skins = appConfig.skins;


        $scope.smartSkin = localStorage.getItem('sm-skin') ? localStorage.getItem('sm-skin') : appConfig.smartSkin;

        $scope.setSkin = function (skin) {
          $scope.smartSkin = skin.name;
          $root.removeClass(_.pluck($scope.skins, 'name').join(' '));
          $root.addClass(skin.name);
          localStorage.setItem('sm-skin', skin.name);
          $("#logo img").attr('src', skin.logo);
        };


        if ($scope.smartSkin != "smart-style-3") {
          $scope.setSkin(_.find($scope.skins, {name: $scope.smartSkin}))
        }


        $scope.factoryReset = function () {
          $.SmartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content: "Would you like to RESET all your saved widgets and clear LocalStorage?1",
            buttons: '[No][Yes]'
          }, function (ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
              localStorage.clear();
              location.reload()
            }
          });
        }
      }]
    }
  }
})(angular);

/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';

  toggleShortcut.$inject = ["$log", "$timeout"];
  angular.module('app.directives').directive('toggleShortcut', toggleShortcut);

  function toggleShortcut($log, $timeout) {

    var initDomEvents = function ($element) {

      var shortcut_dropdown = $('#shortcut');

      $element.on('click', function () {

        if (shortcut_dropdown.is(":visible")) {
          shortcut_buttons_hide();
        } else {
          shortcut_buttons_show();
        }

      })

      shortcut_dropdown.find('a').click(function (e) {
        e.preventDefault();
        window.location = $(this).attr('href');
        setTimeout(shortcut_buttons_hide, 300);
      });


      // SHORTCUT buttons goes away if mouse is clicked outside of the area
      $(document).mouseup(function (e) {
        if (shortcut_dropdown && !shortcut_dropdown.is(e.target) && shortcut_dropdown.has(e.target).length === 0) {
          shortcut_buttons_hide();
        }
      });

      // SHORTCUT ANIMATE HIDE
      function shortcut_buttons_hide() {
        shortcut_dropdown.animate({
          height: "hide"
        }, 300, "easeOutCirc");
        $('body').removeClass('shortcut-on');

      }

      // SHORTCUT ANIMATE SHOW
      function shortcut_buttons_show() {
        shortcut_dropdown.animate({
          height: "show"
        }, 200, "easeOutCirc");
        $('body').addClass('shortcut-on');
      }
    };

    var link = function ($scope, $element) {
      $timeout(function () {
        initDomEvents($element);
      });
    };

    return {
      restrict: 'EA',
      link: link
    }
  }
})(angular);

///**
// * Created by noahli on 16/6/25.
// */
//(function (angular) {
//  'use strict';
//
//  angular.module('app.factory').factory('Language', Language);
//
//  function Language($http, APP_CONFIG) {
//    function getLanguage(key, callback) {
//
//      $http.get(APP_CONFIG.apiRootUrl + '/langs/' + key + '.json').success(function (data) {
//
//        callback(data);
//
//      }).error(function () {
//
//        $log.log('Error');
//        callback([]);
//
//      });
//
//    }
//
//    function getLanguages(callback) {
//
//      $http.get(APP_CONFIG.apiRootUrl + '/languages.json').success(function (data) {
//
//        callback(data);
//
//      }).error(function () {
//
//        $log.log('Error');
//        callback([]);
//
//      });
//
//    }
//
//    return {
//      getLang: function (type, callback) {
//        getLanguage(type, callback);
//      },
//      getLanguages: function (callback) {
//        getLanguages(callback);
//      }
//    }
//  }
//})(angular);
