
// Original Imports
const request = require('request');
const func = require('./functions');
// var https = require('https');
// var util = require('util');
// var events = require('events');
// var fs = require('fs');

// Scraptch Api Stuff
const WebSocket = require("ws");
const Scratch = require('scratch-api');
const { getProject } = require('scratch-api');
const { getUser } = require('scratch-api');

var SERVER = 'scratch.mit.edu';
var PROJECTS_SERVER = 'projects.scratch.mit.edu';
var CDN_SERVER = 'cdn.scratch.mit.edu';
var CLOUD_SERVER = 'clouddata.scratch.mit.edu';
var API_SERVER = 'api.scratch.mit.edu';

var project_data = 0;
var user_data = 0;
const config_charset = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.!?":;'\`,#$%&@*+-=~><^_|()[]{}/\ `

// Interacting with the Project as a User

var project_id = 572431520;
var project_owner = 'dusknone';
var tick = 0; //server tick

Scratch.UserSession.load(function(err, user){
  user.cloudSession(project_id, function(err, cloud) {
    setInterval(()=>{
    
    cloud.set("☁ qz",1+parseInt(cloud.get("☁ qz")))
    tick+=1;
    },30);
    cloud.on('set', function(name, value) {
      console.log(name, value);
    });
  });
});
//This is an update!!