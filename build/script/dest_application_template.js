(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/directiveTpl/system-layout-states.tpl.html",
    "<div class=\"demo\"><span id=\"demo-setting\"><i class=\"fa fa-cogs fa-spin txt-color-blueDark\"></i></span>\n" +
    "\n" +
    "  <form>\n" +
    "    <legend class=\"no-padding margin-bottom-10\">系统布局</legend>\n" +
    "    <section>\n" +
    "      <label><input type=\"checkbox\" ng-model=\"fixedHeader\"\n" +
    "                    class=\"checkbox style-0\"><span>头部固定</span></label>\n" +
    "      <label><input type=\"checkbox\"\n" +
    "                    ng-model=\"fixedNavigation\"\n" +
    "                    class=\"checkbox style-0\"><span>侧边栏固定</span></label>\n" +
    "      <label><input type=\"checkbox\"\n" +
    "                    ng-model=\"fixedRibbon\"\n" +
    "                    class=\"checkbox style-0\"><span>固定导航</span></label>\n" +
    "      <label><input type=\"checkbox\"\n" +
    "                    ng-model=\"fixedPageFooter\"\n" +
    "                    class=\"checkbox style-0\"><span>页脚固定</span></label>\n" +
    "      <label><input type=\"checkbox\"\n" +
    "                    ng-model=\"insideContainer\"\n" +
    "                    class=\"checkbox style-0\"><span>窄屏显示</span></label>\n" +
    "      <label><input type=\"checkbox\"\n" +
    "                    ng-model=\"menuOnTop\"\n" +
    "                    class=\"checkbox style-0\"><span>页眉菜单</span></label>\n" +
    "      <span id=\"smart-bgimages\"></span></section>\n" +
    "    <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">清除设置</h6><a\n" +
    "      ng-click=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n" +
    "      class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n" +
    "\n" +
    "    <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">主题</h6>\n" +
    "\n" +
    "\n" +
    "    <section id=\"smart-styles\">\n" +
    "      <a ng-repeat=\"skin in skins\" ng-click=\"setSkin(skin)\" class=\"{{skin.class}}\" style=\"{{skin.style}}\"><i\n" +
    "        ng-if=\"skin.name == $parent.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup\n" +
    "        ng-if=\"skin.beta\">beta</sup></a>\n" +
    "    </section>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/main/basic.html",
    "<header id=\"header\">\n" +
    "  <div id=\"logo-group\">\n" +
    "\n" +
    "    <!-- PLACE YOUR LOGO HERE -->\n" +
    "    <span id=\"logo\"> <img src=\"images/logo.png\" alt=\"SmartAdmin\"> </span>\n" +
    "    <!-- END LOGO PLACEHOLDER -->\n" +
    "\n" +
    "    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n" +
    "                 Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n" +
    "    <span id=\"activity\" class=\"activity-dropdown\" activities-dropdown-toggle> <i class=\"fa fa-user\"></i> <b class=\"badge\"> 21 </b> </span>\n" +
    "\n" +
    "    <!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->\n" +
    "    <div class=\"ajax-dropdown\">\n" +
    "\n" +
    "      <!-- the ID links are fetched via AJAX to the ajax container \"ajax-notifications\" -->\n" +
    "      <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/mail.html\">\n" +
    "          Msgs (14) </label>\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/notifications.html\">\n" +
    "          notify (3) </label>\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/tasks.html\">\n" +
    "          Tasks (4) </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- notification content -->\n" +
    "      <div class=\"ajax-notifications custom-scroll\">\n" +
    "\n" +
    "        <div class=\"alert alert-transparent\">\n" +
    "          <h4>Click a button to show messages here</h4>\n" +
    "          This blank page message helps protect your privacy, or you can show the first message here automatically.\n" +
    "        </div>\n" +
    "\n" +
    "        <i class=\"fa fa-lock fa-4x fa-border\"></i>\n" +
    "\n" +
    "      </div>\n" +
    "      <!-- end notification content -->\n" +
    "\n" +
    "      <!-- footer: refresh area -->\n" +
    "					<span> Last updated on: 12/12/2013 9:43AM\n" +
    "						<button type=\"button\" data-loading-text=\"<i class='fa fa-refresh fa-spin'></i> Loading...\"\n" +
    "                    class=\"btn btn-xs btn-default pull-right\">\n" +
    "              <i class=\"fa fa-refresh\"></i>\n" +
    "            </button> </span>\n" +
    "      <!-- end footer -->\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- END AJAX-DROPDOWN -->\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- #PROJECTS: projects dropdown -->\n" +
    "  <div class=\"project-context hidden-xs\">\n" +
    "\n" +
    "    <span class=\"label\">Projects:</span>\n" +
    "    <span class=\"project-selector dropdown-toggle\" data-toggle=\"dropdown\">Recent projects <i\n" +
    "      class=\"fa fa-angle-down\"></i></span>\n" +
    "\n" +
    "    <!-- Suggestion: populate this list with fetch and push technique -->\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Online e-merchant management system - attaching integration with the iOS</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Notes on pipeline upgradee</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Assesment Report for merchant account</a>\n" +
    "      </li>\n" +
    "      <li class=\"divider\"></li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\"><i class=\"fa fa-power-off\"></i> Clear</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <!-- end dropdown-menu-->\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- end projects dropdown -->\n" +
    "\n" +
    "  <!-- #TOGGLE LAYOUT BUTTONS -->\n" +
    "  <!-- pulled right: nav area -->\n" +
    "  <div class=\"pull-right\">\n" +
    "\n" +
    "    <!-- collapse menu button -->\n" +
    "    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n" +
    "      <span>\n" +
    "        <a href=\"javascript:void(0);\" data-action=\"toggleMenu\" toggle-menu title=\"Collapse Menu\">\n" +
    "          <i class=\"fa fa-reorder\"></i>\n" +
    "        </a>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <!-- end collapse menu -->\n" +
    "\n" +
    "    <!-- #MOBILE -->\n" +
    "    <!-- Top menu profile link : this shows only when top menu is active -->\n" +
    "    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n" +
    "      <li class=\"\">\n" +
    "        <a href=\"#\" toggle-shortcut class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n" +
    "          <img src=\"images/avatars/sunny.png\" alt=\"John Doe\" class=\"online\"/>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i class=\"fa fa-cog\"></i>\n" +
    "              Setting</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"#ajax/profile.html\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i>\n" +
    "              <u>P</u>rofile</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n" +
    "               data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n" +
    "               data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"login.html\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n" +
    "              class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <!-- logout button -->\n" +
    "    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"login.html\" title=\"Sign Out\" data-action=\"userLogout\"\n" +
    "                data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n" +
    "        class=\"fa fa-sign-out\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end logout button -->\n" +
    "\n" +
    "    <!-- search mobile button (this is hidden till mobile view port) -->\n" +
    "    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"javascript:void(0)\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end search mobile button -->\n" +
    "\n" +
    "    <!-- #SEARCH -->\n" +
    "    <!-- input: search field -->\n" +
    "    <form action=\"#ajax/search.html\" class=\"header-search pull-right\">\n" +
    "      <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\">\n" +
    "      <button type=\"submit\">\n" +
    "        <i class=\"fa fa-search\"></i>\n" +
    "      </button>\n" +
    "      <a href=\"javascript:void(0);\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n" +
    "    </form>\n" +
    "    <!-- end input: search field -->\n" +
    "\n" +
    "    <!-- fullscreen button -->\n" +
    "    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"javascript:void(0);\" data-action=\"launchFullscreen\" full-screen title=\"Full Screen\"><i\n" +
    "        class=\"fa fa-arrows-alt\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end fullscreen button -->\n" +
    "\n" +
    "    <!-- #Voice Command: Start Speech -->\n" +
    "    <!-- NOTE: Voice command button will only show in browsers that support it. Currently it is hidden under mobile browsers.\n" +
    "                       You can take off the \"hidden-sm\" and \"hidden-xs\" class to display inside mobile browser-->\n" +
    "    <div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\">\n" +
    "      <div>\n" +
    "        <a href=\"javascript:void(0)\" title=\"语音\">\n" +
    "          <i class=\"fa fa-microphone\"></i>\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"popover bottom\">\n" +
    "          <div class=\"arrow\"></div>\n" +
    "          <div class=\"popover-content\">\n" +
    "            <h4 class=\"vc-title\">Voice command activated <br>\n" +
    "              <small>Please speak clearly into the mic</small>\n" +
    "            </h4>\n" +
    "            <h4 class=\"vc-title-error text-center\">\n" +
    "              <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n" +
    "              <br>\n" +
    "              <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n" +
    "              <br>\n" +
    "              <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong></small>\n" +
    "            </h4>\n" +
    "            <a href=\"javascript:void(0);\" class=\"btn btn-success\" onclick=\"commands.help()\">See Commands</a>\n" +
    "            <a href=\"javascript:void(0);\" class=\"btn bg-color-purple txt-color-white\"\n" +
    "               onclick=\"$('#speech-btn .popover').fadeOut(50);\">Close Popup</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- end voice command -->\n" +
    "\n" +
    "    <!-- multiple lang dropdown : find all flags in the flags page -->\n" +
    "    <ul class=\"header-dropdown-list hidden-xs\">\n" +
    "      <li>\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <img src=\"images/blank.gif\" class=\"flag flag-us\"\n" +
    "                                                                         alt=\"United States\"> <span> US</span> <i\n" +
    "          class=\"fa fa-angle-down\"></i> </a>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "          <li class=\"active\">\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"images/blank.gif\" class=\"flag flag-us\" alt=\"United States\"> English\n" +
    "              (US)</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"images/blank.gif\" class=\"flag flag-cn\" alt=\"China\"> 中文</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <!-- end multiple lang -->\n" +
    "  </div>\n" +
    "  <!-- end pulled right: nav area -->\n" +
    "</header>\n" +
    "<aside id=\"left-panel\">\n" +
    "  <!-- User info -->\n" +
    "  <div class=\"login-info\">\n" +
    "				<span> <!-- User image size is adjusted inside CSS, it should stay as is -->\n" +
    "					<a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" toggle-shortcut>\n" +
    "            <img src=\"images/avatars/sunny.png\" alt=\"me\" class=\"online\"/>\n" +
    "						<span>\n" +
    "							john.doe\n" +
    "						</span>\n" +
    "            <i class=\"fa fa-angle-down\"></i>\n" +
    "          </a>\n" +
    "				</span>\n" +
    "  </div>\n" +
    "  <!-- end user info -->\n" +
    "  <nav>\n" +
    "    <!-- 一级-->\n" +
    "    <ul>\n" +
    "      <li class=\"\" ng-if=\"main.menu\" ng-repeat=\"nav in main.menu\" render-finish>\n" +
    "        <a ui-sref=\"{{nav.url?nav.url:'app.main'}}\" title=\"{{nav.title}}\">\n" +
    "          <i ng-class=\"nav.titleClass\"></i>\n" +
    "          <span class=\"menu-item-parent\">{{nav.titleText}}</span>\n" +
    "        </a>\n" +
    "        <!-- 二级-->\n" +
    "        <ul ng-if=\"nav.sub\">\n" +
    "          <li class=\"\" ng-repeat=\"subNav in nav.sub\">\n" +
    "            <a ui-sref=\"{{subNav.url?subNav.url:'app.main'}}\" title=\"{{subNav.title}}\">\n" +
    "              <i ng-if=\"subNav.titleClass\" ng-class=\"subNav.titleClass\"></i>\n" +
    "              <span class=\"menu-item-parent\">{{subNav.titleText}}</span>\n" +
    "            </a>\n" +
    "            <!-- 三级-->\n" +
    "            <ul ng-if=\"subNav.sub\">\n" +
    "              <li class=\"\" ng-repeat=\"thrNav in subNav.sub\">\n" +
    "                <a ui-sref=\"{{thrNav.url?thrNav.url:'app.main'}}\" title=\"{{thrNav.title}}\">\n" +
    "                  <i ng-if=\"thrNav.titleClass\" ng-class=\"thrNav.titleClass\"></i>\n" +
    "                  <span class=\"menu-item-parent\">{{thrNav.titleText}}</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "  <a href=\"#ajax/difver.html\" class=\"btn btn-primary nav-demo-btn\"><i class=\"fa fa-info-circle\"></i> 贷后邦后台管理系统\n" +
    "    v0.0.1</a>\n" +
    "  <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu>\n" +
    "    <i class=\"fa fa-arrow-circle-left hit\"></i>\n" +
    "  </span>\n" +
    "</aside>\n" +
    "\n" +
    "<div ui-view=\"content\" style=\"opacity: 1;\"></div>\n" +
    "\n" +
    "<div class=\"page-footer\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6\">\n" +
    "      <span class=\"txt-color-white\">SmartAdmin 1.8.0 <span class=\"hidden-xs\"> - Web Application Framework</span> © 2014-2016</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n" +
    "      <div class=\"txt-color-white inline-block\">\n" +
    "        <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i> <strong>52 mins\n" +
    "          ago &nbsp;</strong> </i>\n" +
    "\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu pull-right text-left\">\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n" +
    "\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n" +
    "\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n" +
    "                </p>\n" +
    "\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <button class=\"btn btn-block btn-default\">refresh</button>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!-- end btn-group-->\n" +
    "      </div>\n" +
    "      <!-- end div-->\n" +
    "    </div>\n" +
    "    <!-- end col -->\n" +
    "  </div>\n" +
    "  <!-- end row -->\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"shortcut\" data-smart-include=\"app/layout/shortcut/shortcut.tpl.html\" class=\"\" style=\"display: none;\">\n" +
    "  <ul>\n" +
    "    <li>\n" +
    "      <a href=\"#/inbox/\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span\n" +
    "        class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#/calendar\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#/maps\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#/invoice\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-book fa-4x\"></i> <span>Invoice <span\n" +
    "        class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#/gallery\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#/profile\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i\n" +
    "        class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/main/main.html",
    "<system-layout-states></system-layout-states>\n" +
    "<div id=\"main\" role=\"main\" class=\"ng-scope\">\n" +
    "  <div id=\"ribbon\">\n" +
    "				<span class=\"ribbon-button-alignment\">\n" +
    "					<span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\"\n" +
    "                data-placement=\"bottom\"\n" +
    "                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n" +
    "                data-html=\"true\"\n" +
    "                data-reset-msg=\"Would you like to RESET all your saved widgets and clear LocalStorage?\"><i\n" +
    "            class=\"fa fa-refresh\"></i></span>\n" +
    "				</span>\n" +
    "    <ol class=\"breadcrumb\">\n" +
    "      <li>Home</li>\n" +
    "      <li>Dashboard</li>\n" +
    "      <li>Social Wall</li>\n" +
    "    </ol>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("templates/smartAdmin/index.html",
    "\n" +
    "<!DOCTYPE html>\n" +
    "<html lang=\"en-us\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <title> SmartAdmin (AJAX)</title>\n" +
    "  <meta name=\"description\" content=\"\">\n" +
    "  <meta name=\"author\" content=\"\">\n" +
    "\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n" +
    "\n" +
    "  <!-- #CSS Links -->\n" +
    "  <!-- Basic Styles -->\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/bootstrap.min.css\">\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/font-awesome.min.css\">\n" +
    "\n" +
    "  <!-- SmartAdmin Styles : Caution! DO NOT change the order -->\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/smartadmin-production-plugins.min.css\">\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/smartadmin-production.min.css\">\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/smartadmin-skins.min.css\">\n" +
    "\n" +
    "  <!-- DEV links : turn this on when you like to develop directly -->\n" +
    "  <!--<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"../Source_UNMINIFIED_CSS/smartadmin-production.css\">-->\n" +
    "  <!--<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"../Source_UNMINIFIED_CSS/smartadmin-skins.css\">-->\n" +
    "\n" +
    "  <!-- SmartAdmin RTL Support -->\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/smartadmin-rtl.min.css\">\n" +
    "\n" +
    "  <!-- We recommend you use \"your_style.css\" to override SmartAdmin\n" +
    "           specific styles this will also ensure you retrain your customization with each SmartAdmin update.\n" +
    "      <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/your_style.css\"> -->\n" +
    "\n" +
    "  <!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/demo.min.css\">\n" +
    "\n" +
    "  <!-- #FAVICONS -->\n" +
    "  <link rel=\"shortcut icon\" href=\"img/favicon/favicon.ico\" type=\"image/x-icon\">\n" +
    "  <link rel=\"icon\" href=\"img/favicon/favicon.ico\" type=\"image/x-icon\">\n" +
    "\n" +
    "  <!-- #GOOGLE FONT -->\n" +
    "  <link rel=\"stylesheet\" href=\"http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700\">\n" +
    "\n" +
    "  <!-- #APP SCREEN / ICONS -->\n" +
    "  <!-- Specifying a Webpage Icon for Web Clip\n" +
    "           Ref: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html -->\n" +
    "  <link rel=\"apple-touch-icon\" href=\"img/splash/sptouch-icon-iphone.png\">\n" +
    "  <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"img/splash/touch-icon-ipad.png\">\n" +
    "  <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"img/splash/touch-icon-iphone-retina.png\">\n" +
    "  <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"img/splash/touch-icon-ipad-retina.png\">\n" +
    "\n" +
    "  <!-- iOS web-app metas : hides Safari UI Components and Changes Status Bar Appearance -->\n" +
    "  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n" +
    "  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n" +
    "\n" +
    "  <!-- Startup image for web apps -->\n" +
    "  <link rel=\"apple-touch-startup-image\" href=\"img/splash/ipad-landscape.png\" media=\"screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)\">\n" +
    "  <link rel=\"apple-touch-startup-image\" href=\"img/splash/ipad-portrait.png\" media=\"screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)\">\n" +
    "  <link rel=\"apple-touch-startup-image\" href=\"img/splash/iphone.png\" media=\"screen and (max-device-width: 320px)\">\n" +
    "\n" +
    "</head>\n" +
    "\n" +
    "<!--\n" +
    "\n" +
    "  TABLE OF CONTENTS.\n" +
    "\n" +
    "  Use search to find needed section.\n" +
    "\n" +
    "  ===================================================================\n" +
    "\n" +
    "  |  01. #CSS Links                |  all CSS links and file paths  |\n" +
    "  |  02. #FAVICONS                 |  Favicon links and file paths  |\n" +
    "  |  03. #GOOGLE FONT              |  Google font link              |\n" +
    "  |  04. #APP SCREEN / ICONS       |  app icons, screen backdrops   |\n" +
    "  |  05. #BODY                     |  body tag                      |\n" +
    "  |  06. #HEADER                   |  header tag                    |\n" +
    "  |  07. #PROJECTS                 |  project lists                 |\n" +
    "  |  08. #TOGGLE LAYOUT BUTTONS    |  layout buttons and actions    |\n" +
    "  |  09. #MOBILE                   |  mobile view dropdown          |\n" +
    "  |  10. #SEARCH                   |  search field                  |\n" +
    "  |  11. #NAVIGATION               |  left panel & navigation       |\n" +
    "  |  12. #MAIN PANEL               |  main panel                    |\n" +
    "  |  13. #MAIN CONTENT             |  content holder                |\n" +
    "  |  14. #PAGE FOOTER              |  page footer                   |\n" +
    "  |  15. #SHORTCUT AREA            |  dropdown shortcuts area       |\n" +
    "  |  16. #PLUGINS                  |  all scripts and plugins       |\n" +
    "\n" +
    "  ===================================================================\n" +
    "\n" +
    "  -->\n" +
    "\n" +
    "<!-- #BODY -->\n" +
    "<!-- Possible Classes\n" +
    "\n" +
    "      * 'smart-style-{SKIN#}'\n" +
    "      * 'smart-rtl'         - Switch theme mode to RTL\n" +
    "      * 'menu-on-top'       - Switch to top navigation (no DOM change required)\n" +
    "      * 'no-menu'			  - Hides the menu completely\n" +
    "      * 'hidden-menu'       - Hides the main menu but still accessable by hovering over left edge\n" +
    "      * 'fixed-header'      - Fixes the header\n" +
    "      * 'fixed-navigation'  - Fixes the main menu\n" +
    "      * 'fixed-ribbon'      - Fixes breadcrumb\n" +
    "      * 'fixed-page-footer' - Fixes footer\n" +
    "      * 'container'         - boxed layout mode (non-responsive: will not work with fixed-navigation & fixed-ribbon)\n" +
    "  -->\n" +
    "<body class=\"smart-style-0\">\n" +
    "\n" +
    "<!-- #HEADER -->\n" +
    "<header id=\"header\">\n" +
    "  <div id=\"logo-group\">\n" +
    "\n" +
    "    <!-- PLACE YOUR LOGO HERE -->\n" +
    "    <span id=\"logo\"> <img src=\"img/logo.png\" alt=\"SmartAdmin\"> </span>\n" +
    "    <!-- END LOGO PLACEHOLDER -->\n" +
    "\n" +
    "    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n" +
    "                 Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n" +
    "    <span id=\"activity\" class=\"activity-dropdown\"> <i class=\"fa fa-user\"></i> <b class=\"badge\"> 21 </b> </span>\n" +
    "\n" +
    "    <!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->\n" +
    "    <div class=\"ajax-dropdown\">\n" +
    "\n" +
    "      <!-- the ID links are fetched via AJAX to the ajax container \"ajax-notifications\" -->\n" +
    "      <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/mail.html\">\n" +
    "          Msgs (14) </label>\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/notifications.html\">\n" +
    "          notify (3) </label>\n" +
    "        <label class=\"btn btn-default\">\n" +
    "          <input type=\"radio\" name=\"activity\" id=\"ajax/notify/tasks.html\">\n" +
    "          Tasks (4) </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- notification content -->\n" +
    "      <div class=\"ajax-notifications custom-scroll\">\n" +
    "\n" +
    "        <div class=\"alert alert-transparent\">\n" +
    "          <h4>Click a button to show messages here</h4>\n" +
    "          This blank page message helps protect your privacy, or you can show the first message here automatically.\n" +
    "        </div>\n" +
    "\n" +
    "        <i class=\"fa fa-lock fa-4x fa-border\"></i>\n" +
    "\n" +
    "      </div>\n" +
    "      <!-- end notification content -->\n" +
    "\n" +
    "      <!-- footer: refresh area -->\n" +
    "					<span> Last updated on: 12/12/2013 9:43AM\n" +
    "						<button type=\"button\" data-loading-text=\"<i class='fa fa-refresh fa-spin'></i> Loading...\" class=\"btn btn-xs btn-default pull-right\">\n" +
    "              <i class=\"fa fa-refresh\"></i>\n" +
    "            </button> </span>\n" +
    "      <!-- end footer -->\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- END AJAX-DROPDOWN -->\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- #PROJECTS: projects dropdown -->\n" +
    "  <div class=\"project-context hidden-xs\">\n" +
    "\n" +
    "    <span class=\"label\">Projects:</span>\n" +
    "    <span class=\"project-selector dropdown-toggle\" data-toggle=\"dropdown\">Recent projects <i class=\"fa fa-angle-down\"></i></span>\n" +
    "\n" +
    "    <!-- Suggestion: populate this list with fetch and push technique -->\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Online e-merchant management system - attaching integration with the iOS</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Notes on pipeline upgradee</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\">Assesment Report for merchant account</a>\n" +
    "      </li>\n" +
    "      <li class=\"divider\"></li>\n" +
    "      <li>\n" +
    "        <a href=\"javascript:void(0);\"><i class=\"fa fa-power-off\"></i> Clear</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <!-- end dropdown-menu-->\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- end projects dropdown -->\n" +
    "\n" +
    "  <!-- #TOGGLE LAYOUT BUTTONS -->\n" +
    "  <!-- pulled right: nav area -->\n" +
    "  <div class=\"pull-right\">\n" +
    "\n" +
    "    <!-- collapse menu button -->\n" +
    "    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n" +
    "      <span> <a href=\"javascript:void(0);\" data-action=\"toggleMenu\" title=\"Collapse Menu\"><i class=\"fa fa-reorder\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end collapse menu -->\n" +
    "\n" +
    "    <!-- #MOBILE -->\n" +
    "    <!-- Top menu profile link : this shows only when top menu is active -->\n" +
    "    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n" +
    "      <li class=\"\">\n" +
    "        <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n" +
    "          <img src=\"img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\" />\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i class=\"fa fa-cog\"></i> Setting</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"#ajax/profile.html\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i class=\"fa fa-user\"></i> <u>P</u>rofile</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\" data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\" class=\"padding-10 padding-top-0 padding-bottom-0\" data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li>\n" +
    "            <a href=\"login.html\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <!-- logout button -->\n" +
    "    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"login.html\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i class=\"fa fa-sign-out\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end logout button -->\n" +
    "\n" +
    "    <!-- search mobile button (this is hidden till mobile view port) -->\n" +
    "    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"javascript:void(0)\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end search mobile button -->\n" +
    "\n" +
    "    <!-- #SEARCH -->\n" +
    "    <!-- input: search field -->\n" +
    "    <form action=\"#ajax/search.html\" class=\"header-search pull-right\">\n" +
    "      <input id=\"search-fld\" type=\"text\" name=\"param\" placeholder=\"Find reports and more\">\n" +
    "      <button type=\"submit\">\n" +
    "        <i class=\"fa fa-search\"></i>\n" +
    "      </button>\n" +
    "      <a href=\"javascript:void(0);\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n" +
    "    </form>\n" +
    "    <!-- end input: search field -->\n" +
    "\n" +
    "    <!-- fullscreen button -->\n" +
    "    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n" +
    "      <span> <a href=\"javascript:void(0);\" data-action=\"launchFullscreen\" title=\"Full Screen\"><i class=\"fa fa-arrows-alt\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end fullscreen button -->\n" +
    "\n" +
    "    <!-- #Voice Command: Start Speech -->\n" +
    "    <!-- NOTE: Voice command button will only show in browsers that support it. Currently it is hidden under mobile browsers.\n" +
    "                       You can take off the \"hidden-sm\" and \"hidden-xs\" class to display inside mobile browser-->\n" +
    "    <div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\">\n" +
    "      <div>\n" +
    "        <a href=\"javascript:void(0)\" title=\"Voice Command\" data-action=\"voiceCommand\"><i class=\"fa fa-microphone\"></i></a>\n" +
    "        <div class=\"popover bottom\"><div class=\"arrow\"></div>\n" +
    "          <div class=\"popover-content\">\n" +
    "            <h4 class=\"vc-title\">Voice command activated <br><small>Please speak clearly into the mic</small></h4>\n" +
    "            <h4 class=\"vc-title-error text-center\">\n" +
    "              <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n" +
    "              <br><small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n" +
    "              <br><small class=\"txt-color-red\">Must have <strong>Internet Connection</strong></small>\n" +
    "            </h4>\n" +
    "            <a href=\"javascript:void(0);\" class=\"btn btn-success\" onclick=\"commands.help()\">See Commands</a>\n" +
    "            <a href=\"javascript:void(0);\" class=\"btn bg-color-purple txt-color-white\" onclick=\"$('#speech-btn .popover').fadeOut(50);\">Close Popup</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- end voice command -->\n" +
    "\n" +
    "    <!-- multiple lang dropdown : find all flags in the flags page -->\n" +
    "    <ul class=\"header-dropdown-list hidden-xs\">\n" +
    "      <li>\n" +
    "        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> <img src=\"img/blank.gif\" class=\"flag flag-us\" alt=\"United States\"> <span> US</span> <i class=\"fa fa-angle-down\"></i> </a>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "          <li class=\"active\">\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-us\" alt=\"United States\"> English (US)</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-fr\" alt=\"France\"> Français</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-es\" alt=\"Spanish\"> Español</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-de\" alt=\"German\"> Deutsch</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-jp\" alt=\"Japan\"> 日本語</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-cn\" alt=\"China\"> 中文</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-it\" alt=\"Italy\"> Italiano</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-pt\" alt=\"Portugal\"> Portugal</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-ru\" alt=\"Russia\"> Русский язык</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"javascript:void(0);\"><img src=\"img/blank.gif\" class=\"flag flag-kr\" alt=\"Korea\"> 한국어</a>\n" +
    "          </li>\n" +
    "\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <!-- end multiple lang -->\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- end pulled right: nav area -->\n" +
    "\n" +
    "</header>\n" +
    "<!-- END HEADER -->\n" +
    "\n" +
    "<!-- #NAVIGATION -->\n" +
    "<!-- Left panel : Navigation area -->\n" +
    "<!-- Note: This width of the aside area can be adjusted through LESS/SASS variables -->\n" +
    "<aside id=\"left-panel\">\n" +
    "\n" +
    "  <!-- User info -->\n" +
    "  <div class=\"login-info\">\n" +
    "				<span> <!-- User image size is adjusted inside CSS, it should stay as is -->\n" +
    "\n" +
    "					<a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\">\n" +
    "            <img src=\"img/avatars/sunny.png\" alt=\"me\" class=\"online\" />\n" +
    "						<span>\n" +
    "							john.doe\n" +
    "						</span>\n" +
    "            <i class=\"fa fa-angle-down\"></i>\n" +
    "          </a>\n" +
    "\n" +
    "				</span>\n" +
    "  </div>\n" +
    "  <!-- end user info -->\n" +
    "\n" +
    "  <!-- NAVIGATION : This navigation is also responsive\n" +
    "\n" +
    "        To make this navigation dynamic please make sure to link the node\n" +
    "        (the reference to the nav > ul) after page load. Or the navigation\n" +
    "        will not initialize.\n" +
    "        -->\n" +
    "  <nav>\n" +
    "    <!--\n" +
    "            NOTE: Notice the gaps after each icon usage <i></i>..\n" +
    "            Please note that these links work a bit different than\n" +
    "            traditional href=\"\" links. See documentation for details.\n" +
    "            -->\n" +
    "\n" +
    "    <ul>\n" +
    "      <li class=\"\">\n" +
    "        <a href=\"#\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">Dashboard</span></a>\n" +
    "        <ul>\n" +
    "          <li class=\"\">\n" +
    "            <a href=\"ajax/dashboard.html\" title=\"Dashboard\"><span class=\"menu-item-parent\">Analytics Dashboard</span></a>\n" +
    "          </li>\n" +
    "          <li class=\"\">\n" +
    "            <a href=\"ajax/dashboard-social.html\" title=\"Dashboard\"><span class=\"menu-item-parent\">Social Wall</span></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li class=\"top-menu-invisible\">\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-cube txt-color-blue\"></i> <span class=\"menu-item-parent\">SmartAdmin Intel</span></a>\n" +
    "        <ul>\n" +
    "          <li class=\"\">\n" +
    "            <a href=\"ajax/layouts.html\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-gear\"></i> <span class=\"menu-item-parent\">App Layouts</span></a>\n" +
    "          </li>\n" +
    "          <li class=\"\">\n" +
    "            <a href=\"ajax/skins.html\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-picture-o\"></i> <span class=\"menu-item-parent\">Prebuilt Skins</span></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/difver.html\"><i class=\"fa fa-stack-overflow\"></i> App Variations</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/applayout.html\"><i class=\"fa fa-cube\"></i> App Settings</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"ajax/inbox.html\"><i class=\"fa fa-lg fa-fw fa-inbox\"></i> <span class=\"menu-item-parent\">Outlook</span> <span class=\"badge pull-right inbox-badge margin-right-13\">14</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/inbox.html\">Inbox </a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/inbox-email-view.html\">Email view </a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/inbox-email-compose.html\">Compose </a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/inbox-email-reply.html\">Reply </a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/email-template.html\">Email Templates </a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-bar-chart-o\"></i> <span class=\"menu-item-parent\">Graphs</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/flot.html\">Flot Chart</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/morris.html\">Morris Charts</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/sparkline-charts.html\">Sparklines</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/easypie-charts.html\">EasyPieCharts</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/dygraphs.html\">Dygraphs</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/chartjs.html\">Chart.js</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/hchartable.html\">HighchartTable <span class=\"badge pull-right inbox-badge bg-color-yellow\">new</span></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-table\"></i> <span class=\"menu-item-parent\">Tables</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/table.html\">Normal Tables</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/datatables.html\">Data Tables <span class=\"badge inbox-badge bg-color-greenLight hidden-mobile\">responsive</span></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/jqgrid.html\">Jquery Grid</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span class=\"menu-item-parent\">Forms</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/form-elements.html\">Smart Form Elements</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/form-templates.html\">Smart Form Layouts</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/validation.html\">Smart Form Validation</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/bootstrap-forms.html\">Bootstrap Form Elements</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/bootstrap-validator.html\">Bootstrap Form Validation</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/plugins.html\">Form Plugins</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/wizard.html\">Wizards</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/other-editors.html\">Bootstrap Editors</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/dropzone.html\">Dropzone</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/image-editor.html\">Image Cropping</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/ckeditor.html\">CK Editor</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-desktop\"></i> <span class=\"menu-item-parent\">UI Elements</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/general-elements.html\">General Elements</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/buttons.html\">Buttons</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"#\">Icons</a>\n" +
    "            <ul>\n" +
    "              <li>\n" +
    "                <a href=\"ajax/fa.html\"><i class=\"fa fa-plane\"></i> Font Awesome</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"ajax/glyph.html\"><i class=\"glyphicon glyphicon-plane\"></i> Glyph Icons</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"ajax/flags.html\"><i class=\"fa fa-flag\"></i> Flags</a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/grid.html\">Grid</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/treeview.html\">Tree View</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/nestable-list.html\">Nestable Lists</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/jqui.html\">JQuery UI</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/typography.html\">Typography</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"#\">Six Level Menu</a>\n" +
    "            <ul>\n" +
    "              <li>\n" +
    "                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> Item #2</a>\n" +
    "                <ul>\n" +
    "                  <li>\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> Sub #2.1 </a>\n" +
    "                    <ul>\n" +
    "                      <li>\n" +
    "                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> Item #2.1.1</a>\n" +
    "                      </li>\n" +
    "                      <li>\n" +
    "                        <a href=\"#\"><i class=\"fa fa-fw fa-plus\"></i> Expand</a>\n" +
    "                        <ul>\n" +
    "                          <li>\n" +
    "                            <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> File</a>\n" +
    "                          </li>\n" +
    "                        </ul>\n" +
    "                      </li>\n" +
    "                    </ul>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> Item #3</a>\n" +
    "\n" +
    "                <ul>\n" +
    "                  <li>\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-folder-open\"></i> 3ed Level </a>\n" +
    "                    <ul>\n" +
    "                      <li>\n" +
    "                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> File</a>\n" +
    "                      </li>\n" +
    "                      <li>\n" +
    "                        <a href=\"#\"><i class=\"fa fa-fw fa-file-text\"></i> File</a>\n" +
    "                      </li>\n" +
    "                    </ul>\n" +
    "                  </li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a href=\"#\" class=\"inactive\"><i class=\"fa fa-fw fa-folder-open\"></i> Item #4 (disabled)</a>\n" +
    "              </li>\n" +
    "\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"ajax/widgets.html\"><i class=\"fa fa-lg fa-fw fa-list-alt\"></i> <span class=\"menu-item-parent\">Widgets</span></a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-cloud\"><em>3</em></i> <span class=\"menu-item-parent\">Cool Features!</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/calendar.html\"><i class=\"fa fa-lg fa-fw fa-calendar\"></i> <span class=\"menu-item-parent\">Calendar</span></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/gmap-xml.html\"><i class=\"fa fa-lg fa-fw fa-map-marker\"></i> <span class=\"menu-item-parent\">GMap Skins</span><span class=\"badge bg-color-greenLight pull-right inbox-badge\">9</span></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-puzzle-piece\"></i> <span class=\"menu-item-parent\">App Views</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/projects.html\"><i class=\"fa fa-file-text-o\"></i> Projects</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/blog.html\"><i class=\"fa fa-paragraph\"></i> Blog</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/gallery.html\"><i class=\"fa fa-picture-o\"></i> Gallery</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"#\"><i class=\"fa fa-comments\"></i> Forum Layout</a>\n" +
    "            <ul>\n" +
    "              <li><a href=\"ajax/forum.html\">General View</a></li>\n" +
    "              <li><a href=\"ajax/forum-topic.html\">Topic View</a></li>\n" +
    "              <li><a href=\"ajax/forum-post.html\">Post View</a></li>\n" +
    "            </ul>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/profile.html\"><i class=\"fa fa-group\"></i> Profile</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/timeline.html\"><i class=\"fa fa-clock-o\"></i> Timeline</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/search.html\"><i class=\"fa fa-search\"></i>  Search Page</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-shopping-cart\"></i> <span class=\"menu-item-parent\">E-Commerce</span></a>\n" +
    "        <ul>\n" +
    "          <li><a href=\"ajax/orders.html\">Orders</a></li>\n" +
    "          <li><a href=\"ajax/products-view.html\">Products View</a></li>\n" +
    "          <li><a href=\"ajax/products-detail.html\">Products Detail</a></li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-windows\"></i> <span class=\"menu-item-parent\">Miscellaneous</span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <a href=\"../Landing_Page/\" target=\"_blank\">Landing Page <i class=\"fa fa-external-link\"></i></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/pricing-table.html\">Pricing Tables</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/invoice.html\">Invoice</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"login.html\" target=\"_top\">Login</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"register.html\" target=\"_top\">Register</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"forgotpassword.html\" target=\"_top\">Forgot Password</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"lock.html\" target=\"_top\">Locked Screen</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/error404.html\">Error 404</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/error500.html\">Error 500</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"ajax/blank_.html\">Blank Page</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li class=\"chat-users top-menu-invisible\">\n" +
    "        <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-comment-o\"><em class=\"bg-color-pink flash animated\">!</em></i> <span class=\"menu-item-parent\">Smart Chat API <sup>beta</sup></span></a>\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            <!-- DISPLAY USERS -->\n" +
    "            <div class=\"display-users\">\n" +
    "\n" +
    "              <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\">\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr\"\n" +
    "                 data-chat-id=\"cha1\"\n" +
    "                 data-chat-fname=\"Sadi\"\n" +
    "                 data-chat-lname=\"Orlaf\"\n" +
    "                 data-chat-status=\"busy\"\n" +
    "                 data-chat-alertmsg=\"Sadi Orlaf is in a meeting. Please do not disturb!\"\n" +
    "                 data-chat-alertshow=\"true\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/5.png' alt='Sadi Orlaf'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Sadi Orlaf</h3>\n" +
    "													<p>Marketing Executive</p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Sadi Orlaf\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr\"\n" +
    "                 data-chat-id=\"cha2\"\n" +
    "                 data-chat-fname=\"Jessica\"\n" +
    "                 data-chat-lname=\"Dolof\"\n" +
    "                 data-chat-status=\"online\"\n" +
    "                 data-chat-alertmsg=\"\"\n" +
    "                 data-chat-alertshow=\"false\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/1.png' alt='Jessica Dolof'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Jessica Dolof</h3>\n" +
    "													<p>Sales Administrator</p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Jessica Dolof\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr\"\n" +
    "                 data-chat-id=\"cha3\"\n" +
    "                 data-chat-fname=\"Zekarburg\"\n" +
    "                 data-chat-lname=\"Almandalie\"\n" +
    "                 data-chat-status=\"online\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/3.png' alt='Zekarburg Almandalie'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Zekarburg Almandalie</h3>\n" +
    "													<p>Sales Admin</p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Zekarburg Almandalie\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr\"\n" +
    "                 data-chat-id=\"cha4\"\n" +
    "                 data-chat-fname=\"Barley\"\n" +
    "                 data-chat-lname=\"Krazurkth\"\n" +
    "                 data-chat-status=\"away\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/4.png' alt='Barley Krazurkth'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Barley Krazurkth</h3>\n" +
    "													<p>Sales Director</p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Barley Krazurkth\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr offline\"\n" +
    "                 data-chat-id=\"cha5\"\n" +
    "                 data-chat-fname=\"Farhana\"\n" +
    "                 data-chat-lname=\"Amrin\"\n" +
    "                 data-chat-status=\"incognito\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/female.png' alt='Farhana Amrin'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Farhana Amrin</h3>\n" +
    "													<p>Support Admin <small><i class='fa fa-music'></i> Playing Beethoven Classics</small></p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Farhana Amrin (offline)\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"#\" class=\"usr offline\"\n" +
    "                 data-chat-id=\"cha6\"\n" +
    "                 data-chat-fname=\"Lezley\"\n" +
    "                 data-chat-lname=\"Jacob\"\n" +
    "                 data-chat-status=\"incognito\"\n" +
    "                 data-rel=\"popover-hover\"\n" +
    "                 data-placement=\"right\"\n" +
    "                 data-html=\"true\"\n" +
    "                 data-content=\"\n" +
    "											<div class='usr-card'>\n" +
    "												<img src='img/avatars/male.png' alt='Lezley Jacob'>\n" +
    "												<div class='usr-card-content'>\n" +
    "													<h3>Lezley Jacob</h3>\n" +
    "													<p>Sales Director</p>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										\">\n" +
    "                <i></i>Lezley Jacob (offline)\n" +
    "              </a>\n" +
    "\n" +
    "              <a href=\"ajax/chat.html\" class=\"btn btn-xs btn-default btn-block sa-chat-learnmore-btn\">About the API</a>\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- END DISPLAY USERS -->\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "  <a href=\"#ajax/difver.html\" class=\"btn btn-primary nav-demo-btn\"><i class=\"fa fa-info-circle\"></i> SmartAdmin Package (187 MB)</a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <span class=\"minifyme\" data-action=\"minifyMenu\"> <i class=\"fa fa-arrow-circle-left hit\"></i> </span>\n" +
    "\n" +
    "</aside>\n" +
    "<!-- END NAVIGATION -->\n" +
    "\n" +
    "<!-- #MAIN PANEL -->\n" +
    "<div id=\"main\" role=\"main\">\n" +
    "\n" +
    "  <!-- RIBBON -->\n" +
    "  <div id=\"ribbon\">\n" +
    "\n" +
    "				<span class=\"ribbon-button-alignment\">\n" +
    "					<span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\" data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\" data-html=\"true\" data-reset-msg=\"Would you like to RESET all your saved widgets and clear LocalStorage?\"><i class=\"fa fa-refresh\"></i></span>\n" +
    "				</span>\n" +
    "\n" +
    "    <!-- breadcrumb -->\n" +
    "    <ol class=\"breadcrumb\">\n" +
    "      <!-- This is auto generated -->\n" +
    "    </ol>\n" +
    "    <!-- end breadcrumb -->\n" +
    "\n" +
    "    <!-- You can also add more buttons to the\n" +
    "            ribbon for further usability\n" +
    "\n" +
    "            Example below:\n" +
    "\n" +
    "            <span class=\"ribbon-button-alignment pull-right\" style=\"margin-right:25px\">\n" +
    "                <a href=\"#\" id=\"search\" class=\"btn btn-ribbon hidden-xs\" data-title=\"search\"><i class=\"fa fa-grid\"></i> Change Grid</a>\n" +
    "                <span id=\"add\" class=\"btn btn-ribbon hidden-xs\" data-title=\"add\"><i class=\"fa fa-plus\"></i> Add</span>\n" +
    "                <button id=\"search\" class=\"btn btn-ribbon\" data-title=\"search\"><i class=\"fa fa-search\"></i> <span class=\"hidden-mobile\">Search</span></button>\n" +
    "            </span> -->\n" +
    "\n" +
    "  </div>\n" +
    "  <!-- END RIBBON -->\n" +
    "\n" +
    "  <!-- #MAIN CONTENT -->\n" +
    "  <div id=\"content\">\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- END #MAIN CONTENT -->\n" +
    "\n" +
    "</div>\n" +
    "<!-- END #MAIN PANEL -->\n" +
    "\n" +
    "<!-- #PAGE FOOTER -->\n" +
    "<div class=\"page-footer\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6\">\n" +
    "      <span class=\"txt-color-white\">SmartAdmin 1.8.0 <span class=\"hidden-xs\"> - Web Application Framework</span> © 2014-2016</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n" +
    "      <div class=\"txt-color-white inline-block\">\n" +
    "        <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i> <strong>52 mins ago &nbsp;</strong> </i>\n" +
    "        <div class=\"btn-group dropup\">\n" +
    "          <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n" +
    "            <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu pull-right text-left\">\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li >\n" +
    "              <div class=\"padding-5\">\n" +
    "                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span></p>\n" +
    "                <div class=\"progress progress-micro no-margin\">\n" +
    "                  <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li>\n" +
    "              <div class=\"padding-5\">\n" +
    "                <button class=\"btn btn-block btn-default\">refresh</button>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!-- end btn-group-->\n" +
    "      </div>\n" +
    "      <!-- end div-->\n" +
    "    </div>\n" +
    "    <!-- end col -->\n" +
    "  </div>\n" +
    "  <!-- end row -->\n" +
    "</div>\n" +
    "<!-- END FOOTER -->\n" +
    "\n" +
    "<!-- #SHORTCUT AREA : With large tiles (activated via clicking user name tag)\n" +
    "         Note: These tiles are completely responsive, you can add as many as you like -->\n" +
    "<div id=\"shortcut\">\n" +
    "  <ul>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/inbox.html\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/calendar.html\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/gmap-xml.html\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/invoice.html\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i class=\"fa fa-book fa-4x\"></i> <span>Invoice <span class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/gallery.html\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <a href=\"#ajax/profile.html\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<!-- END SHORTCUT AREA -->\n" +
    "\n" +
    "<!--================================================== -->\n" +
    "\n" +
    "<!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)\n" +
    "    <script data-pace-options='{ \"restartOnRequestAfter\": true }' src=\"js/plugin/pace/pace.min.js\"></script>-->\n" +
    "\n" +
    "\n" +
    "<!-- #PLUGINS -->\n" +
    "<!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->\n" +
    "<script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js\"></script>\n" +
    "<script>\n" +
    "  if (!window.jQuery) {\n" +
    "    document.write('<script src=\"js/libs/jquery-2.1.1.min.js\"><\\/script>');\n" +
    "  }\n" +
    "</script>\n" +
    "\n" +
    "<script src=\"//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js\"></script>\n" +
    "<script>\n" +
    "  if (!window.jQuery.ui) {\n" +
    "    document.write('<script src=\"js/libs/jquery-ui-1.10.3.min.js\"><\\/script>');\n" +
    "  }\n" +
    "</script>\n" +
    "\n" +
    "<!-- IMPORTANT: APP CONFIG -->\n" +
    "<script src=\"js/app.config.js\"></script>\n" +
    "\n" +
    "<!-- JS TOUCH : include this plugin for mobile drag / drop touch events-->\n" +
    "<script src=\"js/plugin/jquery-touch/jquery.ui.touch-punch.min.js\"></script>\n" +
    "\n" +
    "<!-- BOOTSTRAP JS -->\n" +
    "<script src=\"js/bootstrap/bootstrap.min.js\"></script>\n" +
    "\n" +
    "<!-- CUSTOM NOTIFICATION -->\n" +
    "<script src=\"js/notification/SmartNotification.min.js\"></script>\n" +
    "\n" +
    "<!-- JARVIS WIDGETS -->\n" +
    "<script src=\"js/smartwidgets/jarvis.widget.min.js\"></script>\n" +
    "\n" +
    "<!-- EASY PIE CHARTS -->\n" +
    "<script src=\"js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js\"></script>\n" +
    "\n" +
    "<!-- SPARKLINES -->\n" +
    "<script src=\"js/plugin/sparkline/jquery.sparkline.min.js\"></script>\n" +
    "\n" +
    "<!-- JQUERY VALIDATE -->\n" +
    "<script src=\"js/plugin/jquery-validate/jquery.validate.min.js\"></script>\n" +
    "\n" +
    "<!-- JQUERY MASKED INPUT -->\n" +
    "<script src=\"js/plugin/masked-input/jquery.maskedinput.min.js\"></script>\n" +
    "\n" +
    "<!-- JQUERY SELECT2 INPUT -->\n" +
    "<script src=\"js/plugin/select2/select2.min.js\"></script>\n" +
    "\n" +
    "<!-- JQUERY UI + Bootstrap Slider -->\n" +
    "<script src=\"js/plugin/bootstrap-slider/bootstrap-slider.min.js\"></script>\n" +
    "\n" +
    "<!-- browser msie issue fix -->\n" +
    "<script src=\"js/plugin/msie-fix/jquery.mb.browser.min.js\"></script>\n" +
    "\n" +
    "<!-- FastClick: For mobile devices: you can disable this in app.js.bak.bak.bak -->\n" +
    "<script src=\"js/plugin/fastclick/fastclick.min.js\"></script>\n" +
    "\n" +
    "<!--[if IE 8]>\n" +
    "<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>\n" +
    "<![endif]-->\n" +
    "\n" +
    "<!-- Demo purpose only -->\n" +
    "<script src=\"js/demo.min.js\"></script>\n" +
    "\n" +
    "<!-- MAIN APP JS FILE -->\n" +
    "<script src=\"js/app.min.js\"></script>\n" +
    "\n" +
    "<!-- ENHANCEMENT PLUGINS : NOT A REQUIREMENT -->\n" +
    "<!-- Voice command : plugin -->\n" +
    "<script src=\"js/speech/voicecommand.min.js\"></script>\n" +
    "\n" +
    "<!-- SmartChat UI : plugin -->\n" +
    "<script src=\"js/smart-chat-ui/smart.chat.ui.min.js\"></script>\n" +
    "<script src=\"js/smart-chat-ui/smart.chat.manager.min.js\"></script>\n" +
    "\n" +
    "<!-- Your GOOGLE ANALYTICS CODE Below -->\n" +
    "<script type=\"text/javascript\">\n" +
    "\n" +
    "  var _gaq = _gaq || [];\n" +
    "  _gaq.push(['_setAccount', 'UA-43548732-3']);\n" +
    "  _gaq.push(['_trackPageview']);\n" +
    "\n" +
    "  (function() {\n" +
    "    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n" +
    "    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n" +
    "    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n" +
    "  })();\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "</body>\n" +
    "\n" +
    "</html>\n" +
    "");
}]);
})();
