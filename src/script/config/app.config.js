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
