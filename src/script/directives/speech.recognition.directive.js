/**
 * Created by noahli on 16/6/24.
 */
(function (angular) {
  'use strict';
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
