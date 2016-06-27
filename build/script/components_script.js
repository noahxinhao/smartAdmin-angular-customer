/*
 * Turn on JarvisWidget functionality
 * Global JarvisWidget Settings
 * For a greater control of the widgets, please check app.js file
 * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
 * dependency: js/jarviswidget/jarvis.widget.min.js
 */
enableJarvisWidgets = true,
  /*
   * Use localstorage to save widget settings
   * turn this off if you prefer to use the onSave hook to save
   * these settings to your datatabse instead
   */
  localStorageJarvisWidgets = true,
  /*
   * Turn off sortable feature for JarvisWidgets
   */
  sortableJarvisWidgets = true,
  /*
   * Warning: Enabling mobile widgets could potentially crash your webApp
   * if you have too many widgets running at once
   * (must have enableJarvisWidgets = true)
   */
  enableMobileWidgets = false,

$.fn.jarvisWidgets && enableJarvisWidgets && $("#widget-grid").jarvisWidgets({
  "grid": "article",
  "widgets": ".jarviswidget",
  "localStorage": localStorageJarvisWidgets,
  "deleteSettingsKey": "#deletesettingskey-options",
  "settingsKeyLabel": "Reset settings?",
  "deletePositionKey": "#deletepositionkey-options",
  "positionKeyLabel": "Reset position?",
  "sortable": sortableJarvisWidgets,
  "buttonsHidden": !1,//0:工具栏自动隐藏，鼠标经过显示;1:工具栏始终显示
  "toggleButton": !0,
  "toggleClass": "fa fa-minus | fa fa-plus",
  "toggleSpeed": 200,
  "onToggle": function() {},
  "deleteButton": !0,
  "deleteMsg": "Warning: This action cannot be undone!",
  "deleteClass": "fa fa-times",
  "deleteSpeed": 200,
  "onDelete": function() {},
  "editButton": !0,
  "editPlaceholder": ".jarviswidget-editbox",
  "editClass": "fa fa-cog | fa fa-save",
  "editSpeed": 200,
  "onEdit": function() {},
  "colorButton": !0,
  "fullscreenButton": !0,
  "fullscreenClass": "fa fa-expand | fa fa-compress",
  "fullscreenDiff": 3,
  "onFullscreen": function() {},
  "customButton": !0,//0:启用;1：禁用
  "customClass": "fa fa-plus",
  "customStart": function() {
    alert("Hello you, this is a custom button...")
  },
  "customEnd": function() {
    alert("Hello you, this is a custom button...")
  },
  "buttonOrder": "%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",//工具栏按钮顺序
  "opacity": 1,
  "dragHandle": "> header",
  "placeholderClass": "jarviswidget-placeholder",
  "indicator": !0,
  "indicatorTime": 600,
  "ajax": !0,
  "timestampPlaceholder": ".jarviswidget-timestamp",
  "timestampFormat": "Last update: %m%/%d%/%y% %h%:%i%:%s%",
  "refreshButton": !0,
  "refreshButtonClass": "fa fa-refresh",
  "labelError": "Sorry but there was a error:",
  "labelUpdated": "Last Update:",
  "labelRefresh": "Refresh",
  "labelDelete": "Delete widget:",
  "afterLoad": function() {},
  "rtl": !1,
  "onChange": function() {},
  "onSave": function() {},
  "ajaxnav": $.navAsAjax
});

/**
 * Created by noahli on 16/6/24.
 */
