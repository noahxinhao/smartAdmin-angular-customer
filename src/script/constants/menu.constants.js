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
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              }
            ]
          },
          {
            title: "账号管理",
            titleText: "账号管理",
            titleClass: "fa fa-lg fa-fw fa-home",
            url: "",
            sub: [
              {
                title: "甲方账号管理",
                titleText: "甲方账号管理",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              },
              {
                title: "乙方账号管理",
                titleText: "甲方账号管理",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              },
              {
                title: "组账号管理",
                titleText: "组账号管理",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              },
              {
                title: "催收员账号管理",
                titleText: "催收员账号管理",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              }
            ]
          },
          {
            title: "案件管理",
            titleText: "案件管理",
            titleClass: "fa fa-lg fa-fw fa-home",
            url: "",
            sub: [
              {
                title: "分配案件到催收机构",
                titleText: "分配案件到催收机构",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              },
              {
                title: "分配案件到催收组",
                titleText: "分配案件到催收组",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              },
              {
                title: "分配案件到催收员",
                titleText: "分配案件到催收员",
                titleClass: "fa fa-lg fa-fw fa-archive",
                url: ""
              }
            ]
          },
          {
            title: "案件撤回",
            titleText: "案件撤回",
            titleClass: "fa fa-lg fa-fw fa-home",
            url: "",
            sub: [
              {
                title: "撤回案件",
                titleText: "撤回案件",
                titleClass: "fa fa-lg fa-fw fa-archive",
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