!function(a,b,c,d){function e(b,c){this.obj=a(b),this.o=a.extend({},a.fn[f].defaults,c),this.objId=this.obj.attr("id"),this.pwCtrls=".jarviswidget-ctrls",this.widget=this.obj.find(this.o.widgets),this.toggleClass=this.o.toggleClass.split("|"),this.editClass=this.o.editClass.split("|"),this.fullscreenClass=this.o.fullscreenClass.split("|"),this.customClass=this.o.customClass.split("|"),this.storage={"enabled":this.o.localStorage},this.initialized=!1,this.init()}var f="jarvisWidgets",g=("ontouchstart"in b||b.DocumentTouch&&c instanceof DocumentTouch?"touchstart":"click")+"."+f;e.prototype={"_runLoaderWidget":function(a){var b=this;b.o.indicator===!0&&a.parents(b.o.widgets).find(".jarviswidget-loader:first").stop(!0,!0).fadeIn(100).delay(b.o.indicatorTime).fadeOut(100)},"_getPastTimestamp":function(a){var b=this,c=new Date(a),d=c.getMonth()+1,e=c.getDate(),f=c.getFullYear(),g=c.getHours(),h=c.getMinutes(),i=c.getUTCSeconds();10>d&&(d="0"+d),10>e&&(e="0"+e),10>g&&(g="0"+g),10>h&&(h="0"+h),10>i&&(i="0"+i);var j=b.o.timestampFormat.replace(/%d%/g,e).replace(/%m%/g,d).replace(/%y%/g,f).replace(/%h%/g,g).replace(/%i%/g,h).replace(/%s%/g,i);return j},"_loadAjaxFile":function(b,c,d){var e=this;b.find(".widget-body").load(c,function(c,d,f){var g=a(this);if("error"==d&&g.html('<h4 class="alert alert-danger">'+e.o.labelError+"<b> "+f.status+" "+f.statusText+"</b></h4>"),"success"==d){var h=b.find(e.o.timestampPlaceholder);h.length&&h.html(e._getPastTimestamp(new Date)),"function"==typeof e.o.afterLoad&&e.o.afterLoad.call(this,b)}e=null}),this._runLoaderWidget(d)},"_loadKeys":function(){var a=this;if(a.o.ajaxnav===!0){var b=location.hash.replace(/^#/,"");a.storage.keySettings="Plugin_settings_"+b+"_"+a.objId,a.storage.keyPosition="Plugin_position_"+b+"_"+a.objId}else if(a.initialized===!1){var b=a.o.pageKey||location.pathname;a.storage.keySettings="jarvisWidgets_settings_"+b+"_"+a.objId,a.storage.keyPosition="jarvisWidgets_position_"+b+"_"+a.objId}},"_saveSettingsWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.widgets).map(function(){var b={};return b.id=a(this).attr("id"),b.style=a(this).attr("data-widget-attstyle"),b.title=a(this).children("header").children("h2").text(),b.hidden="none"==a(this).css("display")?1:0,b.collapsed=a(this).hasClass("jarviswidget-collapsed")?1:0,b}).get(),e=JSON.stringify({"widget":d});c.enabled&&c.getKeySettings!=e&&(localStorage.setItem(c.keySettings,e),c.getKeySettings=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,null,e,c.keySettings)},"_savePositionWidget":function(){var b=this,c=b.storage;b._loadKeys();var d=b.obj.find(b.o.grid+".sortable-grid").map(function(){var c=a(this).children(b.o.widgets).map(function(){return{"id":a(this).attr("id")}}).get();return{"section":c}}).get(),e=JSON.stringify({"grid":d});c.enabled&&c.getKeyPosition!=e&&(localStorage.setItem(c.keyPosition,e),c.getKeyPosition=e),"function"==typeof b.o.onSave&&b.o.onSave.call(this,e,c.keyPosition)},"init":function(){var b=this;if(!b.initialized){if(b._initStorage(b.storage),a("#"+b.objId).length||alert("It looks like your using a class instead of an ID, dont do that!"),b.o.rtl===!0&&a("body").addClass("rtl"),a(b.o.grid).each(function(){a(this).find(b.o.widgets).length&&a(this).addClass("sortable-grid")}),b.storage.enabled&&b.storage.getKeyPosition){var c=JSON.parse(b.storage.getKeyPosition);for(var e in c.grid){var h=b.obj.find(b.o.grid+".sortable-grid").eq(e);for(var i in c.grid[e].section)h.append(a("#"+c.grid[e].section[i].id))}}if(b.storage.enabled&&b.storage.getKeySettings){var j=JSON.parse(b.storage.getKeySettings);for(var e in j.widget){var k=a("#"+j.widget[e].id);j.widget[e].style&&k.removeClassPrefix("jarviswidget-color-").addClass(j.widget[e].style).attr("data-widget-attstyle",""+j.widget[e].style),1==j.widget[e].hidden?k.hide(1):k.show(1).removeAttr("data-widget-hidden"),1==j.widget[e].collapsed&&k.addClass("jarviswidget-collapsed").children("div").hide(1),k.children("header").children("h2").text()!=j.widget[e].title&&k.children("header").children("h2").text(j.widget[e].title)}}if(b.widget.each(function(){var c,e,f,g,h,i,j,k,l=a(this),m=a(this).children("header");if(!m.parent().attr("role")){l.data("widget-hidden")===!0&&l.hide(),l.data("widget-collapsed")===!0&&l.addClass("jarviswidget-collapsed").children("div").hide(),c=b.o.customButton===!0&&l.data("widget-custombutton")===d&&0!==b.customClass[0].length?'<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="'+b.customClass[0]+'"></i></a>':"",e=b.o.deleteButton===!0&&l.data("widget-deletebutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="'+b.o.deleteClass+'"></i></a>':"",f=b.o.editButton===!0&&l.data("widget-editbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="'+b.editClass[0]+'"></i></a>':"",g=b.o.fullscreenButton===!0&&l.data("widget-fullscreenbutton")===d?'<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="'+b.fullscreenClass[0]+'"></i></a>':"",b.o.colorButton===!0&&l.data("widget-colorbutton")===d?(h='<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>',m.prepend('<div class="widget-toolbar">'+h+"</div>")):h="",b.o.toggleButton===!0&&l.data("widget-togglebutton")===d?(j=l.data("widget-collapsed")===!0||l.hasClass("jarviswidget-collapsed")?b.toggleClass[1]:b.toggleClass[0],i='<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="'+j+'"></i></a>'):i="",k=b.o.refreshButton===!0&&l.data("widget-refreshbutton")!==!1&&l.data("widget-load")?'<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="'+b.o.refreshButtonClass+'"></i></a>':"";var n=b.o.buttonOrder.replace(/%refresh%/g,k).replace(/%delete%/g,e).replace(/%custom%/g,c).replace(/%fullscreen%/g,g).replace(/%edit%/g,f).replace(/%toggle%/g,i);(""!==k||""!==e||""!==c||""!==g||""!==f||""!==i)&&m.prepend('<div class="jarviswidget-ctrls">'+n+"</div>"),b.o.sortable===!0&&l.data("widget-sortable")===d&&l.addClass("jarviswidget-sortable"),l.find(b.o.editPlaceholder).length&&l.find(b.o.editPlaceholder).find("input").val(a.trim(m.children("h2").text())),m.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'),l.attr("role","widget").children("div").attr("role","content").prev("header").attr("role","heading").children("div").attr("role","menu")}}),b.o.buttonsHidden===!0&&a(b.o.pwCtrls).hide(),a(".jarviswidget header [rel=tooltip]").tooltip(),b.obj.find("[data-widget-load]").each(function(){var c=a(this),d=c.children(),e=c.data("widget-load"),f=1e3*c.data("widget-refresh");c.children();c.find(".jarviswidget-ajax-placeholder").length||(c.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">'+b.o.loadingLabel+"</div>"),c.data("widget-refresh")>0?(b._loadAjaxFile(c,e,d),a.intervalArr.push(setInterval(function(){b._loadAjaxFile(c,e,d)},f))):b._loadAjaxFile(c,e,d))}),b.o.sortable===!0&&jQuery.ui){var l=b.obj.find(b.o.grid+".sortable-grid").not("[data-widget-excludegrid]");l.sortable({"items":l.find(b.o.widgets+".jarviswidget-sortable"),"connectWith":l,"placeholder":b.o.placeholderClass,"cursor":"move","revert":!0,"opacity":b.o.opacity,"delay":200,"cancel":".button-icon, #jarviswidget-fullscreen-mode > div","zIndex":1e4,"handle":b.o.dragHandle,"forcePlaceholderSize":!0,"forceHelperSize":!0,"update":function(a,c){b._runLoaderWidget(c.item.children()),b._savePositionWidget(),"function"==typeof b.o.onChange&&b.o.onChange.call(this,c.item)}})}b.o.buttonsHidden===!0&&b.widget.children("header").on("mouseenter."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,1)}).on("mouseleave."+f,function(){a(this).children(b.o.pwCtrls).stop(!0,!0).fadeTo(100,0)}),b._clickEvents(),b.storage.enabled&&(a(b.o.deleteSettingsKey).on(g,this,function(a){var c=confirm(b.o.settingsKeyLabel);c&&localStorage.removeItem(keySettings),a.preventDefault()}),a(b.o.deletePositionKey).on(g,this,function(a){var c=confirm(b.o.positionKeyLabel);c&&localStorage.removeItem(keyPosition),a.preventDefault()})),initialized=!0}},"_initStorage":function(a){a.enabled=a.enabled&&!!function(){var a,b=+new Date;try{return localStorage.setItem(b,b),a=localStorage.getItem(b)==b,localStorage.removeItem(b),a}catch(c){}}(),this._loadKeys(),a.enabled&&(a.getKeySettings=localStorage.getItem(a.keySettings),a.getKeyPosition=localStorage.getItem(a.keyPosition))},"_clickEvents":function(){function c(){if(a("#jarviswidget-fullscreen-mode").length){var c=a(b).height(),e=a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("header").height();a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("div").height(c-e-15)}}var d=this,e=d.widget.children("header");e.on(g,".jarviswidget-toggle-btn",function(b){var c=a(this),e=c.parents(d.o.widgets);d._runLoaderWidget(c),e.hasClass("jarviswidget-collapsed")?c.children().removeClass(d.toggleClass[1]).addClass(d.toggleClass[0]).parents(d.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(d.o.toggleSpeed,function(){d._saveSettingsWidget()}):c.children().removeClass(d.toggleClass[0]).addClass(d.toggleClass[1]).parents(d.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(d.o.toggleSpeed,function(){d._saveSettingsWidget()}),"function"==typeof d.o.onToggle&&d.o.onToggle.call(this,e),b.preventDefault()}),e.on(g,".jarviswidget-fullscreen-btn",function(b){var e=a(this).parents(d.o.widgets),f=e.children("div");d._runLoaderWidget(a(this)),a("#jarviswidget-fullscreen-mode").length?(a(".nooverflow").removeClass("nooverflow"),e.unwrap("<div>").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[1]).addClass(d.fullscreenClass[0]).parents(d.pwCtrls).children("a").show(),f.hasClass("jarviswidget-visible")&&f.hide().removeClass("jarviswidget-visible")):(a("body").addClass("nooverflow"),e.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[0]).addClass(d.fullscreenClass[1]).parents(d.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(),f.is(":hidden")&&f.show().addClass("jarviswidget-visible")),c(),"function"==typeof d.o.onFullscreen&&d.o.onFullscreen.call(this,e),b.preventDefault()}),a(b).on("resize."+f,function(){c()}),e.on(g,".jarviswidget-edit-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),c.find(d.o.editPlaceholder).is(":visible")?a(this).children().removeClass(d.editClass[1]).addClass(d.editClass[0]).parents(d.o.widgets).find(d.o.editPlaceholder).slideUp(d.o.editSpeed,function(){d._saveSettingsWidget()}):a(this).children().removeClass(d.editClass[0]).addClass(d.editClass[1]).parents(d.o.widgets).find(d.o.editPlaceholder).slideDown(d.o.editSpeed),"function"==typeof d.o.onEdit&&d.o.onEdit.call(this,c),b.preventDefault()}),a(d.o.editPlaceholder).find("input").keyup(function(){a(this).parents(d.o.widgets).children("header").children("h2").text(a(this).val())}),e.on(g,"[data-widget-setstyle]",function(b){var c=a(this).data("widget-setstyle"),e="";a(this).parents(d.o.editPlaceholder).find("[data-widget-setstyle]").each(function(){e+=a(this).data("widget-setstyle")+" "}),a(this).parents(d.o.widgets).attr("data-widget-attstyle",""+c).removeClassPrefix("jarviswidget-color-").addClass(c),d._runLoaderWidget(a(this)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-custom-btn",function(b){var c=a(this).parents(d.o.widgets);d._runLoaderWidget(a(this)),a(this).children("."+d.customClass[0]).length?(a(this).children().removeClass(d.customClass[0]).addClass(d.customClass[1]),"function"==typeof d.o.customStart&&d.o.customStart.call(this,c)):(a(this).children().removeClass(d.customClass[1]).addClass(d.customClass[0]),"function"==typeof d.o.customEnd&&d.o.customEnd.call(this,c)),d._saveSettingsWidget(),b.preventDefault()}),e.on(g,".jarviswidget-delete-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.attr("id"),f=c.children("header").children("h2").text();a.SmartMessageBox?a.SmartMessageBox({"title":"<i class='fa fa-times' style='color:#ed1c24'></i> "+d.o.labelDelete+' "'+f+'"',"content":d.o.deleteMsg,"buttons":"[No][Yes]"},function(b){"Yes"==b&&(d._runLoaderWidget(a(this)),a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}))}):a("#"+e).fadeOut(d.o.deleteSpeed,function(){a(this).remove(),"function"==typeof d.o.onDelete&&d.o.onDelete.call(this,c)}),b.preventDefault()}),e.on(g,".jarviswidget-refresh-btn",function(b){var c=a(this).parents(d.o.widgets),e=c.data("widget-load"),f=c.children(),g=a(this);g.button("loading"),f.addClass("widget-body-ajax-loading"),setTimeout(function(){g.button("reset"),f.removeClass("widget-body-ajax-loading"),d._loadAjaxFile(c,e,f)},1e3),b.preventDefault()}),e=null},"destroy":function(){var c=this,d="."+f,e=c.obj.find(c.o.grid+".sortable-grid").not("[data-widget-excludegrid]");e.sortable("destroy"),c.widget.children("header").off(d),a(c.o.deleteSettingsKey).off(d),a(c.o.deletePositionKey).off(d),a(b).off(d),c.obj.removeData(f)}},a.fn[f]=function(b){return this.each(function(){var c=a(this),d=c.data(f);if(!d){var g="object"==typeof b&&b;c.data(f,d=new e(this,g))}"string"==typeof b&&d[b]()})},a.fn[f].defaults={"grid":"section","widgets":".jarviswidget","localStorage":!0,"deleteSettingsKey":"","settingsKeyLabel":"Reset settings?","deletePositionKey":"","positionKeyLabel":"Reset position?","sortable":!0,"buttonsHidden":!1,"toggleButton":!0,"toggleClass":"min-10 | plus-10","toggleSpeed":200,"onToggle":function(){},"deleteButton":!0,"deleteMsg":"Warning: This action cannot be undone","deleteClass":"trashcan-10","deleteSpeed":200,"onDelete":function(){},"editButton":!0,"editPlaceholder":".jarviswidget-editbox","editClass":"pencil-10 | delete-10","editSpeed":200,"onEdit":function(){},"colorButton":!0,"fullscreenButton":!0,"fullscreenClass":"fullscreen-10 | normalscreen-10","fullscreenDiff":3,"onFullscreen":function(){},"customButton":!0,"customClass":"","customStart":function(){},"customEnd":function(){},"buttonOrder":"%refresh% %delete% %custom% %edit% %fullscreen% %toggle%","opacity":1,"dragHandle":"> header","placeholderClass":"jarviswidget-placeholder","indicator":!0,"indicatorTime":600,"ajax":!0,"loadingLabel":"loading...","timestampPlaceholder":".jarviswidget-timestamp","timestampFormat":"Last update: %m%/%d%/%y% %h%:%i%:%s%","refreshButton":!0,"refreshButtonClass":"refresh-10","labelError":"Sorry but there was a error:","labelUpdated":"Last Update:","labelRefresh":"Refresh","labelDelete":"Delete widget:","afterLoad":function(){},"rtl":!1,"onChange":function(){},"onSave":function(){},"ajaxnav":!0},a.fn.removeClassPrefix=function(b){return this.each(function(c,d){var e=d.className.split(" ").map(function(a){return 0===a.indexOf(b)?"":a});d.className=a.trim(e.join(" "))}),this}}(jQuery,window,document);

/**
 * Created by noahli on 16/6/25.
 */
/*! SmartAdmin - v1.5 - 2014-10-16 */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : a(jQuery, moment)
}(function (a, b) {
  function c(a, b) {
    return b.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
  }

  function d(a, b) {
    var c = b.longDateFormat("L");
    return c = c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), a.isRTL ? c += " ddd" : c = "ddd " + c, c
  }

  function e(a) {
    f(Bb, a)
  }

  function f(b) {
    function c(c, d) {
      a.isPlainObject(d) && a.isPlainObject(b[c]) && !g(c) ? b[c] = f({}, b[c], d) : void 0 !== d && (b[c] = d)
    }

    for (var d = 1; d < arguments.length; d++)a.each(arguments[d], c);
    return b
  }

  function g(a) {
    return /(Time|Duration)$/.test(a)
  }

  function h(c, d) {
    function e(a) {
      hb ? m() && (t(), r(a)) : g()
    }

    function g() {
      ib = cb.theme ? "ui" : "fc", c.addClass("fc"), c.addClass(cb.isRTL ? "fc-rtl" : "fc-ltr"), cb.theme && c.addClass("ui-widget"), hb = a("<div class='fc-content' />").prependTo(c), fb = new i(ab, cb), gb = fb.render(), gb && c.prepend(gb), o(cb.defaultView), cb.handleWindowResize && a(window).resize(v), n() || h()
    }

    function h() {
      setTimeout(function () {
        !jb.start && n() && q()
      }, 0)
    }

    function k() {
      jb && (Z("viewDestroy", jb, jb, jb.element), jb.triggerEventDestroy()), a(window).unbind("resize", v), cb.droppable && a(document).off("dragstart", $).off("dragstop", _), jb.selectionManagerDestroy && jb.selectionManagerDestroy(), fb.destroy(), hb.remove(), c.removeClass("fc fc-ltr fc-rtl ui-widget")
    }

    function m() {
      return c.is(":visible")
    }

    function n() {
      return a("body").is(":visible")
    }

    function o(a) {
      jb && a == jb.name || p(a)
    }

    function p(b) {
      sb++, jb && (Z("viewDestroy", jb, jb, jb.element), J(), jb.triggerEventDestroy(), U(), jb.element.remove(), fb.deactivateButton(jb.name)), fb.activateButton(b), jb = new Fb[b](a("<div class='fc-view fc-view-" + b + "' />").appendTo(hb), ab), q(), V(), sb--
    }

    function q(a) {
      jb.start && !a && mb.isWithin(jb.intervalStart, jb.intervalEnd) || m() && r(a)
    }

    function r(a) {
      sb++, jb.start && (Z("viewDestroy", jb, jb, jb.element), J(), B()), U(), a && (mb = jb.incrementDate(mb, a)), jb.render(mb.clone()), u(), V(), (jb.afterRender || A)(), G(), H(), Z("viewRender", jb, jb, jb.element), sb--, C()
    }

    function s() {
      m() && (J(), B(), t(), u(), z())
    }

    function t() {
      lb = cb.contentHeight ? cb.contentHeight : cb.height ? cb.height - (gb ? gb.height() : 0) - w(hb) : Math.round(hb.width() / Math.max(cb.aspectRatio, .5))
    }

    function u() {
      void 0 === lb && t(), sb++, jb.setHeight(lb), jb.setWidth(hb.width()), sb--, kb = c.outerWidth()
    }

    function v(a) {
      if (!sb && a.target === window)if (jb.start) {
        var b = ++rb;
        setTimeout(function () {
          b == rb && !sb && m() && kb != (kb = c.outerWidth()) && (sb++, s(), jb.trigger("windowResize", qb), sb--)
        }, cb.windowResizeDelay)
      } else h()
    }

    function x() {
      B(), D()
    }

    function y(a) {
      B(), z(a)
    }

    function z(a) {
      m() && (jb.renderEvents(tb, a), jb.trigger("eventAfterAllRender"))
    }

    function B() {
      jb.triggerEventDestroy(), jb.clearEvents(), jb.clearEventData()
    }

    function C() {
      !cb.lazyFetching || ob(jb.start, jb.end) ? D() : z()
    }

    function D() {
      pb(jb.start, jb.end)
    }

    function E(a) {
      tb = a, z()
    }

    function F(a) {
      y(a)
    }

    function G() {
      fb.updateTitle(jb.title)
    }

    function H() {
      var a = ab.getNow();
      a.isWithin(jb.intervalStart, jb.intervalEnd) ? fb.disableButton("today") : fb.enableButton("today")
    }

    function I(a, b) {
      jb.select(a, b)
    }

    function J() {
      jb && jb.unselect()
    }

    function K() {
      q(-1)
    }

    function L() {
      q(1)
    }

    function M() {
      mb.add("years", -1), q()
    }

    function N() {
      mb.add("years", 1), q()
    }

    function O() {
      mb = ab.getNow(), q()
    }

    function Q(a) {
      mb = ab.moment(a), q()
    }

    function R(a) {
      mb.add(b.duration(a)), q()
    }

    function T() {
      return mb.clone()
    }

    function U() {
      hb.css({"width": "100%", "height": hb.height(), "overflow": "hidden"})
    }

    function V() {
      hb.css({"width": "", "height": "", "overflow": ""})
    }

    function W() {
      return ab
    }

    function X() {
      return jb
    }

    function Y(a, b) {
      return void 0 === b ? cb[a] : void(("height" == a || "contentHeight" == a || "aspectRatio" == a) && (cb[a] = b, s()))
    }

    function Z(a, b) {
      return cb[a] ? cb[a].apply(b || qb, Array.prototype.slice.call(arguments, 2)) : void 0
    }

    function $(b, c) {
      var d = b.target, e = a(d);
      if (!e.parents(".fc").length) {
        var f = cb.dropAccept;
        (a.isFunction(f) ? f.call(d, e) : e.is(f)) && (nb = d, jb.dragStart(nb, b, c))
      }
    }

    function _(a, b) {
      nb && (jb.dragStop(nb, a, b), nb = null)
    }

    var ab = this;
    d = d || {};
    var bb, cb = f({}, Bb, d);
    bb = cb.lang in Cb ? Cb[cb.lang] : Cb[Bb.lang], bb && (cb = f({}, Bb, bb, d)), cb.isRTL && (cb = f({}, Bb, Db, bb || {}, d)), ab.options = cb, ab.render = e, ab.destroy = k, ab.refetchEvents = x, ab.reportEvents = E, ab.reportEventChange = F, ab.rerenderEvents = y, ab.changeView = o, ab.select = I, ab.unselect = J, ab.prev = K, ab.next = L, ab.prevYear = M, ab.nextYear = N, ab.today = O, ab.gotoDate = Q, ab.incrementDate = R, ab.getDate = T, ab.getCalendar = W, ab.getView = X, ab.option = Y, ab.trigger = Z;
    var db = l(b.langData(cb.lang));
    if (cb.monthNames && (db._months = cb.monthNames), cb.monthNamesShort && (db._monthsShort = cb.monthNamesShort), cb.dayNames && (db._weekdays = cb.dayNames), cb.dayNamesShort && (db._weekdaysShort = cb.dayNamesShort), null != cb.firstDay) {
      var eb = l(db._week);
      eb.dow = cb.firstDay, db._week = eb
    }
    ab.defaultAllDayEventDuration = b.duration(cb.defaultAllDayEventDuration), ab.defaultTimedEventDuration = b.duration(cb.defaultTimedEventDuration), ab.moment = function () {
      var a;
      return "local" === cb.timezone ? (a = Eb.moment.apply(null, arguments), a.hasTime() && a.local()) : a = "UTC" === cb.timezone ? Eb.moment.utc.apply(null, arguments) : Eb.moment.parseZone.apply(null, arguments), a._lang = db, a
    }, ab.getIsAmbigTimezone = function () {
      return "local" !== cb.timezone && "UTC" !== cb.timezone
    }, ab.rezoneDate = function (a) {
      return ab.moment(a.toArray())
    }, ab.getNow = function () {
      var a = cb.now;
      return "function" == typeof a && (a = a()), ab.moment(a)
    }, ab.calculateWeekNumber = function (a) {
      var b = cb.weekNumberCalculation;
      return "function" == typeof b ? b(a) : "local" === b ? a.week() : "ISO" === b.toUpperCase() ? a.isoWeek() : void 0
    }, ab.getEventEnd = function (a) {
      return a.end ? a.end.clone() : ab.getDefaultEventEnd(a.allDay, a.start)
    }, ab.getDefaultEventEnd = function (a, b) {
      var c = b.clone();
      return a ? c.stripTime().add(ab.defaultAllDayEventDuration) : c.add(ab.defaultTimedEventDuration), ab.getIsAmbigTimezone() && c.stripZone(), c
    }, ab.formatRange = function (a, b, c) {
      return "function" == typeof c && (c = c.call(ab, cb, db)), S(a, b, c, null, cb.isRTL)
    }, ab.formatDate = function (a, b) {
      return "function" == typeof b && (b = b.call(ab, cb, db)), P(a, b)
    }, j.call(ab, cb);
    var fb, gb, hb, ib, jb, kb, lb, mb, nb, ob = ab.isFetchNeeded, pb = ab.fetchEvents, qb = c[0], rb = 0, sb = 0, tb = [];
    mb = null != cb.defaultDate ? ab.moment(cb.defaultDate) : ab.getNow(), cb.droppable && a(document).on("dragstart", $).on("dragstop", _)
  }

  function i(b, c) {
    function d() {
      m = c.theme ? "ui" : "fc";
      var b = c.header;
      return b ? n = a("<table class='fc-header' style='width:100%'/>").append(a("<tr/>").append(f("left")).append(f("center")).append(f("right"))) : void 0
    }

    function e() {
      n.remove()
    }

    function f(d) {
      var e = a("<td class='fc-header-" + d + "'/>"), f = c.header[d];
      return f && a.each(f.split(" "), function (d) {
        d > 0 && e.append("<span class='fc-header-space'/>");
        var f;
        a.each(this.split(","), function (d, g) {
          if ("title" == g)e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), f && f.addClass(m + "-corner-right"), f = null; else {
            var h;
            if (b[g] ? h = b[g] : Fb[g] && (h = function () {
                o.removeClass(m + "-state-hover"), b.changeView(g)
              }), h) {
              var i, j = D(c.themeButtonIcons, g), k = D(c.buttonIcons, g), l = D(c.defaultButtonText, g), n = D(c.buttonText, g);
              i = n ? E(n) : j && c.theme ? "<span class='ui-icon ui-icon-" + j + "'></span>" : k && !c.theme ? "<span class='fc-icon fc-icon-" + k + "'></span>" : E(l || g);
              var o = a("<span class='fc-button fc-button-" + g + " " + m + "-state-default'>" + i + "</span>").click(function () {
                o.hasClass(m + "-state-disabled") || h()
              }).mousedown(function () {
                o.not("." + m + "-state-active").not("." + m + "-state-disabled").addClass(m + "-state-down")
              }).mouseup(function () {
                o.removeClass(m + "-state-down")
              }).hover(function () {
                o.not("." + m + "-state-active").not("." + m + "-state-disabled").addClass(m + "-state-hover")
              }, function () {
                o.removeClass(m + "-state-hover").removeClass(m + "-state-down")
              }).appendTo(e);
              G(o), f || o.addClass(m + "-corner-left"), f = o
            }
          }
        }), f && f.addClass(m + "-corner-right")
      }), e
    }

    function g(a) {
      n.find("h2").html(a)
    }

    function h(a) {
      n.find("span.fc-button-" + a).addClass(m + "-state-active")
    }

    function i(a) {
      n.find("span.fc-button-" + a).removeClass(m + "-state-active")
    }

    function j(a) {
      n.find("span.fc-button-" + a).addClass(m + "-state-disabled")
    }

    function k(a) {
      n.find("span.fc-button-" + a).removeClass(m + "-state-disabled")
    }

    var l = this;
    l.render = d, l.destroy = e, l.updateTitle = g, l.activateButton = h, l.deactivateButton = i, l.disableButton = j, l.enableButton = k;
    var m, n = a([])
  }

  function j(b) {
    function c(a, b) {
      return !y || a.clone().stripZone() < y.clone().stripZone() || b.clone().stripZone() > z.clone().stripZone()
    }

    function d(a, b) {
      y = a, z = b, L = [];
      var c = ++G, d = F.length;
      H = d;
      for (var f = 0; d > f; f++)e(F[f], c)
    }

    function e(b, c) {
      f(b, function (d) {
        var e, f, g = a.isArray(b.events);
        if (c == G) {
          if (d)for (e = 0; e < d.length; e++)f = d[e], g || (f = u(f, b)), f && L.push(f);
          H--, H || C(L)
        }
      })
    }

    function f(c, d) {
      var e, g, h = Eb.sourceFetchers;
      for (e = 0; e < h.length; e++) {
        if (g = h[e].call(x, c, y.clone(), z.clone(), b.timezone, d), g === !0)return;
        if ("object" == typeof g)return void f(g, d)
      }
      var i = c.events;
      if (i)a.isFunction(i) ? (s(), i.call(x, y.clone(), z.clone(), b.timezone, function (a) {
        d(a), t()
      })) : a.isArray(i) ? d(i) : d(); else {
        var j = c.url;
        if (j) {
          var k, l = c.success, m = c.error, n = c.complete;
          k = a.isFunction(c.data) ? c.data() : c.data;
          var o = a.extend({}, k || {}), p = K(c.startParam, b.startParam), q = K(c.endParam, b.endParam), r = K(c.timezoneParam, b.timezoneParam);
          p && (o[p] = y.format()), q && (o[q] = z.format()), b.timezone && "local" != b.timezone && (o[r] = b.timezone), s(), a.ajax(a.extend({}, Gb, c, {
            "data": o,
            "success": function (b) {
              b = b || [];
              var c = J(l, this, arguments);
              a.isArray(c) && (b = c), d(b)
            },
            "error": function () {
              J(m, this, arguments), d()
            },
            "complete": function () {
              J(n, this, arguments), t()
            }
          }))
        } else d()
      }
    }

    function g(a) {
      var b = h(a);
      b && (F.push(b), H++, e(b, G))
    }

    function h(b) {
      var c, d, e = Eb.sourceNormalizers;
      if (a.isFunction(b) || a.isArray(b) ? c = {"events": b} : "string" == typeof b ? c = {"url": b} : "object" == typeof b && (c = a.extend({}, b), "string" == typeof c.className && (c.className = c.className.split(/\s+/))), c) {
        for (a.isArray(c.events) && (c.events = a.map(c.events, function (a) {
          return u(a, c)
        })), d = 0; d < e.length; d++)e[d].call(x, c);
        return c
      }
    }

    function i(b) {
      F = a.grep(F, function (a) {
        return !j(a, b)
      }), L = a.grep(L, function (a) {
        return !j(a.source, b)
      }), C(L)
    }

    function j(a, b) {
      return a && b && l(a) == l(b)
    }

    function l(a) {
      return ("object" == typeof a ? a.events || a.url : "") || a
    }

    function m(a) {
      a.start = x.moment(a.start), a.end && (a.end = x.moment(a.end)), v(a), o(a), C(L)
    }

    function o(a) {
      var b, c, d, e;
      for (b = 0; b < L.length; b++)if (c = L[b], c._id == a._id && c !== a)for (d = 0; d < M.length; d++)e = M[d], void 0 !== a[e] && (c[e] = a[e])
    }

    function p(a, b) {
      var c = u(a);
      c && (c.source || (b && (E.events.push(c), c.source = E), L.push(c)), C(L))
    }

    function q(b) {
      var c, d;
      for (null == b ? b = function () {
        return !0
      } : a.isFunction(b) || (c = b + "", b = function (a) {
        return a._id == c
      }), L = a.grep(L, b, !0), d = 0; d < F.length; d++)a.isArray(F[d].events) && (F[d].events = a.grep(F[d].events, b, !0));
      C(L)
    }

    function r(b) {
      return a.isFunction(b) ? a.grep(L, b) : null != b ? (b += "", a.grep(L, function (a) {
        return a._id == b
      })) : L
    }

    function s() {
      I++ || A("loading", null, !0, B())
    }

    function t() {
      --I || A("loading", null, !1, B())
    }

    function u(c, d) {
      var e, f, g, h, i = {};
      return b.eventDataTransform && (c = b.eventDataTransform(c)), d && d.eventDataTransform && (c = d.eventDataTransform(c)), e = x.moment(c.start || c.date), e.isValid() && (f = null, !c.end || (f = x.moment(c.end), f.isValid())) ? (g = c.allDay, void 0 === g && (h = K(d ? d.allDayDefault : void 0, b.allDayDefault), g = void 0 !== h ? h : !(e.hasTime() || f && f.hasTime())), g ? (e.hasTime() && e.stripTime(), f && f.hasTime() && f.stripTime()) : (e.hasTime() || (e = x.rezoneDate(e)), f && !f.hasTime() && (f = x.rezoneDate(f))), a.extend(i, c), d && (i.source = d), i._id = c._id || (void 0 === c.id ? "_fc" + Hb++ : c.id + ""), i.className = c.className ? "string" == typeof c.className ? c.className.split(/\s+/) : c.className : [], i.allDay = g, i.start = e, i.end = f, b.forceEventDuration && !i.end && (i.end = D(i)), k(i), i) : void 0
    }

    function v(a, b, c) {
      var d, e, f, g, h = a._allDay, i = a._start, j = a._end, k = !1;
      return b || c || (b = a.start, c = a.end), d = a.allDay != h ? a.allDay : !(b || c).hasTime(), d && (b && (b = b.clone().stripTime()), c && (c = c.clone().stripTime())), b && (e = d ? n(b, i.clone().stripTime()) : n(b, i)), d != h ? k = !0 : c && (f = n(c || x.getDefaultEventEnd(d, b || i), b || i).subtract(n(j || x.getDefaultEventEnd(h, i), i))), g = w(r(a._id), k, d, e, f), {
        "dateDelta": e,
        "durationDelta": f,
        "undo": g
      }
    }

    function w(c, d, e, f, g) {
      var h = x.getIsAmbigTimezone(), i = [];
      return a.each(c, function (a, c) {
        var j = c._allDay, l = c._start, m = c._end, n = null != e ? e : j, o = l.clone(), p = !d && m ? m.clone() : null;
        n ? (o.stripTime(), p && p.stripTime()) : (o.hasTime() || (o = x.rezoneDate(o)), p && !p.hasTime() && (p = x.rezoneDate(p))), p || !b.forceEventDuration && !+g || (p = x.getDefaultEventEnd(n, o)), o.add(f), p && p.add(f).add(g), h && (+f || +g) && (o.stripZone(), p && p.stripZone()), c.allDay = n, c.start = o, c.end = p, k(c), i.push(function () {
          c.allDay = j, c.start = l, c.end = m, k(c)
        })
      }), function () {
        for (var a = 0; a < i.length; a++)i[a]()
      }
    }

    var x = this;
    x.isFetchNeeded = c, x.fetchEvents = d, x.addEventSource = g, x.removeEventSource = i, x.updateEvent = m, x.renderEvent = p, x.removeEvents = q, x.clientEvents = r, x.mutateEvent = v;
    var y, z, A = x.trigger, B = x.getView, C = x.reportEvents, D = x.getEventEnd, E = {"events": []}, F = [E], G = 0, H = 0, I = 0, L = [];
    a.each((b.events ? [b.events] : []).concat(b.eventSources || []), function (a, b) {
      var c = h(b);
      c && F.push(c)
    });
    var M = ["title", "url", "allDay", "className", "editable", "color", "backgroundColor", "borderColor", "textColor"]
  }

  function k(a) {
    a._allDay = a.allDay, a._start = a.start.clone(), a._end = a.end ? a.end.clone() : null
  }

  function l(a) {
    var b = function () {
    };
    return b.prototype = a, new b
  }

  function m(a, b) {
    for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c])
  }

  function n(a, c) {
    return b.duration({"days": a.clone().stripTime().diff(c.clone().stripTime(), "days"), "ms": a.time() - c.time()})
  }

  function o(a) {
    return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
  }

  function p(b, c, d) {
    b.unbind("mouseover").mouseover(function (b) {
      for (var e, f, g, h = b.target; h != this;)e = h, h = h.parentNode;
      void 0 !== (f = e._fci) && (e._fci = void 0, g = c[f], d(g.event, g.element, g), a(b.target).trigger(b)), b.stopPropagation()
    })
  }

  function q(b, c, d) {
    for (var e, f = 0; f < b.length; f++)e = a(b[f]), e.width(Math.max(0, c - s(e, d)))
  }

  function r(b, c, d) {
    for (var e, f = 0; f < b.length; f++)e = a(b[f]), e.height(Math.max(0, c - w(e, d)))
  }

  function s(a, b) {
    return t(a) + v(a) + (b ? u(a) : 0)
  }

  function t(b) {
    return (parseFloat(a.css(b[0], "paddingLeft", !0)) || 0) + (parseFloat(a.css(b[0], "paddingRight", !0)) || 0)
  }

  function u(b) {
    return (parseFloat(a.css(b[0], "marginLeft", !0)) || 0) + (parseFloat(a.css(b[0], "marginRight", !0)) || 0)
  }

  function v(b) {
    return (parseFloat(a.css(b[0], "borderLeftWidth", !0)) || 0) + (parseFloat(a.css(b[0], "borderRightWidth", !0)) || 0)
  }

  function w(a, b) {
    return x(a) + z(a) + (b ? y(a) : 0)
  }

  function x(b) {
    return (parseFloat(a.css(b[0], "paddingTop", !0)) || 0) + (parseFloat(a.css(b[0], "paddingBottom", !0)) || 0)
  }

  function y(b) {
    return (parseFloat(a.css(b[0], "marginTop", !0)) || 0) + (parseFloat(a.css(b[0], "marginBottom", !0)) || 0)
  }

  function z(b) {
    return (parseFloat(a.css(b[0], "borderTopWidth", !0)) || 0) + (parseFloat(a.css(b[0], "borderBottomWidth", !0)) || 0)
  }

  function A() {
  }

  function B(a, b) {
    return a - b
  }

  function C(a) {
    return Math.max.apply(Math, a)
  }

  function D(a, b) {
    if (a = a || {}, void 0 !== a[b])return a[b];
    for (var c, d = b.split(/(?=[A-Z])/), e = d.length - 1; e >= 0; e--)if (c = a[d[e].toLowerCase()], void 0 !== c)return c;
    return a["default"]
  }

  function E(a) {
    return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }

  function F(a) {
    return a.replace(/&.*?;/g, "")
  }

  function G(a) {
    a.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () {
      return !1
    })
  }

  function H(a) {
    a.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
  }

  function I(a, b) {
    var c = a.source || {}, d = a.color, e = c.color, f = b("eventColor"), g = a.backgroundColor || d || c.backgroundColor || e || b("eventBackgroundColor") || f, h = a.borderColor || d || c.borderColor || e || b("eventBorderColor") || f, i = a.textColor || c.textColor || b("eventTextColor"), j = [];
    return g && j.push("background-color:" + g), h && j.push("border-color:" + h), i && j.push("color:" + i), j.join(";")
  }

  function J(b, c, d) {
    if (a.isFunction(b) && (b = [b]), b) {
      var e, f;
      for (e = 0; e < b.length; e++)f = b[e].apply(c, d) || f;
      return f
    }
  }

  function K() {
    for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a]
  }

  function L(c, d, e) {
    var f, g, h, i, j = c[0], k = 1 == c.length && "string" == typeof j;
    return b.isMoment(j) ? (i = b.apply(null, c), j._ambigTime && (i._ambigTime = !0), j._ambigZone && (i._ambigZone = !0)) : o(j) || void 0 === j ? i = b.apply(null, c) : (f = !1, g = !1, k ? Jb.test(j) ? (j += "-01", c = [j], f = !0, g = !0) : (h = Kb.exec(j)) && (f = !h[5], g = !0) : a.isArray(j) && (g = !0), i = d ? b.utc.apply(b, c) : b.apply(null, c), f ? (i._ambigTime = !0, i._ambigZone = !0) : e && (g ? i._ambigZone = !0 : k && i.zone(j))), new M(i)
  }

  function M(a) {
    m(this, a)
  }

  function N(a) {
    var b, c = [], d = !1, e = !1;
    for (b = 0; b < a.length; b++)c.push(Eb.moment(a[b])), d = d || c[b]._ambigTime, e = e || c[b]._ambigZone;
    for (b = 0; b < c.length; b++)d ? c[b].stripTime() : e && c[b].stripZone();
    return c
  }

  function O(a, c) {
    return b.fn.format.call(a, c)
  }

  function P(a, b) {
    return Q(a, V(b))
  }

  function Q(a, b) {
    var c, d = "";
    for (c = 0; c < b.length; c++)d += R(a, b[c]);
    return d
  }

  function R(a, b) {
    var c, d;
    return "string" == typeof b ? b : (c = b.token) ? Lb[c] ? Lb[c](a) : O(a, c) : b.maybe && (d = Q(a, b.maybe), d.match(/[1-9]/)) ? d : ""
  }

  function S(a, b, c, d, e) {
    return a = Eb.moment.parseZone(a), b = Eb.moment.parseZone(b), c = a.lang().longDateFormat(c) || c, d = d || " - ", T(a, b, V(c), d, e)
  }

  function T(a, b, c, d, e) {
    var f, g, h, i, j = "", k = "", l = "", m = "", n = "";
    for (g = 0; g < c.length && (f = U(a, b, c[g]), f !== !1); g++)j += f;
    for (h = c.length - 1; h > g && (f = U(a, b, c[h]), f !== !1); h--)k = f + k;
    for (i = g; h >= i; i++)l += R(a, c[i]), m += R(b, c[i]);
    return (l || m) && (n = e ? m + d + l : l + d + m), j + n + k
  }

  function U(a, b, c) {
    var d, e;
    return "string" == typeof c ? c : (d = c.token) && (e = Mb[d.charAt(0)], e && a.isSame(b, e)) ? O(a, d) : !1
  }

  function V(a) {
    return a in Nb ? Nb[a] : Nb[a] = W(a)
  }

  function W(a) {
    for (var b, c = [], d = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; b = d.exec(a);)b[1] ? c.push(b[1]) : b[2] ? c.push({"maybe": W(b[2])}) : b[3] ? c.push({"token": b[3]}) : b[5] && c.push(b[5]);
    return c
  }

  function X(a, b) {
    function c(a, b) {
      return a.clone().stripTime().add("months", b).startOf("month")
    }

    function d(a) {
      e.intervalStart = a.clone().stripTime().startOf("month"), e.intervalEnd = e.intervalStart.clone().add("months", 1), e.start = e.intervalStart.clone(), e.start = e.skipHiddenDays(e.start), e.start.startOf("week"), e.start = e.skipHiddenDays(e.start), e.end = e.intervalEnd.clone(), e.end = e.skipHiddenDays(e.end, -1, !0), e.end.add("days", (7 - e.end.weekday()) % 7), e.end = e.skipHiddenDays(e.end, -1, !0);
      var c = Math.ceil(e.end.diff(e.start, "weeks", !0));
      "fixed" == e.opt("weekMode") && (e.end.add("weeks", 6 - c), c = 6), e.title = b.formatDate(e.intervalStart, e.opt("titleFormat")), e.renderBasic(c, e.getCellsPerWeek(), !0)
    }

    var e = this;
    e.incrementDate = c, e.render = d, $.call(e, a, b, "month")
  }

  function Y(a, b) {
    function c(a, b) {
      return a.clone().stripTime().add("weeks", b).startOf("week")
    }

    function d(a) {
      e.intervalStart = a.clone().stripTime().startOf("week"), e.intervalEnd = e.intervalStart.clone().add("weeks", 1), e.start = e.skipHiddenDays(e.intervalStart), e.end = e.skipHiddenDays(e.intervalEnd, -1, !0), e.title = b.formatRange(e.start, e.end.clone().subtract(1), e.opt("titleFormat"), " \u2014 "), e.renderBasic(1, e.getCellsPerWeek(), !1)
    }

    var e = this;
    e.incrementDate = c, e.render = d, $.call(e, a, b, "basicWeek")
  }

  function Z(a, b) {
    function c(a, b) {
      var c = a.clone().stripTime().add("days", b);
      return c = e.skipHiddenDays(c, 0 > b ? -1 : 1)
    }

    function d(a) {
      e.start = e.intervalStart = a.clone().stripTime(), e.end = e.intervalEnd = e.start.clone().add("days", 1), e.title = b.formatDate(e.start, e.opt("titleFormat")), e.renderBasic(1, 1, !1)
    }

    var e = this;
    e.incrementDate = c, e.render = d, $.call(e, a, b, "basicDay")
  }

  function $(b, c, d) {
    function e(a, b, c) {
      X = a, Y = b, Z = c, f(), M || g(), h()
    }

    function f() {
      db = gb("theme") ? "ui" : "fc", eb = gb("columnFormat"), fb = gb("weekNumbers")
    }

    function g() {
      S = a("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(b)
    }

    function h() {
      var c = i();
      J && J.remove(), J = a(c).appendTo(b), K = J.find("thead"), L = K.find(".fc-day-header"), M = J.find("tbody"), N = M.find("tr"), O = M.find(".fc-day"), P = N.find("td:first-child"), Q = N.eq(0).find(".fc-day > div"), R = N.eq(0).find(".fc-day-content > div"), H(K.add(K.find("tr"))), H(N), N.eq(0).addClass("fc-first"), N.filter(":last").addClass("fc-last"), O.each(function (b, c) {
        var d = lb(Math.floor(b / Y), b % Y);
        hb("dayRender", I, d, a(c))
      }), o(O)
    }

    function i() {
      var a = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" + j() + k() + "</table>";
      return a
    }

    function j() {
      var a, b, c = db + "-widget-header", d = "";
      for (d += "<thead><tr>", fb && (d += "<th class='fc-week-number " + c + "'>" + E(gb("weekNumberTitle")) + "</th>"), a = 0; Y > a; a++)b = lb(0, a), d += "<th class='fc-day-header fc-" + Ib[b.day()] + " " + c + "'>" + E(ob(b, eb)) + "</th>";
      return d += "</tr></thead>"
    }

    function k() {
      var a, b, c, d = db + "-widget-content", e = "";
      for (e += "<tbody>", a = 0; X > a; a++) {
        for (e += "<tr class='fc-week'>", fb && (c = lb(a, 0), e += "<td class='fc-week-number " + d + "'><div>" + E(pb(c)) + "</div></td>"), b = 0; Y > b; b++)c = lb(a, b), e += l(c);
        e += "</tr>"
      }
      return e += "</tbody>"
    }

    function l(a) {
      var b = I.intervalStart.month(), d = c.getNow().stripTime(), e = "", f = db + "-widget-content", g = ["fc-day", "fc-" + Ib[a.day()], f];
      return a.month() != b && g.push("fc-other-month"), a.isSame(d, "day") ? g.push("fc-today", db + "-state-highlight") : g.push(d > a ? "fc-past" : "fc-future"), e += "<td class='" + g.join(" ") + "' data-date='" + a.format() + "'><div>", Z && (e += "<div class='fc-day-number'>" + a.date() + "</div>"), e += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
    }

    function m(b) {
      U = b;
      var c, d, e, f = Math.max(U - K.height(), 0);
      "variable" == gb("weekMode") ? c = d = Math.floor(f / (1 == X ? 2 : 6)) : (c = Math.floor(f / X), d = f - c * (X - 1)), P.each(function (b, f) {
        X > b && (e = a(f), e.find("> div").css("min-height", (b == X - 1 ? d : c) - w(e)))
      })
    }

    function n(a) {
      T = a, bb.clear(), cb.clear(), W = 0, fb && (W = K.find("th.fc-week-number").outerWidth()), V = Math.floor((T - W) / Y), q(L.slice(0, -1), V)
    }

    function o(a) {
      a.click(p).mousedown(kb)
    }

    function p(b) {
      if (!gb("selectable")) {
        var d = c.moment(a(this).data("date"));
        hb("dayClick", this, d, b)
      }
    }

    function r(a, b, c) {
      c && $.build();
      for (var d = nb(a, b), e = 0; e < d.length; e++) {
        var f = d[e];
        o(s(f.row, f.leftCol, f.row, f.rightCol))
      }
    }

    function s(a, c, d, e) {
      var f = $.rect(a, c, d, e, b);
      return ib(f, b)
    }

    function t(a) {
      return a.clone().stripTime().add("days", 1)
    }

    function u(a, b) {
      r(a, b, !0)
    }

    function v() {
      jb()
    }

    function x(a, b) {
      var c = mb(a), d = O[c.row * Y + c.col];
      hb("dayClick", d, a, b)
    }

    function y(a, b) {
      ab.start(function (a) {
        if (jb(), a) {
          var b = lb(a), d = b.clone().add(c.defaultAllDayEventDuration);
          r(b, d)
        }
      }, b)
    }

    function z(a, b, c) {
      var d = ab.stop();
      jb(), d && hb("drop", a, lb(d), b, c)
    }

    function A(a) {
      return bb.left(a)
    }

    function B(a) {
      return bb.right(a)
    }

    function C(a) {
      return cb.left(a)
    }

    function D(a) {
      return cb.right(a)
    }

    function F(a) {
      return N.eq(a)
    }

    var I = this;
    I.renderBasic = e, I.setHeight = m, I.setWidth = n, I.renderDayOverlay = r, I.defaultSelectionEnd = t, I.renderSelection = u, I.clearSelection = v, I.reportDayClick = x, I.dragStart = y, I.dragStop = z, I.getHoverListener = function () {
      return ab
    }, I.colLeft = A, I.colRight = B, I.colContentLeft = C, I.colContentRight = D, I.getIsCellAllDay = function () {
      return !0
    }, I.allDayRow = F, I.getRowCnt = function () {
      return X
    }, I.getColCnt = function () {
      return Y
    }, I.getColWidth = function () {
      return V
    }, I.getDaySegmentContainer = function () {
      return S
    }, qb.call(I, b, c, d), wb.call(I), vb.call(I), _.call(I);
    var J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, ab, bb, cb, db, eb, fb, gb = I.opt, hb = I.trigger, ib = I.renderOverlay, jb = I.clearOverlays, kb = I.daySelectionMousedown, lb = I.cellToDate, mb = I.dateToCell, nb = I.rangeToSegments, ob = c.formatDate, pb = c.calculateWeekNumber;
    G(b.addClass("fc-grid")), $ = new xb(function (b, c) {
      var d, e, f;
      L.each(function (b, g) {
        d = a(g), e = d.offset().left, b && (f[1] = e), f = [e], c[b] = f
      }), f[1] = e + d.outerWidth(), N.each(function (c, g) {
        X > c && (d = a(g), e = d.offset().top, c && (f[1] = e), f = [e], b[c] = f)
      }), f[1] = e + d.outerHeight()
    }), ab = new yb($), bb = new Ab(function (a) {
      return Q.eq(a)
    }), cb = new Ab(function (a) {
      return R.eq(a)
    })
  }

  function _() {
    function a(a, b) {
      c.renderDayEvents(a, b)
    }

    function b() {
      c.getDaySegmentContainer().empty()
    }

    var c = this;
    c.renderEvents = a, c.clearEvents = b, rb.call(c)
  }

  function ab(a, b) {
    function c(a, b) {
      return a.clone().stripTime().add("weeks", b).startOf("week")
    }

    function d(a) {
      e.intervalStart = a.clone().stripTime().startOf("week"), e.intervalEnd = e.intervalStart.clone().add("weeks", 1), e.start = e.skipHiddenDays(e.intervalStart), e.end = e.skipHiddenDays(e.intervalEnd, -1, !0), e.title = b.formatRange(e.start, e.end.clone().subtract(1), e.opt("titleFormat"), " \u2014 "), e.renderAgenda(e.getCellsPerWeek())
    }

    var e = this;
    e.incrementDate = c, e.render = d, eb.call(e, a, b, "agendaWeek")
  }

  function bb(a, b) {
    function c(a, b) {
      var c = a.clone().stripTime().add("days", b);
      return c = e.skipHiddenDays(c, 0 > b ? -1 : 1)
    }

    function d(a) {
      e.start = e.intervalStart = a.clone().stripTime(), e.end = e.intervalEnd = e.start.clone().add("days", 1), e.title = b.formatDate(e.start, e.opt("titleFormat")), e.renderAgenda(1)
    }

    var e = this;
    e.incrementDate = c, e.render = d, eb.call(e, a, b, "agendaDay")
  }

  function cb(a, b) {
    return b.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
  }

  function db(a, b) {
    return b.longDateFormat("LT").replace(/\s*a$/i, "")
  }

  function eb(c, d, e) {
    function f(a) {
      Bb = a, g(), U ? i() : h()
    }

    function g() {
      Hb = Nb("theme") ? "ui" : "fc", Jb = Nb("isRTL"), Mb = Nb("columnFormat"), Kb = b.duration(Nb("minTime")), Lb = b.duration(Nb("maxTime")), rb = b.duration(Nb("slotDuration")), tb = Nb("snapDuration"), tb = tb ? b.duration(tb) : rb
    }

    function h() {
      var d, e, f, g, h = Hb + "-widget-header", j = Hb + "-widget-content", k = rb.asMinutes() % 15 === 0;
      for (i(), bb = a("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(c), Nb("allDaySlot") ? (cb = a("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(bb), d = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + h + " fc-agenda-axis'>" + (Nb("allDayHTML") || E(Nb("allDayText"))) + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + h + " fc-agenda-gutter'>&nbsp;</th></tr></table>", db = a(d).appendTo(bb), eb = db.find("tr"), s(eb.find("td")), bb.append("<div class='fc-agenda-divider " + h + "'><div class='fc-agenda-divider-inner'/></div>")) : cb = a([]), gb = a("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(bb), hb = a("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(gb), ib = a("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(hb), d = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", e = b.duration(+Kb), Cb = 0; Lb > e;)f = T.start.clone().time(e), g = f.minutes(), d += "<tr class='fc-slot" + Cb + " " + (g ? "fc-minor" : "") + "'><th class='fc-agenda-axis " + h + "'>" + (k && g ? "&nbsp;" : E(Yb(f, Nb("axisFormat")))) + "</th><td class='" + j + "'><div style='position:relative'>&nbsp;</div></td></tr>", e.add(rb), Cb++;
      d += "</tbody></table>", jb = a(d).appendTo(hb), t(jb.find("td"))
    }

    function i() {
      var b = j();
      U && U.remove(), U = a(b).appendTo(c), V = U.find("thead"), W = V.find("th").slice(1, -1), X = U.find("tbody"), Y = X.find("td").slice(0, -1), Z = Y.find("> div"), $ = Y.find(".fc-day-content > div"), _ = Y.eq(0), ab = Z.eq(0), H(V.add(V.find("tr"))), H(X.add(X.find("tr")))
    }

    function j() {
      var a = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" + k() + l() + "</table>";
      return a
    }

    function k() {
      var a, b, c, d = Hb + "-widget-header", e = "";
      for (e += "<thead><tr>", Nb("weekNumbers") ? (a = Vb(0, 0), b = Zb(a), Jb ? b += Nb("weekNumberTitle") : b = Nb("weekNumberTitle") + b, e += "<th class='fc-agenda-axis fc-week-number " + d + "'>" + E(b) + "</th>") : e += "<th class='fc-agenda-axis " + d + "'>&nbsp;</th>", c = 0; Bb > c; c++)a = Vb(0, c), e += "<th class='fc-" + Ib[a.day()] + " fc-col" + c + " " + d + "'>" + E(Yb(a, Mb)) + "</th>";
      return e += "<th class='fc-agenda-gutter " + d + "'>&nbsp;</th></tr></thead>"
    }

    function l() {
      var a, b, c, e, f, g = Hb + "-widget-header", h = Hb + "-widget-content", i = d.getNow().stripTime(), j = "";
      for (j += "<tbody><tr><th class='fc-agenda-axis " + g + "'>&nbsp;</th>", c = "", b = 0; Bb > b; b++)a = Vb(0, b), f = ["fc-col" + b, "fc-" + Ib[a.day()], h], a.isSame(i, "day") ? f.push(Hb + "-state-highlight", "fc-today") : f.push(i > a ? "fc-past" : "fc-future"), e = "<td class='" + f.join(" ") + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>", c += e;
      return j += c, j += "<td class='fc-agenda-gutter " + h + "'>&nbsp;</td></tr></tbody>"
    }

    function m(a) {
      void 0 === a && (a = mb), mb = a, $b = {};
      var b = X.position().top, c = gb.position().top, d = Math.min(a - b, jb.height() + c + 1);
      ab.height(d - w(_)), bb.css("top", b), gb.height(d - c - 1);
      var e = jb.find("tr:first").height() + 1, f = jb.find("tr:eq(1)").height();
      sb = (e + f) / 2, ub = rb / tb, zb = sb / ub
    }

    function n(b) {
      lb = b, Fb.clear(), Gb.clear();
      var c = V.find("th:first");
      db && (c = c.add(db.find("th:first"))), c = c.add(jb.find("th:first")), nb = 0, q(c.width("").each(function (b, c) {
        nb = Math.max(nb, a(c).outerWidth())
      }), nb);
      var d = U.find(".fc-agenda-gutter");
      db && (d = d.add(db.find("th.fc-agenda-gutter")));
      var e = gb[0].clientWidth;
      pb = gb.width() - e, pb ? (q(d, pb), d.show().prev().removeClass("fc-last")) : d.hide().prev().addClass("fc-last"), ob = Math.floor((e - nb) / Bb), q(W.slice(0, -1), ob)
    }

    function o() {
      function a() {
        gb.scrollTop(c)
      }

      var c = K(b.duration(Nb("scrollTime"))) + 1;
      a(), setTimeout(a, 0)
    }

    function p() {
      o()
    }

    function s(a) {
      a.click(u).mousedown(Tb)
    }

    function t(a) {
      a.click(u).mousedown(P)
    }

    function u(a) {
      if (!Nb("selectable")) {
        var b = Math.min(Bb - 1, Math.floor((a.pageX - U.offset().left - nb) / ob)), c = Vb(0, b), e = this.parentNode.className.match(/fc-slot(\d+)/);
        if (e) {
          var f = parseInt(e[1], 10);
          c.add(Kb + f * rb), c = d.rezoneDate(c), Ob("dayClick", Y[b], c, a)
        } else Ob("dayClick", Y[b], c, a)
      }
    }

    function v(a, b, c) {
      c && Db.build();
      for (var d = Xb(a, b), e = 0; e < d.length; e++) {
        var f = d[e];
        s(x(f.row, f.leftCol, f.row, f.rightCol))
      }
    }

    function x(a, b, c, d) {
      var e = Db.rect(a, b, c, d, bb);
      return Pb(e, bb)
    }

    function y(a, b) {
      a = a.clone().stripZone(), b = b.clone().stripZone();
      for (var c = 0; Bb > c; c++) {
        var d = Vb(0, c), e = d.clone().add("days", 1), f = a > d ? a : d, g = b > e ? e : b;
        if (g > f) {
          var h = Db.rect(0, c, 0, c, hb), i = J(f, d), j = J(g, d);
          h.top = i, h.height = j - i, t(Pb(h, hb))
        }
      }
    }

    function z(a) {
      return Fb.left(a)
    }

    function A(a) {
      return Gb.left(a)
    }

    function C(a) {
      return Fb.right(a)
    }

    function D(a) {
      return Gb.right(a)
    }

    function F(a) {
      return Nb("allDaySlot") && !a.row
    }

    function I(a) {
      var c = Vb(0, a.col), e = a.row;
      return Nb("allDaySlot") && e--, e >= 0 && (c.time(b.duration(Kb + e * tb)), c = d.rezoneDate(c)), c
    }

    function J(a, c) {
      return K(b.duration(a.clone().stripZone() - c.clone().stripTime()))
    }

    function K(a) {
      if (Kb > a)return 0;
      if (a >= Lb)return jb.height();
      var b = (a - Kb) / rb, c = Math.floor(b), d = b - c, e = $b[c];
      void 0 === e && (e = $b[c] = jb.find("tr").eq(c).find("td div")[0].offsetTop);
      var f = e - 1 + d * sb;
      return f = Math.max(f, 0)
    }

    function L(a) {
      return a.hasTime() ? a.clone().add(rb) : a.clone().add("days", 1)
    }

    function M(a, b) {
      a.hasTime() || b.hasTime() ? N(a, b) : Nb("allDaySlot") && v(a, b, !0)
    }

    function N(b, c) {
      var d = Nb("selectHelper");
      if (Db.build(), d) {
        var e = Wb(b).col;
        if (e >= 0 && Bb > e) {
          var f = Db.rect(0, e, 0, e, hb), g = J(b, b), h = J(c, b);
          if (h > g) {
            if (f.top = g, f.height = h - g, f.left += 2, f.width -= 5, a.isFunction(d)) {
              var i = d(b, c);
              i && (f.position = "absolute", kb = a(i).css(f).appendTo(hb))
            } else f.isStart = !0, f.isEnd = !0, kb = a(Ub({
              "title": "",
              "start": b,
              "end": c,
              "className": ["fc-select-helper"],
              "editable": !1
            }, f)), kb.css("opacity", Nb("dragOpacity"));
            kb && (t(kb), hb.append(kb), q(kb, f.width, !0), r(kb, f.height, !0))
          }
        }
      } else y(b, c)
    }

    function O() {
      Qb(), kb && (kb.remove(), kb = null)
    }

    function P(b) {
      if (1 == b.which && Nb("selectable")) {
        Sb(b);
        var c;
        Eb.start(function (a, b) {
          if (O(), a && a.col == b.col && !F(a)) {
            var d = I(b), e = I(a);
            c = [d, d.clone().add(tb), e, e.clone().add(tb)].sort(B), N(c[0], c[3])
          } else c = null
        }, b), a(document).one("mouseup", function (a) {
          Eb.stop(), c && (+c[0] == +c[1] && Q(c[0], a), Rb(c[0], c[3], a))
        })
      }
    }

    function Q(a, b) {
      Ob("dayClick", Y[Wb(a).col], a, b)
    }

    function R(a, b) {
      Eb.start(function (a) {
        if (Qb(), a) {
          var b = I(a), c = b.clone();
          b.hasTime() ? (c.add(d.defaultTimedEventDuration), y(b, c)) : (c.add(d.defaultAllDayEventDuration), v(b, c))
        }
      }, b)
    }

    function S(a, b, c) {
      var d = Eb.stop();
      Qb(), d && Ob("drop", a, I(d), b, c)
    }

    var T = this;
    T.renderAgenda = f, T.setWidth = n, T.setHeight = m, T.afterRender = p, T.computeDateTop = J, T.getIsCellAllDay = F, T.allDayRow = function () {
      return eb
    }, T.getCoordinateGrid = function () {
      return Db
    }, T.getHoverListener = function () {
      return Eb
    }, T.colLeft = z, T.colRight = C, T.colContentLeft = A, T.colContentRight = D, T.getDaySegmentContainer = function () {
      return cb
    }, T.getSlotSegmentContainer = function () {
      return ib
    }, T.getSlotContainer = function () {
      return hb
    }, T.getRowCnt = function () {
      return 1
    }, T.getColCnt = function () {
      return Bb
    }, T.getColWidth = function () {
      return ob
    }, T.getSnapHeight = function () {
      return zb
    }, T.getSnapDuration = function () {
      return tb
    }, T.getSlotHeight = function () {
      return sb
    }, T.getSlotDuration = function () {
      return rb
    }, T.getMinTime = function () {
      return Kb
    }, T.getMaxTime = function () {
      return Lb
    }, T.defaultSelectionEnd = L, T.renderDayOverlay = v, T.renderSelection = M, T.clearSelection = O, T.reportDayClick = Q, T.dragStart = R, T.dragStop = S, qb.call(T, c, d, e), wb.call(T), vb.call(T), fb.call(T);
    var U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, rb, sb, tb, ub, zb, Bb, Cb, Db, Eb, Fb, Gb, Hb, Jb, Kb, Lb, Mb, Nb = T.opt, Ob = T.trigger, Pb = T.renderOverlay, Qb = T.clearOverlays, Rb = T.reportSelection, Sb = T.unselect, Tb = T.daySelectionMousedown, Ub = T.slotSegHtml, Vb = T.cellToDate, Wb = T.dateToCell, Xb = T.rangeToSegments, Yb = d.formatDate, Zb = d.calculateWeekNumber, $b = {};
    G(c.addClass("fc-agenda")), Db = new xb(function (b, c) {
      function d(a) {
        return Math.max(i, Math.min(j, a))
      }

      var e, f, g;
      W.each(function (b, d) {
        e = a(d), f = e.offset().left, b && (g[1] = f), g = [f], c[b] = g
      }), g[1] = f + e.outerWidth(), Nb("allDaySlot") && (e = eb, f = e.offset().top, b[0] = [f, f + e.outerHeight()]);
      for (var h = hb.offset().top, i = gb.offset().top, j = i + gb.outerHeight(), k = 0; Cb * ub > k; k++)b.push([d(h + zb * k), d(h + zb * (k + 1))])
    }), Eb = new yb(Db), Fb = new Ab(function (a) {
      return Z.eq(a)
    }), Gb = new Ab(function (a) {
      return $.eq(a)
    })
  }

  function fb() {
    function c(a, b) {
      var c, d = a.length, f = [], h = [];
      for (c = 0; d > c; c++)a[c].allDay ? f.push(a[c]) : h.push(a[c]);
      n("allDaySlot") && (V(f, b), v()), g(e(h), b)
    }

    function d() {
      x().empty(), y().empty()
    }

    function e(a) {
      var b, c, d, e, g, h = G(), i = W(), j = X(), k = [];
      for (c = 0; h > c; c++)for (b = F(0, c), g = f(a, b.clone().time(i), b.clone().time(j)), g = gb(g), d = 0; d < g.length; d++)e = g[d], e.col = c, k.push(e);
      return k
    }

    function f(a, b, c) {
      b = b.clone().stripZone(), c = c.clone().stripZone();
      var d, e, f, g, h, i, j, k, l = [], m = a.length;
      for (d = 0; m > d; d++)e = a[d], f = e.start.clone().stripZone(), g = $(e).stripZone(), g > b && c > f && (b > f ? (h = b.clone(), j = !1) : (h = f, j = !0), g > c ? (i = c.clone(), k = !1) : (i = g, k = !0), l.push({
        "event": e,
        "start": h,
        "end": i,
        "isStart": j,
        "isEnd": k
      }));
      return l.sort(pb)
    }

    function g(b, c) {
      var d, e, f, g, j, k, l, m, q, r, t, u, v, x, z, B, E = b.length, F = "", G = y(), H = n("isRTL");
      for (d = 0; E > d; d++)e = b[d], f = e.event, g = A(e.start, e.start), j = A(e.end, e.start), k = C(e.col), l = D(e.col), m = l - k, l -= .025 * m, m = l - k, q = m * (e.forwardCoord - e.backwardCoord), n("slotEventOverlap") && (q = Math.max(2 * (q - 10), q)), H ? (t = l - e.backwardCoord * m, r = t - q) : (r = k + e.backwardCoord * m, t = r + q), r = Math.max(r, k), t = Math.min(t, l), q = t - r, e.top = g, e.left = r, e.outerWidth = q, e.outerHeight = j - g, F += h(f, e);
      for (G[0].innerHTML = F, u = G.children(), d = 0; E > d; d++)e = b[d], f = e.event, v = a(u[d]), x = o("eventRender", f, f, v), x === !1 ? v.remove() : (x && x !== !0 && (v.remove(), v = a(x).css({
        "position": "absolute",
        "top": e.top,
        "left": e.left
      }).appendTo(G)), e.element = v, f._id === c ? i(f, v, e) : v[0]._fci = d, O(f, v));
      for (p(G, b, i), d = 0; E > d; d++)e = b[d], (v = e.element) && (e.vsides = w(v, !0), e.hsides = s(v, !0), z = v.find(".fc-event-title"), z.length && (e.contentTop = z[0].offsetTop));
      for (d = 0; E > d; d++)e = b[d], (v = e.element) && (v[0].style.width = Math.max(0, e.outerWidth - e.hsides) + "px", B = Math.max(0, e.outerHeight - e.vsides), v[0].style.height = B + "px", f = e.event, void 0 !== e.contentTop && B - e.contentTop < 10 && (v.find("div.fc-event-time").text(Z(f.start, n("timeFormat")) + " - " + f.title), v.find("div.fc-event-title").remove()), o("eventAfterRender", f, f, v))
    }

    function h(a, b) {
      var c = "<", d = a.url, e = I(a, n), f = ["fc-event", "fc-event-vert"];
      return q(a) && f.push("fc-event-draggable"), b.isStart && f.push("fc-event-start"), b.isEnd && f.push("fc-event-end"), f = f.concat(a.className), a.source && (f = f.concat(a.source.className || [])), c += d ? "a href='" + E(a.url) + "'" : "div", c += " class='" + f.join(" ") + "' style='position:absolute;top:" + b.top + "px;left:" + b.left + "px;" + e + "'><div class='fc-event-inner'><div class='fc-event-time'>" + E(m.getEventTimeText(a)) + "</div><div class='fc-event-title'>" + E(a.title || "") + "</div></div><div class='fc-event-bg'></div>", b.isEnd && t(a) && (c += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), c += "</" + (d ? "a" : "div") + ">"
    }

    function i(a, b, c) {
      var d = b.find("div.fc-event-time");
      q(a) && k(a, b, d), c.isEnd && t(a) && l(a, b, d), u(a, b)
    }

    function j(a, c, d) {
      function e() {
        j || (c.width(f).height("").draggable("option", "grid", null), j = !0)
      }

      var f, g, h, i = d.isStart, j = !0, k = z(), l = H(), m = W(), p = M(), q = L(), s = K(), t = J();
      c.draggable({
        "opacity": n("dragOpacity", "month"),
        "revertDuration": n("dragRevertDuration"),
        "start": function (b, d) {
          o("eventDragStart", c[0], a, b, d), Q(a, c), f = c.width(), k.start(function (b, d) {
            if (U(), b) {
              g = !1;
              var f = F(0, d.col), k = F(0, b.col);
              h = k.diff(f, "days"), b.row ? i ? j && (c.width(l - 10), r(c, Y.defaultTimedEventDuration / p * q), c.draggable("option", "grid", [l, 1]), j = !1) : g = !0 : (T(a.start.clone().add("days", h), $(a).add("days", h)), e()), g = g || j && !h
            } else e(), g = !0;
            c.draggable("option", "revert", g)
          }, b, "drag")
        },
        "stop": function (d, f) {
          if (k.stop(), U(), o("eventDragStop", c[0], a, d, f), g)e(), c.css("filter", ""), P(a, c); else {
            var i, l, n = a.start.clone().add("days", h);
            j || (l = Math.round((c.offset().top - N().offset().top) / t), i = b.duration(m + l * s), n = Y.rezoneDate(n.clone().time(i))), R(c[0], a, n, d, f)
          }
        }
      })
    }

    function k(a, b, c) {
      function d() {
        U(), h && (j ? (c.hide(), b.draggable("option", "grid", null), T(t, u)) : (e(), c.css("display", ""), b.draggable("option", "grid", [x, y])))
      }

      function e() {
        t && c.text(m.getEventTimeText(t, a.end ? u : null))
      }

      var f, g, h, i, j, k, l, p, q, r, s, t, u, v = m.getCoordinateGrid(), w = G(), x = H(), y = J(), z = K();
      b.draggable({
        "scroll": !1,
        "grid": [x, y],
        "axis": 1 == w ? "y" : !1,
        "opacity": n("dragOpacity"),
        "revertDuration": n("dragRevertDuration"),
        "start": function (c, d) {
          o("eventDragStart", b[0], a, c, d), Q(a, b), v.build(), f = b.position(), g = v.cell(c.pageX, c.pageY), h = i = !0, j = k = B(g), l = p = 0, q = 0, r = s = 0, t = null, u = null
        },
        "drag": function (c, e) {
          var m = v.cell(c.pageX, c.pageY);
          if (h = !!m) {
            if (j = B(m), l = Math.round((e.position.left - f.left) / x), l != p) {
              var n = F(0, g.col), o = g.col + l;
              o = Math.max(0, o), o = Math.min(w - 1, o);
              var A = F(0, o);
              q = A.diff(n, "days")
            }
            j || (r = Math.round((e.position.top - f.top) / y))
          }
          (h != i || j != k || l != p || r != s) && (j ? (t = a.start.clone().stripTime().add("days", q), u = t.clone().add(Y.defaultAllDayEventDuration)) : (t = a.start.clone().add(r * z).add("days", q), u = $(a).add(r * z).add("days", q)), d(), i = h, k = j, p = l, s = r), b.draggable("option", "revert", !h)
        },
        "stop": function (c, e) {
          U(), o("eventDragStop", b[0], a, c, e), h && (j || q || r) ? R(b[0], a, t, c, e) : (h = !0, j = !1, l = 0, q = 0, r = 0, d(), b.css("filter", ""), b.css(f), P(a, b))
        }
      })
    }

    function l(a, b, c) {
      var d, e, f, g = J(), h = K();
      b.resizable({
        "handles": {"s": ".ui-resizable-handle"}, "grid": g, "start": function (c, f) {
          d = e = 0, Q(a, b), o("eventResizeStart", b[0], a, c, f)
        }, "resize": function (i, j) {
          if (d = Math.round((Math.max(g, b.height()) - j.originalSize.height) / g), d != e) {
            f = $(a).add(h * d);
            var k;
            k = d ? m.getEventTimeText(a.start, f) : m.getEventTimeText(a), c.text(k), e = d
          }
        }, "stop": function (c, e) {
          o("eventResizeStop", b[0], a, c, e), d ? S(b[0], a, f, c, e) : P(a, b)
        }
      })
    }

    var m = this;
    m.renderEvents = c, m.clearEvents = d, m.slotSegHtml = h, rb.call(m);
    var n = m.opt, o = m.trigger, q = m.isEventDraggable, t = m.isEventResizable, u = m.eventElementHandlers, v = m.setHeight, x = m.getDaySegmentContainer, y = m.getSlotSegmentContainer, z = m.getHoverListener, A = m.computeDateTop, B = m.getIsCellAllDay, C = m.colContentLeft, D = m.colContentRight, F = m.cellToDate, G = m.getColCnt, H = m.getColWidth, J = m.getSnapHeight, K = m.getSnapDuration, L = m.getSlotHeight, M = m.getSlotDuration, N = m.getSlotContainer, O = m.reportEventElement, P = m.showEvents, Q = m.hideEvents, R = m.eventDrop, S = m.eventResize, T = m.renderDayOverlay, U = m.clearOverlays, V = m.renderDayEvents, W = m.getMinTime, X = m.getMaxTime, Y = m.calendar, Z = Y.formatDate, $ = Y.getEventEnd;
    m.draggableDayEvent = j
  }

  function gb(a) {
    var b, c = hb(a), d = c[0];
    if (ib(c), d) {
      for (b = 0; b < d.length; b++)jb(d[b]);
      for (b = 0; b < d.length; b++)kb(d[b], 0, 0)
    }
    return lb(c)
  }

  function hb(a) {
    var b, c, d, e = [];
    for (b = 0; b < a.length; b++) {
      for (c = a[b], d = 0; d < e.length && mb(c, e[d]).length; d++);
      (e[d] || (e[d] = [])).push(c)
    }
    return e
  }

  function ib(a) {
    var b, c, d, e, f;
    for (b = 0; b < a.length; b++)for (c = a[b], d = 0; d < c.length; d++)for (e = c[d], e.forwardSegs = [], f = b + 1; f < a.length; f++)mb(e, a[f], e.forwardSegs)
  }

  function jb(a) {
    var b, c, d = a.forwardSegs, e = 0;
    if (void 0 === a.forwardPressure) {
      for (b = 0; b < d.length; b++)c = d[b], jb(c), e = Math.max(e, 1 + c.forwardPressure);
      a.forwardPressure = e
    }
  }

  function kb(a, b, c) {
    var d, e = a.forwardSegs;
    if (void 0 === a.forwardCoord)for (e.length ? (e.sort(ob), kb(e[0], b + 1, c), a.forwardCoord = e[0].backwardCoord) : a.forwardCoord = 1, a.backwardCoord = a.forwardCoord - (a.forwardCoord - c) / (b + 1), d = 0; d < e.length; d++)kb(e[d], 0, a.forwardCoord)
  }

  function lb(a) {
    var b, c, d, e = [];
    for (b = 0; b < a.length; b++)for (c = a[b], d = 0; d < c.length; d++)e.push(c[d]);
    return e
  }

  function mb(a, b, c) {
    c = c || [];
    for (var d = 0; d < b.length; d++)nb(a, b[d]) && c.push(b[d]);
    return c
  }

  function nb(a, b) {
    return a.end > b.start && a.start < b.end
  }

  function ob(a, b) {
    return b.forwardPressure - a.forwardPressure || (a.backwardCoord || 0) - (b.backwardCoord || 0) || pb(a, b)
  }

  function pb(a, b) {
    return a.start - b.start || b.end - b.start - (a.end - a.start) || (a.event.title || "").localeCompare(b.event.title)
  }

  function qb(c, d, e) {
    function f(b, c) {
      var d = L[b];
      return a.isPlainObject(d) && !g(b) ? D(d, c || e) : d
    }

    function h(a, b) {
      return d.trigger.apply(d, [a, b || G].concat(Array.prototype.slice.call(arguments, 2), [G]))
    }

    function i(a) {
      var b = a.source || {};
      return K(a.startEditable, b.startEditable, f("eventStartEditable"), a.editable, b.editable, f("editable"))
    }

    function j(a) {
      var b = a.source || {};
      return K(a.durationEditable, b.durationEditable, f("eventDurationEditable"), a.editable, b.editable, f("editable"))
    }

    function k() {
      I = {}, J = []
    }

    function l(a, b) {
      J.push({"event": a, "element": b}), I[a._id] ? I[a._id].push(b) : I[a._id] = [b]
    }

    function m() {
      a.each(J, function (a, b) {
        G.trigger("eventDestroy", b.event, b.event, b.element)
      })
    }

    function n(a, b) {
      b.click(function (c) {
        return b.hasClass("ui-draggable-dragging") || b.hasClass("ui-resizable-resizing") ? void 0 : h("eventClick", this, a, c)
      }).hover(function (b) {
        h("eventMouseover", this, a, b)
      }, function (b) {
        h("eventMouseout", this, a, b)
      })
    }

    function o(a, b) {
      q(a, b, "show")
    }

    function p(a, b) {
      q(a, b, "hide")
    }

    function q(a, b, c) {
      var d, e = I[a._id], f = e.length;
      for (d = 0; f > d; d++)b && e[d][0] == b[0] || e[d][c]()
    }

    function r(a, b, c, e, f) {
      var g = d.mutateEvent(b, c, null);
      h("eventDrop", a, b, g.dateDelta, function () {
        g.undo(), H(b._id)
      }, e, f), H(b._id)
    }

    function s(a, b, c, e, f) {
      var g = d.mutateEvent(b, null, c);
      h("eventResize", a, b, g.durationDelta, function () {
        g.undo(), H(b._id)
      }, e, f), H(b._id)
    }

    function t(a) {
      return b.isMoment(a) && (a = a.day()), P[a]
    }

    function u() {
      return N
    }

    function v(a, b, c) {
      var d = a.clone();
      for (b = b || 1; P[(d.day() + (c ? b : 0) + 7) % 7];)d.add("days", b);
      return d
    }

    function w() {
      var a = x.apply(null, arguments), b = y(a), c = z(b);
      return c
    }

    function x(a, b) {
      var c = G.getColCnt(), d = S ? -1 : 1, e = S ? c - 1 : 0;
      "object" == typeof a && (b = a.col, a = a.row);
      var f = a * c + (b * d + e);
      return f
    }

    function y(a) {
      var b = G.start.day();
      return a += Q[b], 7 * Math.floor(a / N) + R[(a % N + N) % N] - b
    }

    function z(a) {
      return G.start.clone().add("days", a)
    }

    function A(a) {
      var b = B(a), c = C(b), d = E(c);
      return d
    }

    function B(a) {
      return a.clone().stripTime().diff(G.start, "days")
    }

    function C(a) {
      var b = G.start.day();
      return a += b, Math.floor(a / 7) * N + Q[(a % 7 + 7) % 7] - Q[b]
    }

    function E(a) {
      var b = G.getColCnt(), c = S ? -1 : 1, d = S ? b - 1 : 0, e = Math.floor(a / b), f = (a % b + b) % b * c + d;
      return {"row": e, "col": f}
    }

    function F(a, b) {
      var c = G.getRowCnt(), d = G.getColCnt(), e = [], f = B(a), g = B(b), h = +b.time();
      h && h >= M && g++, g = Math.max(g, f + 1);
      for (var i = C(f), j = C(g) - 1, k = 0; c > k; k++) {
        var l = k * d, m = l + d - 1, n = Math.max(i, l), o = Math.min(j, m);
        if (o >= n) {
          var p = E(n), q = E(o), r = [p.col, q.col].sort(), s = y(n) == f, t = y(o) + 1 == g;
          e.push({"row": k, "leftCol": r[0], "rightCol": r[1], "isStart": s, "isEnd": t})
        }
      }
      return e
    }

    var G = this;
    G.element = c, G.calendar = d, G.name = e, G.opt = f, G.trigger = h, G.isEventDraggable = i, G.isEventResizable = j, G.clearEventData = k, G.reportEventElement = l, G.triggerEventDestroy = m, G.eventElementHandlers = n, G.showEvents = o, G.hideEvents = p, G.eventDrop = r, G.eventResize = s;
    var H = d.reportEventChange, I = {}, J = [], L = d.options, M = b.duration(L.nextDayThreshold);
    G.getEventTimeText = function (a) {
      var b, c;
      return 2 === arguments.length ? (b = arguments[0], c = arguments[1]) : (b = a.start, c = a.end), c && f("displayEventEnd") ? d.formatRange(b, c, f("timeFormat")) : d.formatDate(b, f("timeFormat"))
    }, G.isHiddenDay = t, G.skipHiddenDays = v, G.getCellsPerWeek = u, G.dateToCell = A, G.dateToDayOffset = B, G.dayOffsetToCellOffset = C, G.cellOffsetToCell = E, G.cellToDate = w, G.cellToCellOffset = x, G.cellOffsetToDayOffset = y, G.dayOffsetToDate = z, G.rangeToSegments = F;
    var N, O = f("hiddenDays") || [], P = [], Q = [], R = [], S = f("isRTL");
    !function () {
      f("weekends") === !1 && O.push(0, 6);
      for (var b = 0, c = 0; 7 > b; b++)Q[b] = c, P[b] = -1 != a.inArray(b, O), P[b] || (R[c] = b, c++);
      if (N = c, !N)throw"invalid hiddenDays"
    }()
  }

  function rb() {
    function b(a, b) {
      var c = d(a, !1, !0);
      tb(c, function (a, b) {
        B(a.event, b)
      }), r(c, b), tb(c, function (a, b) {
        y("eventAfterRender", a.event, a.event, b)
      })
    }

    function c(a, b, c) {
      var e = d([a], !0, !1), f = [];
      return tb(e, function (a, d) {
        a.row === b && d.css("top", c), f.push(d[0])
      }), f
    }

    function d(b, c, d) {
      var f, i, l = S(), m = c ? a("<div/>") : l, n = e(b);
      return g(n), f = h(n), m[0].innerHTML = f, i = m.children(), c && l.append(i), j(n, i), tb(n, function (a, b) {
        a.hsides = s(b, !0)
      }), tb(n, function (a, b) {
        b.width(Math.max(0, a.outerWidth - a.hsides))
      }), tb(n, function (a, b) {
        a.outerHeight = b.outerHeight(!0)
      }), k(n, d), n
    }

    function e(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = f(a[c]);
        b.push.apply(b, d)
      }
      return b
    }

    function f(a) {
      for (var b = X(a.start, cb(a)), c = 0; c < b.length; c++)b[c].event = a;
      return b
    }

    function g(a) {
      for (var b = x("isRTL"), c = 0; c < a.length; c++) {
        var d = a[c], e = (b ? d.isEnd : d.isStart) ? Q : O, f = (b ? d.isStart : d.isEnd) ? R : P, g = e(d.leftCol), h = f(d.rightCol);
        d.left = g, d.outerWidth = h - g
      }
    }

    function h(a) {
      for (var b = "", c = 0; c < a.length; c++)b += i(a[c]);
      return b
    }

    function i(a) {
      var b = "", c = x("isRTL"), d = a.event, e = d.url, f = ["fc-event", "fc-event-hori"];
      z(d) && f.push("fc-event-draggable"), a.isStart && f.push("fc-event-start"), a.isEnd && f.push("fc-event-end"), f = f.concat(d.className), d.source && (f = f.concat(d.source.className || []));
      var g = I(d, x);
      return b += e ? "<a href='" + E(e) + "'" : "<div", b += " class='" + f.join(" ") + "' style='position:absolute;left:" + a.left + "px;" + g + "'><div class='fc-event-inner'>", !d.allDay && a.isStart && (b += "<span class='fc-event-time'>" + E(w.getEventTimeText(d)) + "</span>"), b += "<span class='fc-event-title'>" + E(d.title || "") + "</span></div>", d.allDay && a.isEnd && A(d) && (b += "<div class='ui-resizable-handle ui-resizable-" + (c ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"), b += "</" + (e ? "a" : "div") + ">"
    }

    function j(b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = b[d], f = e.event, g = c.eq(d), h = y("eventRender", f, f, g);
        h === !1 ? g.remove() : (h && h !== !0 && (h = a(h).css({
          "position": "absolute",
          "left": e.left
        }), g.replaceWith(h), g = h), e.element = g)
      }
    }

    function k(a, b) {
      var c, d = l(a), e = q(), f = [];
      if (b)for (c = 0; c < e.length; c++)e[c].height(d[c]);
      for (c = 0; c < e.length; c++)f.push(e[c].position().top);
      tb(a, function (a, b) {
        b.css("top", f[a.row] + a.top)
      })
    }

    function l(a) {
      for (var b, c = L(), d = M(), e = [], f = m(a), g = 0; c > g; g++) {
        var h = f[g], i = [];
        for (b = 0; d > b; b++)i.push(0);
        for (var j = 0; j < h.length; j++) {
          var k = h[j];
          for (k.top = C(i.slice(k.leftCol, k.rightCol + 1)), b = k.leftCol; b <= k.rightCol; b++)i[b] = k.top + k.outerHeight
        }
        e.push(C(i))
      }
      return e
    }

    function m(a) {
      var b, c, d, e = L(), f = [];
      for (b = 0; b < a.length; b++)c = a[b], d = c.row, c.element && (f[d] ? f[d].push(c) : f[d] = [c]);
      for (d = 0; e > d; d++)f[d] = n(f[d] || []);
      return f
    }

    function n(a) {
      for (var b = [], c = o(a), d = 0; d < c.length; d++)b.push.apply(b, c[d]);
      return b
    }

    function o(a) {
      a.sort(ub);
      for (var b = [], c = 0; c < a.length; c++) {
        for (var d = a[c], e = 0; e < b.length && sb(d, b[e]); e++);
        b[e] ? b[e].push(d) : b[e] = [d]
      }
      return b
    }

    function q() {
      var a, b = L(), c = [];
      for (a = 0; b > a; a++)c[a] = N(a).find("div.fc-day-content > div");
      return c
    }

    function r(a, b) {
      var c = S();
      tb(a, function (a, c, d) {
        var e = a.event;
        e._id === b ? t(e, c, a) : c[0]._fci = d
      }), p(c, a, t)
    }

    function t(a, b, c) {
      z(a) && w.draggableDayEvent(a, b, c), a.allDay && c.isEnd && A(a) && w.resizableDayEvent(a, b, c), D(a, b)
    }

    function u(a, b) {
      var c, d, e = W();
      b.draggable({
        "delay": 50,
        "opacity": x("dragOpacity"),
        "revertDuration": x("dragRevertDuration"),
        "start": function (f, g) {
          y("eventDragStart", b[0], a, f, g), H(a, b), e.start(function (e, f, g, h) {
            if (b.draggable("option", "revert", !e || !g && !h), U(), e) {
              var i = Y(f), j = Y(e);
              c = j.diff(i, "days"), d = a.start.clone().add("days", c), T(d, cb(a).add("days", c))
            } else c = 0
          }, f, "drag")
        },
        "stop": function (f, g) {
          e.stop(), U(), y("eventDragStop", b[0], a, f, g), c ? J(b[0], a, d, f, g) : (b.css("filter", ""), F(a, b))
        }
      })
    }

    function v(b, d, e) {
      var f = x("isRTL"), g = f ? "w" : "e", h = d.find(".ui-resizable-" + g), i = !1;
      G(d), d.mousedown(function (a) {
        a.preventDefault()
      }).click(function (a) {
        i && (a.preventDefault(), a.stopImmediatePropagation())
      }), h.mousedown(function (f) {
        function h(c) {
          y("eventResizeStop", d[0], b, c, {}), a("body").css("cursor", ""), m.stop(), U(), j && K(d[0], b, k, c, {}), setTimeout(function () {
            i = !1
          }, 0)
        }

        if (1 == f.which) {
          i = !0;
          var j, k, l, m = W(), n = d.css("top"), o = a.extend({}, b), p = ab(_(b.start));
          V(), a("body").css("cursor", g + "-resize").one("mouseup", h), y("eventResizeStart", d[0], b, f, {}), m.start(function (d, f) {
            if (d) {
              var h = Z(f), i = Z(d);
              if (i = Math.max(i, p), j = $(i) - $(h), k = cb(b).add("days", j), j) {
                o.end = k;
                var m = l;
                l = c(o, e.row, n), l = a(l), l.find("*").css("cursor", g + "-resize"), m && m.remove(), H(b)
              } else l && (F(b), l.remove(), l = null);
              U(), T(b.start, k)
            }
          }, f)
        }
      })
    }

    var w = this;
    w.renderDayEvents = b, w.draggableDayEvent = u, w.resizableDayEvent = v;
    var x = w.opt, y = w.trigger, z = w.isEventDraggable, A = w.isEventResizable, B = w.reportEventElement, D = w.eventElementHandlers, F = w.showEvents, H = w.hideEvents, J = w.eventDrop, K = w.eventResize, L = w.getRowCnt, M = w.getColCnt, N = w.allDayRow, O = w.colLeft, P = w.colRight, Q = w.colContentLeft, R = w.colContentRight, S = w.getDaySegmentContainer, T = w.renderDayOverlay, U = w.clearOverlays, V = w.clearSelection, W = w.getHoverListener, X = w.rangeToSegments, Y = w.cellToDate, Z = w.cellToCellOffset, $ = w.cellOffsetToDayOffset, _ = w.dateToDayOffset, ab = w.dayOffsetToCellOffset, bb = w.calendar, cb = bb.getEventEnd
  }

  function sb(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      if (d.leftCol <= a.rightCol && d.rightCol >= a.leftCol)return !0
    }
    return !1
  }

  function tb(a, b) {
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.element;
      e && b(d, e, c)
    }
  }

  function ub(a, b) {
    return b.rightCol - b.leftCol - (a.rightCol - a.leftCol) || b.event.allDay - a.event.allDay || a.event.start - b.event.start || (a.event.title || "").localeCompare(b.event.title)
  }

  function vb() {
    function b(b) {
      var c = j("unselectCancel");
      c && a(b.target).parents(c).length || d(b)
    }

    function c(a, b) {
      d(), a = i.moment(a), b = b ? i.moment(b) : l(a), m(a, b), e(a, b)
    }

    function d(a) {
      o && (o = !1, n(), k("unselect", null, a))
    }

    function e(a, b, c) {
      o = !0, k("select", null, a, b, c)
    }

    function f(b) {
      var c = h.cellToDate, f = h.getIsCellAllDay, g = h.getHoverListener(), i = h.reportDayClick;
      if (1 == b.which && j("selectable")) {
        d(b);
        var k;
        g.start(function (a, b) {
          n(), a && f(a) ? (k = [c(b), c(a)].sort(B), m(k[0], k[1].clone().add("days", 1))) : k = null
        }, b), a(document).one("mouseup", function (a) {
          g.stop(), k && (+k[0] == +k[1] && i(k[0], a), e(k[0], k[1].clone().add("days", 1), a))
        })
      }
    }

    function g() {
      a(document).off("mousedown", b)
    }

    var h = this;
    h.select = c, h.unselect = d, h.reportSelection = e, h.daySelectionMousedown = f, h.selectionManagerDestroy = g;
    var i = h.calendar, j = h.opt, k = h.trigger, l = h.defaultSelectionEnd, m = h.renderSelection, n = h.clearSelection, o = !1;
    j("selectable") && j("unselectAuto") && a(document).on("mousedown", b)
  }

  function wb() {
    function b(b, c) {
      var d = f.shift();
      return d || (d = a("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), d[0].parentNode != c[0] && d.appendTo(c), e.push(d.css(b).show()), d
    }

    function c() {
      for (var a; a = e.shift();)f.push(a.hide().unbind())
    }

    var d = this;
    d.renderOverlay = b, d.clearOverlays = c;
    var e = [], f = []
  }

  function xb(a) {
    var b, c, d = this;
    d.build = function () {
      b = [], c = [], a(b, c)
    }, d.cell = function (a, d) {
      var e, f = b.length, g = c.length, h = -1, i = -1;
      for (e = 0; f > e; e++)if (d >= b[e][0] && d < b[e][1]) {
        h = e;
        break
      }
      for (e = 0; g > e; e++)if (a >= c[e][0] && a < c[e][1]) {
        i = e;
        break
      }
      return h >= 0 && i >= 0 ? {"row": h, "col": i} : null
    }, d.rect = function (a, d, e, f, g) {
      var h = g.offset();
      return {"top": b[a][0] - h.top, "left": c[d][0] - h.left, "width": c[f][1] - c[d][0], "height": b[e][1] - b[a][0]}
    }
  }

  function yb(b) {
    function c(a) {
      zb(a);
      var c = b.cell(a.pageX, a.pageY);
      (Boolean(c) !== Boolean(g) || c && (c.row != g.row || c.col != g.col)) && (c ? (f || (f = c), e(c, f, c.row - f.row, c.col - f.col)) : e(c, f), g = c)
    }

    var d, e, f, g, h = this;
    h.start = function (h, i, j) {
      e = h, f = g = null, b.build(), c(i), d = j || "mousemove", a(document).bind(d, c)
    }, h.stop = function () {
      return a(document).unbind(d, c), g
    }
  }

  function zb(a) {
    void 0 === a.pageX && (a.pageX = a.originalEvent.pageX, a.pageY = a.originalEvent.pageY)
  }

  function Ab(a) {
    function b(b) {
      return d[b] = d[b] || a(b)
    }

    var c = this, d = {}, e = {}, f = {};
    c.left = function (a) {
      return e[a] = void 0 === e[a] ? b(a).position().left : e[a]
    }, c.right = function (a) {
      return f[a] = void 0 === f[a] ? c.left(a) + b(a).width() : f[a]
    }, c.clear = function () {
      d = {}, e = {}, f = {}
    }
  }

  var Bb = {
    "lang": "en",
    "defaultTimedEventDuration": "02:00:00",
    "defaultAllDayEventDuration": {"days": 1},
    "forceEventDuration": !1,
    "nextDayThreshold": "09:00:00",
    "defaultView": "month",
    "aspectRatio": 1.35,
    "header": {"left": "title", "center": "", "right": "today prev,next"},
    "weekends": !0,
    "weekNumbers": !1,
    "weekNumberTitle": "W",
    "weekNumberCalculation": "local",
    "lazyFetching": !0,
    "startParam": "start",
    "endParam": "end",
    "timezoneParam": "timezone",
    "timezone": !1,
    "titleFormat": {"month": "MMMM YYYY", "week": "ll", "day": "LL"},
    "columnFormat": {"month": "ddd", "week": d, "day": "dddd"},
    "timeFormat": {"default": c},
    "displayEventEnd": {"month": !1, "basicWeek": !1, "default": !0},
    "isRTL": !1,
    "defaultButtonText": {
      "prev": "prev",
      "next": "next",
      "prevYear": "prev year",
      "nextYear": "next year",
      "today": "today",
      "month": "month",
      "week": "week",
      "day": "day"
    },
    "buttonIcons": {
      "prev": "left-single-arrow",
      "next": "right-single-arrow",
      "prevYear": "left-double-arrow",
      "nextYear": "right-double-arrow"
    },
    "theme": !1,
    "themeButtonIcons": {
      "prev": "circle-triangle-w",
      "next": "circle-triangle-e",
      "prevYear": "seek-prev",
      "nextYear": "seek-next"
    },
    "unselectAuto": !0,
    "dropAccept": "*",
    "handleWindowResize": !0,
    "windowResizeDelay": 200
  }, Cb = {"en": {"columnFormat": {"week": "ddd M/D"}}}, Db = {
    "header": {
      "left": "next,prev today",
      "center": "",
      "right": "title"
    },
    "buttonIcons": {
      "prev": "right-single-arrow",
      "next": "left-single-arrow",
      "prevYear": "right-double-arrow",
      "nextYear": "left-double-arrow"
    },
    "themeButtonIcons": {
      "prev": "circle-triangle-e",
      "next": "circle-triangle-w",
      "nextYear": "seek-prev",
      "prevYear": "seek-next"
    }
  }, Eb = a.fullCalendar = {"version": "2.0.2"}, Fb = Eb.views = {};
  a.fn.fullCalendar = function (b) {
    var c = Array.prototype.slice.call(arguments, 1), d = this;
    return this.each(function (e, f) {
      var g, i = a(f), j = i.data("fullCalendar");
      "string" == typeof b ? j && a.isFunction(j[b]) && (g = j[b].apply(j, c), e || (d = g), "destroy" === b && i.removeData("fullCalendar")) : j || (j = new h(i, b), i.data("fullCalendar", j), j.render())
    }), d
  }, Eb.langs = Cb, Eb.datepickerLang = function (b, c, d) {
    var e = Cb[b];
    e || (e = Cb[b] = {}), f(e, {
      "isRTL": d.isRTL,
      "weekNumberTitle": d.weekHeader,
      "titleFormat": {"month": d.showMonthAfterYear ? "YYYY[" + d.yearSuffix + "] MMMM" : "MMMM YYYY[" + d.yearSuffix + "]"},
      "defaultButtonText": {"prev": F(d.prevText), "next": F(d.nextText), "today": F(d.currentText)}
    }), a.datepicker && (a.datepicker.regional[c] = a.datepicker.regional[b] = d, a.datepicker.regional.en = a.datepicker.regional[""], a.datepicker.setDefaults(d))
  }, Eb.lang = function (a, b) {
    var c;
    b && (c = Cb[a], c || (c = Cb[a] = {}), f(c, b || {})), Bb.lang = a
  }, Eb.sourceNormalizers = [], Eb.sourceFetchers = [];
  var Gb = {"dataType": "json", "cache": !1}, Hb = 1;
  Eb.applyAll = J;
  var Ib = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Jb = /^\s*\d{4}-\d\d$/, Kb = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
  Eb.moment = function () {
    return L(arguments)
  }, Eb.moment.utc = function () {
    var a = L(arguments, !0);
    return a.hasTime() && a.utc(), a
  }, Eb.moment.parseZone = function () {
    return L(arguments, !0, !0)
  }, M.prototype = l(b.fn), M.prototype.clone = function () {
    return L([this])
  }, M.prototype.time = function (a) {
    if (null == a)return b.duration({
      "hours": this.hours(),
      "minutes": this.minutes(),
      "seconds": this.seconds(),
      "milliseconds": this.milliseconds()
    });
    delete this._ambigTime, b.isDuration(a) || b.isMoment(a) || (a = b.duration(a));
    var c = 0;
    return b.isDuration(a) && (c = 24 * Math.floor(a.asDays())), this.hours(c + a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())
  }, M.prototype.stripTime = function () {
    var a = this.toArray();
    return b.fn.utc.call(this), this.year(a[0]).month(a[1]).date(a[2]).hours(0).minutes(0).seconds(0).milliseconds(0), this._ambigTime = !0, this._ambigZone = !0, this
  }, M.prototype.hasTime = function () {
    return !this._ambigTime
  }, M.prototype.stripZone = function () {
    var a = this.toArray(), c = this._ambigTime;
    return b.fn.utc.call(this), this.year(a[0]).month(a[1]).date(a[2]).hours(a[3]).minutes(a[4]).seconds(a[5]).milliseconds(a[6]), c && (this._ambigTime = !0), this._ambigZone = !0, this
  }, M.prototype.hasZone = function () {
    return !this._ambigZone
  }, M.prototype.zone = function (a) {
    return null != a && (delete this._ambigTime, delete this._ambigZone), b.fn.zone.apply(this, arguments)
  }, M.prototype.local = function () {
    var a = this.toArray(), c = this._ambigZone;
    return delete this._ambigTime, delete this._ambigZone, b.fn.local.apply(this, arguments), c && this.year(a[0]).month(a[1]).date(a[2]).hours(a[3]).minutes(a[4]).seconds(a[5]).milliseconds(a[6]), this
  }, M.prototype.utc = function () {
    return delete this._ambigTime, delete this._ambigZone, b.fn.utc.apply(this, arguments)
  }, M.prototype.format = function () {
    return arguments[0] ? P(this, arguments[0]) : this._ambigTime ? O(this, "YYYY-MM-DD") : this._ambigZone ? O(this, "YYYY-MM-DD[T]HH:mm:ss") : O(this)
  }, M.prototype.toISOString = function () {
    return this._ambigTime ? O(this, "YYYY-MM-DD") : this._ambigZone ? O(this, "YYYY-MM-DD[T]HH:mm:ss") : b.fn.toISOString.apply(this, arguments)
  }, M.prototype.isWithin = function (a, b) {
    var c = N([this, a, b]);
    return c[0] >= c[1] && c[0] < c[2]
  }, a.each(["isBefore", "isAfter", "isSame"], function (a, c) {
    M.prototype[c] = function (a, d) {
      var e = N([this, a]);
      return b.fn[c].call(e[0], e[1], d)
    }
  });
  var Lb = {
    "t": function (a) {
      return O(a, "a").charAt(0)
    }, "T": function (a) {
      return O(a, "A").charAt(0)
    }
  };
  Eb.formatRange = S;
  var Mb = {
    "Y": "year",
    "M": "month",
    "D": "day",
    "d": "day",
    "A": "second",
    "a": "second",
    "T": "second",
    "t": "second",
    "H": "second",
    "h": "second",
    "m": "second",
    "s": "second"
  }, Nb = {};
  Fb.month = X, Fb.basicWeek = Y, Fb.basicDay = Z, e({"weekMode": "fixed"}), Fb.agendaWeek = ab, Fb.agendaDay = bb, e({
    "allDaySlot": !0,
    "allDayText": "all-day",
    "scrollTime": "06:00:00",
    "slotDuration": "00:30:00",
    "axisFormat": cb,
    "timeFormat": {"agenda": db},
    "dragOpacity": {"agenda": .5},
    "minTime": "00:00:00",
    "maxTime": "24:00:00",
    "slotEventOverlap": !0
  })
});
/*! SmartAdmin - v1.5 - 2014-10-16 */
function SmartUnLoading() {
  $(".divMessageBox").fadeOut(300, function () {
    $(this).remove()
  }), $(".LoadingBoxContainer").fadeOut(300, function () {
    $(this).remove()
  })
}
function getInternetExplorerVersion() {
  var a = -1;
  if ("Microsoft Internet Explorer" == navigator.appName) {
    var b = navigator.userAgent, c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    null != c.exec(b) && (a = parseFloat(RegExp.$1))
  }
  return a
}
function checkVersion() {
  var a = "You're not using Windows Internet Explorer.", b = getInternetExplorerVersion();
  b > -1 && (a = b >= 8 ? "You're using a recent copy of Windows Internet Explorer." : "You should upgrade your copy of Windows Internet Explorer."), alert(a)
}
function isIE8orlower() {
  var a = "0", b = getInternetExplorerVersion();
  return b > -1 && (a = b >= 9 ? 0 : 1), a
}
jQuery(document).ready(function () {
  $("body").append("<div id='divSmallBoxes'></div>"), $("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>")
});
var ExistMsg = 0, SmartMSGboxCount = 0, PrevTop = 0;
$.SmartMessageBox = function (a, b) {
  var c, d;
  a = $.extend({
    "title": "",
    "content": "",
    "NormalButton": void 0,
    "ActiveButton": void 0,
    "buttons": void 0,
    "input": void 0,
    "inputValue": void 0,
    "placeholder": "",
    "options": void 0
  }, a);
  var e = 0;
  if (e = 1, 0 == isIE8orlower() && $.sound_on) {
    var f = document.createElement("audio");
    f.setAttribute("src", $.sound_path + "messagebox.mp3"), f.addEventListener("load", function () {
      f.play()
    }, !0), f.pause(), f.play()
  }
  SmartMSGboxCount += 1, 0 == ExistMsg && (ExistMsg = 1, c = "<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>", $("body").append(c), 1 == isIE8orlower() && $("#MsgBoxBack").addClass("MessageIE"));
  var g = "", h = 0;
  if (void 0 != a.input)switch (h = 1, a.input = a.input.toLowerCase(), a.input) {
    case"text":
      a.inputValue = "string" === $.type(a.inputValue) ? a.inputValue.replace(/'/g, "&#x27;") : a.inputValue, g = "<input class='form-control' type='" + a.input + "' id='txt" + SmartMSGboxCount + "' placeholder='" + a.placeholder + "' value='" + a.inputValue + "'/><br/><br/>";
      break;
    case"password":
      g = "<input class='form-control' type='" + a.input + "' id='txt" + SmartMSGboxCount + "' placeholder='" + a.placeholder + "'/><br/><br/>";
      break;
    case"select":
      if (void 0 == a.options)alert("For this type of input, the options parameter is required."); else {
        g = "<select class='form-control' id='txt" + SmartMSGboxCount + "'>";
        for (var i = 0; i <= a.options.length - 1; i++)"[" == a.options[i] ? j = "" : "]" == a.options[i] ? (k += 1, j = "<option>" + j + "</option>", g += j) : j += a.options[i];
        g += "</select>"
      }
      break;
    default:
      alert("That type of input is not handled yet")
  }
  d = "<div class='MessageBoxContainer animated fadeIn fast' id='Msg" + SmartMSGboxCount + "'>", d += "<div class='MessageBoxMiddle'>", d += "<span class='MsgTitle'>" + a.title + "</span class='MsgTitle'>", d += "<p class='pText'>" + a.content + "</p>", d += g, d += "<div class='MessageBoxButtonSection'>", void 0 == a.buttons && (a.buttons = "[Accept]"), a.buttons = $.trim(a.buttons), a.buttons = a.buttons.split("");
  var j = "", k = 0;
  void 0 == a.NormalButton && (a.NormalButton = "#232323"), void 0 == a.ActiveButton && (a.ActiveButton = "#ed145b");
  for (var i = 0; i <= a.buttons.length - 1; i++)"[" == a.buttons[i] ? j = "" : "]" == a.buttons[i] ? (k += 1, j = "<button id='bot" + k + "-Msg" + SmartMSGboxCount + "' class='btn btn-default btn-sm botTempo'> " + j + "</button>", d += j) : j += a.buttons[i];
  d += "</div>", d += "</div>", d += "</div>", SmartMSGboxCount > 1 && ($(".MessageBoxContainer").hide(), $(".MessageBoxContainer").css("z-index", 99999)), $(".divMessageBox").append(d), 1 == h && $("#txt" + SmartMSGboxCount).focus(), $(".botTempo").hover(function () {
    $(this).attr("id")
  }, function () {
    $(this).attr("id")
  }), $(".botTempo").click(function () {
    var a = $(this).attr("id"), c = a.substr(a.indexOf("-") + 1), d = $.trim($(this).text());
    if (1 == h) {
      if ("function" == typeof b) {
        var e = c.replace("Msg", ""), f = $("#txt" + e).val();
        b && b(d, f)
      }
    } else"function" == typeof b && b && b(d);
    $("#" + c).addClass("animated fadeOut fast"), SmartMSGboxCount -= 1, 0 == SmartMSGboxCount && $("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function () {
      ExistMsg = 0, $(this).remove()
    })
  })
};
var BigBoxes = 0;
$.bigBox = function (a, b) {
  var c;
  if (a = $.extend({
      "title": "",
      "content": "",
      "icon": void 0,
      "number": void 0,
      "color": void 0,
      "sound": $.sound_on,
      "sound_file": "bigbox",
      "timeout": void 0,
      "colortime": 1500,
      "colors": void 0
    }, a), a.sound && 0 == isIE8orlower()) {
    var d = document.createElement("audio");
    navigator.userAgent.match("Firefox/") ? d.setAttribute("src", $.sound_path + a.sound_file + ".ogg") : d.setAttribute("src", $.sound_path + a.sound_file + ".mp3"), d.addEventListener("load", function () {
      d.play()
    }, !0), d.pause(), d.play()
  }
  BigBoxes += 1, c = "<div id='bigBox" + BigBoxes + "' class='bigBox animated fadeIn fast'><div id='bigBoxColor" + BigBoxes + "'><i class='botClose fa fa-times' id='botClose" + BigBoxes + "'></i>", c += "<span>" + a.title + "</span>", c += "<p>" + a.content + "</p>", c += "<div class='bigboxicon'>", void 0 == a.icon && (a.icon = "fa fa-cloud"), c += "<i class='" + a.icon + "'></i>", c += "</div>", c += "<div class='bigboxnumber'>", void 0 != a.number && (c += a.number), c += "</div></div>", c += "</div>", $("#divbigBoxes").append(c), void 0 == a.color && (a.color = "#004d60"), $("#bigBox" + BigBoxes).css("background-color", a.color), $("#divMiniIcons").append("<div id='miniIcon" + BigBoxes + "' class='cajita animated fadeIn' style='background-color: " + a.color + ";'><i class='" + a.icon + "'/></i></div>"), $("#miniIcon" + BigBoxes).bind("click", function () {
    var a = $(this).attr("id"), b = a.replace("miniIcon", "bigBox"), c = a.replace("miniIcon", "bigBoxColor");
    $(".cajita").each(function () {
      var a = $(this).attr("id"), b = a.replace("miniIcon", "bigBox");
      $("#" + b).css("z-index", 9998)
    }), $("#" + b).css("z-index", 9999), $("#" + c).removeClass("animated fadeIn").delay(1).queue(function () {
      $(this).show(), $(this).addClass("animated fadeIn"), $(this).clearQueue()
    })
  });
  var e, f = $("#botClose" + BigBoxes), g = $("#bigBox" + BigBoxes), h = $("#miniIcon" + BigBoxes);
  if (void 0 != a.colors && a.colors.length > 0 && (f.attr("colorcount", "0"), e = setInterval(function () {
      var b = f.attr("colorcount");
      f.animate({"backgroundColor": a.colors[b].color}), g.animate({"backgroundColor": a.colors[b].color}), h.animate({"backgroundColor": a.colors[b].color}), b < a.colors.length - 1 ? f.attr("colorcount", 1 * b + 1) : f.attr("colorcount", 0)
    }, a.colortime)), f.bind("click", function () {
      clearInterval(e), "function" == typeof b && b && b();
      var a = $(this).attr("id"), c = a.replace("botClose", "bigBox"), d = a.replace("botClose", "miniIcon");
      $("#" + c).removeClass("fadeIn fast"), $("#" + c).addClass("fadeOut fast").delay(300).queue(function () {
        $(this).clearQueue(), $(this).remove()
      }), $("#" + d).removeClass("fadeIn fast"), $("#" + d).addClass("fadeOut fast").delay(300).queue(function () {
        $(this).clearQueue(), $(this).remove()
      })
    }), void 0 != a.timeout) {
    var i = BigBoxes;
    setTimeout(function () {
      clearInterval(e), $("#bigBox" + i).removeClass("fadeIn fast"), $("#bigBox" + i).addClass("fadeOut fast").delay(300).queue(function () {
        $(this).clearQueue(), $(this).remove()
      }), $("#miniIcon" + i).removeClass("fadeIn fast"), $("#miniIcon" + i).addClass("fadeOut fast").delay(300).queue(function () {
        $(this).clearQueue(), $(this).remove()
      })
    }, a.timeout)
  }
};
var SmallBoxes = 0, SmallCount = 0, SmallBoxesAnchos = 0;
$.smallBox = function (a, b) {
  var c;
  if (a = $.extend({
      "title": "",
      "content": "",
      "icon": void 0,
      "iconSmall": void 0,
      "sound": $.sound_on,
      "sound_file": "smallbox",
      "color": void 0,
      "timeout": void 0,
      "colortime": 1500,
      "colors": void 0
    }, a), a.sound && 0 == isIE8orlower()) {
    var d = document.createElement("audio");
    navigator.userAgent.match("Firefox/") ? d.setAttribute("src", $.sound_path + a.sound_file + ".ogg") : d.setAttribute("src", $.sound_path + a.sound_file + ".mp3"), d.addEventListener("load", function () {
      d.play()
    }, !0), d.pause(), d.play()
  }
  SmallBoxes += 1, c = "";
  var e = "", f = "smallbox" + SmallBoxes;
  if (e = void 0 == a.iconSmall ? "<div class='miniIcono'></div>" : "<div class='miniIcono'><i class='miniPic " + a.iconSmall + "'></i></div>", c = void 0 == a.icon ? "<div id='smallbox" + SmallBoxes + "' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>" + a.title + "</span><p>" + a.content + "</p></div>" + e + "</div>" : "<div id='smallbox" + SmallBoxes + "' class='SmallBox animated fadeInRight fast'><div class='foto'><i class='" + a.icon + "'></i></div><div class='textoFoto'><span>" + a.title + "</span><p>" + a.content + "</p></div>" + e + "</div>", 1 == SmallBoxes)$("#divSmallBoxes").append(c), SmallBoxesAnchos = $("#smallbox" + SmallBoxes).height() + 40; else {
    var g = $(".SmallBox").size();
    0 == g ? ($("#divSmallBoxes").append(c), SmallBoxesAnchos = $("#smallbox" + SmallBoxes).height() + 40) : ($("#divSmallBoxes").append(c), $("#smallbox" + SmallBoxes).css("top", SmallBoxesAnchos), SmallBoxesAnchos = SmallBoxesAnchos + $("#smallbox" + SmallBoxes).height() + 20, $(".SmallBox").each(function (a) {
      0 == a ? ($(this).css("top", 20), heightPrev = $(this).height() + 40, SmallBoxesAnchos = $(this).height() + 40) : ($(this).css("top", heightPrev), heightPrev = heightPrev + $(this).height() + 20, SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20)
    }))
  }
  var h = $("#smallbox" + SmallBoxes);
  void 0 == a.color ? h.css("background-color", "#004d60") : h.css("background-color", a.color);
  var i;
  void 0 != a.colors && a.colors.length > 0 && (h.attr("colorcount", "0"), i = setInterval(function () {
    var b = h.attr("colorcount");
    h.animate({"backgroundColor": a.colors[b].color}), b < a.colors.length - 1 ? h.attr("colorcount", 1 * b + 1) : h.attr("colorcount", 0)
  }, a.colortime)), void 0 != a.timeout && setTimeout(function () {
    clearInterval(i);
    {
      var a = $(this).height() + 20;
      $("#" + f).css("top")
    }
    0 != $("#" + f + ":hover").length ? $("#" + f).on("mouseleave", function () {
      SmallBoxesAnchos -= a, $("#" + f).remove(), "function" == typeof b && b && b();
      var c = 0;
      $(".SmallBox").each(function (a) {
        0 == a ? ($(this).animate({"top": 20}, 300), c = $(this).height() + 40, SmallBoxesAnchos = $(this).height() + 40) : ($(this).animate({"top": c}, 350), c = c + $(this).height() + 20, SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20)
      })
    }) : (clearInterval(i), SmallBoxesAnchos -= a, "function" == typeof b && b && b(), $("#" + f).removeClass().addClass("SmallBox").animate({"opacity": 0}, 300, function () {
      $(this).remove();
      var a = 0;
      $(".SmallBox").each(function (b) {
        0 == b ? ($(this).animate({"top": 20}, 300), a = $(this).height() + 40, SmallBoxesAnchos = $(this).height() + 40) : ($(this).animate({"top": a}), a = a + $(this).height() + 20, SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20)
      })
    }))
  }, a.timeout), $("#smallbox" + SmallBoxes).bind("click", function () {
    clearInterval(i), "function" == typeof b && b && b();
    {
      var a = $(this).height() + 20;
      $(this).attr("id"), $(this).css("top")
    }
    SmallBoxesAnchos -= a, $(this).removeClass().addClass("SmallBox").animate({"opacity": 0}, 300, function () {
      $(this).remove();
      var a = 0;
      $(".SmallBox").each(function (b) {
        0 == b ? ($(this).animate({"top": 20}, 300), a = $(this).height() + 40, SmallBoxesAnchos = $(this).height() + 40) : ($(this).animate({"top": a}, 350), a = a + $(this).height() + 20, SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20)
      })
    })
  })
};
/*! SmartAdmin - v1.5 - 2014-10-16 */
!function (a, b, c, d) {
  function e(b, c) {
    this.obj = a(b), this.o = a.extend({}, a.fn[f].defaults, c), this.objId = this.obj.attr("id"), this.pwCtrls = ".jarviswidget-ctrls", this.widget = this.obj.find(this.o.widgets), this.toggleClass = this.o.toggleClass.split("|"), this.editClass = this.o.editClass.split("|"), this.fullscreenClass = this.o.fullscreenClass.split("|"), this.customClass = this.o.customClass.split("|"), this.storage = {"enabled": this.o.localStorage}, this.initialized = !1, this.init()
  }

  var f = "jarvisWidgets", g = ("ontouchstart"in b || b.DocumentTouch && c instanceof DocumentTouch ? "touchstart" : "click") + "." + f;
  e.prototype = {
    "_runLoaderWidget": function (a) {
      var b = this;
      b.o.indicator === !0 && a.parents(b.o.widgets).find(".jarviswidget-loader:first").stop(!0, !0).fadeIn(100).delay(b.o.indicatorTime).fadeOut(100)
    }, "_getPastTimestamp": function (a) {
      var b = this, c = new Date(a), d = c.getMonth() + 1, e = c.getDate(), f = c.getFullYear(), g = c.getHours(), h = c.getMinutes(), i = c.getUTCSeconds();
      10 > d && (d = "0" + d), 10 > e && (e = "0" + e), 10 > g && (g = "0" + g), 10 > h && (h = "0" + h), 10 > i && (i = "0" + i);
      var j = b.o.timestampFormat.replace(/%d%/g, e).replace(/%m%/g, d).replace(/%y%/g, f).replace(/%h%/g, g).replace(/%i%/g, h).replace(/%s%/g, i);
      return j
    }, "_loadAjaxFile": function (b, c, d) {
      var e = this;
      b.find(".widget-body").load(c, function (c, d, f) {
        var g = a(this);
        if ("error" == d && g.html('<h4 class="alert alert-danger">' + e.o.labelError + "<b> " + f.status + " " + f.statusText + "</b></h4>"), "success" == d) {
          var h = b.find(e.o.timestampPlaceholder);
          h.length && h.html(e._getPastTimestamp(new Date)), "function" == typeof e.o.afterLoad && e.o.afterLoad.call(this, b)
        }
        e = null
      }), this._runLoaderWidget(d)
    }, "_loadKeys": function () {
      var a = this;
      if (a.o.ajaxnav === !0) {
        var b = location.hash.replace(/^#/, "");
        a.storage.keySettings = "Plugin_settings_" + b + "_" + a.objId, a.storage.keyPosition = "Plugin_position_" + b + "_" + a.objId
      } else if (a.initialized === !1) {
        var b = a.o.pageKey || location.pathname;
        a.storage.keySettings = "jarvisWidgets_settings_" + b + "_" + a.objId, a.storage.keyPosition = "jarvisWidgets_position_" + b + "_" + a.objId
      }
    }, "_saveSettingsWidget": function () {
      var b = this, c = b.storage;
      b._loadKeys();
      var d = b.obj.find(b.o.widgets).map(function () {
        var b = {};
        return b.id = a(this).attr("id"), b.style = a(this).attr("data-widget-attstyle"), b.title = a(this).children("header").children("h2").text(), b.hidden = "none" == a(this).css("display") ? 1 : 0, b.collapsed = a(this).hasClass("jarviswidget-collapsed") ? 1 : 0, b
      }).get(), e = JSON.stringify({"widget": d});
      c.enabled && c.getKeySettings != e && (localStorage.setItem(c.keySettings, e), c.getKeySettings = e), "function" == typeof b.o.onSave && b.o.onSave.call(this, null, e, c.keySettings)
    }, "_savePositionWidget": function () {
      var b = this, c = b.storage;
      b._loadKeys();
      var d = b.obj.find(b.o.grid + ".sortable-grid").map(function () {
        var c = a(this).children(b.o.widgets).map(function () {
          return {"id": a(this).attr("id")}
        }).get();
        return {"section": c}
      }).get(), e = JSON.stringify({"grid": d});
      c.enabled && c.getKeyPosition != e && (localStorage.setItem(c.keyPosition, e), c.getKeyPosition = e), "function" == typeof b.o.onSave && b.o.onSave.call(this, e, c.keyPosition)
    }, "init": function () {
      var b = this;
      if (!b.initialized) {
        if (b._initStorage(b.storage), a("#" + b.objId).length || alert("It looks like your using a class instead of an ID, dont do that!"), b.o.rtl === !0 && a("body").addClass("rtl"), a(b.o.grid).each(function () {
            a(this).find(b.o.widgets).length && a(this).addClass("sortable-grid")
          }), b.storage.enabled && b.storage.getKeyPosition) {
          var c = JSON.parse(b.storage.getKeyPosition);
          for (var e in c.grid) {
            var h = b.obj.find(b.o.grid + ".sortable-grid").eq(e);
            for (var i in c.grid[e].section)h.append(a("#" + c.grid[e].section[i].id))
          }
        }
        if (b.storage.enabled && b.storage.getKeySettings) {
          var j = JSON.parse(b.storage.getKeySettings);
          for (var e in j.widget) {
            var k = a("#" + j.widget[e].id);
            j.widget[e].style && k.removeClassPrefix("jarviswidget-color-").addClass(j.widget[e].style).attr("data-widget-attstyle", "" + j.widget[e].style), 1 == j.widget[e].hidden ? k.hide(1) : k.show(1).removeAttr("data-widget-hidden"), 1 == j.widget[e].collapsed && k.addClass("jarviswidget-collapsed").children("div").hide(1), k.children("header").children("h2").text() != j.widget[e].title && k.children("header").children("h2").text(j.widget[e].title)
          }
        }
        if (b.widget.each(function () {
            var c, e, f, g, h, i, j, k, l = a(this), m = a(this).children("header");
            if (!m.parent().attr("role")) {
              l.data("widget-hidden") === !0 && l.hide(), l.data("widget-collapsed") === !0 && l.addClass("jarviswidget-collapsed").children("div").hide(), c = b.o.customButton === !0 && l.data("widget-custombutton") === d && 0 !== b.customClass[0].length ? '<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="' + b.customClass[0] + '"></i></a>' : "", e = b.o.deleteButton === !0 && l.data("widget-deletebutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="' + b.o.deleteClass + '"></i></a>' : "", f = b.o.editButton === !0 && l.data("widget-editbutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="' + b.editClass[0] + '"></i></a>' : "", g = b.o.fullscreenButton === !0 && l.data("widget-fullscreenbutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="' + b.fullscreenClass[0] + '"></i></a>' : "", b.o.colorButton === !0 && l.data("widget-colorbutton") === d ? (h = '<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>', m.prepend('<div class="widget-toolbar">' + h + "</div>")) : h = "", b.o.toggleButton === !0 && l.data("widget-togglebutton") === d ? (j = l.data("widget-collapsed") === !0 || l.hasClass("jarviswidget-collapsed") ? b.toggleClass[1] : b.toggleClass[0], i = '<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="' + j + '"></i></a>') : i = "", k = b.o.refreshButton === !0 && l.data("widget-refreshbutton") !== !1 && l.data("widget-load") ? '<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="' + b.o.refreshButtonClass + '"></i></a>' : "";
              var n = b.o.buttonOrder.replace(/%refresh%/g, k).replace(/%delete%/g, e).replace(/%custom%/g, c).replace(/%fullscreen%/g, g).replace(/%edit%/g, f).replace(/%toggle%/g, i);
              ("" !== k || "" !== e || "" !== c || "" !== g || "" !== f || "" !== i) && m.prepend('<div class="jarviswidget-ctrls">' + n + "</div>"), b.o.sortable === !0 && l.data("widget-sortable") === d && l.addClass("jarviswidget-sortable"), l.find(b.o.editPlaceholder).length && l.find(b.o.editPlaceholder).find("input").val(a.trim(m.children("h2").text())), m.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'), l.attr("role", "widget").children("div").attr("role", "content").prev("header").attr("role", "heading").children("div").attr("role", "menu")
            }
          }), b.o.buttonsHidden === !0 && a(b.o.pwCtrls).hide(), a(".jarviswidget header [rel=tooltip]").tooltip(), b.obj.find("[data-widget-load]").each(function () {
            {
              var c = a(this), d = c.children(), e = c.data("widget-load"), f = 1e3 * c.data("widget-refresh");
              c.children()
            }
            c.find(".jarviswidget-ajax-placeholder").length || (c.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">' + b.o.loadingLabel + "</div>"), c.data("widget-refresh") > 0 ? (b._loadAjaxFile(c, e, d), a.intervalArr.push(setInterval(function () {
              b._loadAjaxFile(c, e, d)
            }, f))) : b._loadAjaxFile(c, e, d))
          }), b.o.sortable === !0 && jQuery.ui) {
          var l = b.obj.find(b.o.grid + ".sortable-grid").not("[data-widget-excludegrid]");
          l.sortable({
            "items": l.find(b.o.widgets + ".jarviswidget-sortable"),
            "connectWith": l,
            "placeholder": b.o.placeholderClass,
            "cursor": "move",
            "revert": !0,
            "opacity": b.o.opacity,
            "delay": 200,
            "cancel": ".button-icon, #jarviswidget-fullscreen-mode > div",
            "zIndex": 1e4,
            "handle": b.o.dragHandle,
            "forcePlaceholderSize": !0,
            "forceHelperSize": !0,
            "update": function (a, c) {
              b._runLoaderWidget(c.item.children()), b._savePositionWidget(), "function" == typeof b.o.onChange && b.o.onChange.call(this, c.item)
            }
          })
        }
        b.o.buttonsHidden === !0 && b.widget.children("header").on("mouseenter." + f, function () {
          a(this).children(b.o.pwCtrls).stop(!0, !0).fadeTo(100, 1)
        }).on("mouseleave." + f, function () {
          a(this).children(b.o.pwCtrls).stop(!0, !0).fadeTo(100, 0)
        }), b._clickEvents(), b.storage.enabled && (a(b.o.deleteSettingsKey).on(g, this, function (a) {
          var c = confirm(b.o.settingsKeyLabel);
          c && localStorage.removeItem(keySettings), a.preventDefault()
        }), a(b.o.deletePositionKey).on(g, this, function (a) {
          var c = confirm(b.o.positionKeyLabel);
          c && localStorage.removeItem(keyPosition), a.preventDefault()
        })), initialized = !0
      }
    }, "_initStorage": function (a) {
      a.enabled = a.enabled && !!function () {
          var a, b = +new Date;
          try {
            return localStorage.setItem(b, b), a = localStorage.getItem(b) == b, localStorage.removeItem(b), a
          } catch (c) {
          }
        }(), this._loadKeys(), a.enabled && (a.getKeySettings = localStorage.getItem(a.keySettings), a.getKeyPosition = localStorage.getItem(a.keyPosition))
    }, "_clickEvents": function () {
      function c() {
        if (a("#jarviswidget-fullscreen-mode").length) {
          var c = a(b).height(), e = a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("header").height();
          a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("div").height(c - e - 15)
        }
      }

      var d = this, e = d.widget.children("header");
      e.on(g, ".jarviswidget-toggle-btn", function (b) {
        var c = a(this), e = c.parents(d.o.widgets);
        d._runLoaderWidget(c), e.hasClass("jarviswidget-collapsed") ? c.children().removeClass(d.toggleClass[1]).addClass(d.toggleClass[0]).parents(d.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(d.o.toggleSpeed, function () {
          d._saveSettingsWidget()
        }) : c.children().removeClass(d.toggleClass[0]).addClass(d.toggleClass[1]).parents(d.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(d.o.toggleSpeed, function () {
          d._saveSettingsWidget()
        }), "function" == typeof d.o.onToggle && d.o.onToggle.call(this, e), b.preventDefault()
      }), e.on(g, ".jarviswidget-fullscreen-btn", function (b) {
        var e = a(this).parents(d.o.widgets), f = e.children("div");
        d._runLoaderWidget(a(this)), a("#jarviswidget-fullscreen-mode").length ? (a(".nooverflow").removeClass("nooverflow"), e.unwrap("<div>").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[1]).addClass(d.fullscreenClass[0]).parents(d.pwCtrls).children("a").show(), f.hasClass("jarviswidget-visible") && f.hide().removeClass("jarviswidget-visible")) : (a("body").addClass("nooverflow"), e.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[0]).addClass(d.fullscreenClass[1]).parents(d.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(), f.is(":hidden") && f.show().addClass("jarviswidget-visible")), c(), "function" == typeof d.o.onFullscreen && d.o.onFullscreen.call(this, e), b.preventDefault()
      }), a(b).on("resize." + f, function () {
        c()
      }), e.on(g, ".jarviswidget-edit-btn", function (b) {
        var c = a(this).parents(d.o.widgets);
        d._runLoaderWidget(a(this)), c.find(d.o.editPlaceholder).is(":visible") ? a(this).children().removeClass(d.editClass[1]).addClass(d.editClass[0]).parents(d.o.widgets).find(d.o.editPlaceholder).slideUp(d.o.editSpeed, function () {
          d._saveSettingsWidget()
        }) : a(this).children().removeClass(d.editClass[0]).addClass(d.editClass[1]).parents(d.o.widgets).find(d.o.editPlaceholder).slideDown(d.o.editSpeed), "function" == typeof d.o.onEdit && d.o.onEdit.call(this, c), b.preventDefault()
      }), a(d.o.editPlaceholder).find("input").keyup(function () {
        a(this).parents(d.o.widgets).children("header").children("h2").text(a(this).val())
      }), e.on(g, "[data-widget-setstyle]", function (b) {
        var c = a(this).data("widget-setstyle"), e = "";
        a(this).parents(d.o.editPlaceholder).find("[data-widget-setstyle]").each(function () {
          e += a(this).data("widget-setstyle") + " "
        }), a(this).parents(d.o.widgets).attr("data-widget-attstyle", "" + c).removeClassPrefix("jarviswidget-color-").addClass(c), d._runLoaderWidget(a(this)), d._saveSettingsWidget(), b.preventDefault()
      }), e.on(g, ".jarviswidget-custom-btn", function (b) {
        var c = a(this).parents(d.o.widgets);
        d._runLoaderWidget(a(this)), a(this).children("." + d.customClass[0]).length ? (a(this).children().removeClass(d.customClass[0]).addClass(d.customClass[1]), "function" == typeof d.o.customStart && d.o.customStart.call(this, c)) : (a(this).children().removeClass(d.customClass[1]).addClass(d.customClass[0]), "function" == typeof d.o.customEnd && d.o.customEnd.call(this, c)), d._saveSettingsWidget(), b.preventDefault()
      }), e.on(g, ".jarviswidget-delete-btn", function (b) {
        var c = a(this).parents(d.o.widgets), e = c.attr("id"), f = c.children("header").children("h2").text();
        a.SmartMessageBox ? a.SmartMessageBox({
          "title": "<i class='fa fa-times' style='color:#ed1c24'></i> " + d.o.labelDelete + ' "' + f + '"',
          "content": d.o.deleteMsg,
          "buttons": "[No][Yes]"
        }, function (b) {
          "Yes" == b && (d._runLoaderWidget(a(this)), a("#" + e).fadeOut(d.o.deleteSpeed, function () {
            a(this).remove(), "function" == typeof d.o.onDelete && d.o.onDelete.call(this, c)
          }))
        }) : a("#" + e).fadeOut(d.o.deleteSpeed, function () {
          a(this).remove(), "function" == typeof d.o.onDelete && d.o.onDelete.call(this, c)
        }), b.preventDefault()
      }), e.on(g, ".jarviswidget-refresh-btn", function (b) {
        var c = a(this).parents(d.o.widgets), e = c.data("widget-load"), f = c.children(), g = a(this);
        g.button("loading"), f.addClass("widget-body-ajax-loading"), setTimeout(function () {
          g.button("reset"), f.removeClass("widget-body-ajax-loading"), d._loadAjaxFile(c, e, f)
        }, 1e3), b.preventDefault()
      }), e = null
    }, "destroy": function () {
      var c = this, d = "." + f, e = c.obj.find(c.o.grid + ".sortable-grid").not("[data-widget-excludegrid]");
      e.sortable("destroy"), c.widget.children("header").off(d), a(c.o.deleteSettingsKey).off(d), a(c.o.deletePositionKey).off(d), a(b).off(d), c.obj.removeData(f)
    }
  }, a.fn[f] = function (b) {
    return this.each(function () {
      var c = a(this), d = c.data(f);
      if (!d) {
        var g = "object" == typeof b && b;
        c.data(f, d = new e(this, g))
      }
      "string" == typeof b && d[b]()
    })
  }, a.fn[f].defaults = {
    "grid": "section",
    "widgets": ".jarviswidget",
    "localStorage": !0,
    "deleteSettingsKey": "",
    "settingsKeyLabel": "Reset settings?",
    "deletePositionKey": "",
    "positionKeyLabel": "Reset position?",
    "sortable": !0,
    "buttonsHidden": !1,
    "toggleButton": !0,
    "toggleClass": "min-10 | plus-10",
    "toggleSpeed": 200,
    "onToggle": function () {
    },
    "deleteButton": !0,
    "deleteMsg": "Warning: This action cannot be undone",
    "deleteClass": "trashcan-10",
    "deleteSpeed": 200,
    "onDelete": function () {
    },
    "editButton": !0,
    "editPlaceholder": ".jarviswidget-editbox",
    "editClass": "pencil-10 | delete-10",
    "editSpeed": 200,
    "onEdit": function () {
    },
    "colorButton": !0,
    "fullscreenButton": !0,
    "fullscreenClass": "fullscreen-10 | normalscreen-10",
    "fullscreenDiff": 3,
    "onFullscreen": function () {
    },
    "customButton": !0,
    "customClass": "",
    "customStart": function () {
    },
    "customEnd": function () {
    },
    "buttonOrder": "%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",
    "opacity": 1,
    "dragHandle": "> header",
    "placeholderClass": "jarviswidget-placeholder",
    "indicator": !0,
    "indicatorTime": 600,
    "ajax": !0,
    "loadingLabel": "loading...",
    "timestampPlaceholder": ".jarviswidget-timestamp",
    "timestampFormat": "Last update: %m%/%d%/%y% %h%:%i%:%s%",
    "refreshButton": !0,
    "refreshButtonClass": "refresh-10",
    "labelError": "Sorry but there was a error:",
    "labelUpdated": "Last Update:",
    "labelRefresh": "Refresh",
    "labelDelete": "Delete widget:",
    "afterLoad": function () {
    },
    "rtl": !1,
    "onChange": function () {
    },
    "onSave": function () {
    },
    "ajaxnav": !0
  }, a.fn.removeClassPrefix = function (b) {
    return this.each(function (c, d) {
      var e = d.className.split(" ").map(function (a) {
        return 0 === a.indexOf(b) ? "" : a
      });
      d.className = a.trim(e.join(" "))
    }), this
  }
}(jQuery, window, document);