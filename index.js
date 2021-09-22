
// Original Imports
const request = require('request');
const func = require('./functions');
require('dotenv').config()
const keepAlive = require("./server")
const meowCloud = require('meowing')

// var https = require('https');
// var util = require('util');
// var events = require('events');
// var fs = require('fs');

const cUser = process.env['USER'];
const cPass = process.env['PASS'];

// Scraptch Api Stuff
const WebSocket = require("ws");
const Scratch = require('scratch-api');
const { getProject } = require('scratch-api');
const { getUser } = require('scratch-api');

var SERVER = 'scratch.mit.edu';
var PROJECTS_SERVER = 'projects.scratch.mit.edu';
var CDN_SERVER = 'cdn.scratch.mit.edu';
var CLOUD_SERVER = 'clouddata.scratch.mit.edu';
var TURBOWARP_SERVER = `wss://clouddata.turbowarp.org`;
var API_SERVER = 'api.scratch.mit.edu';

var project_data = 0;
var user_data = 0;
const config_charset = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.!?":;'\`,#$%&@*+-=~><^_|()[]{}/\ `

// Interacting with the Project as a User

var project_id = 573353885;
var project_owner = 'dusknone';
let tick= 0; //server tick
let dt = new Date(); //framerate
// User = 
let cloudVars = {};

async function mainOLD(){
  try{
    // throw new Error('No coffee');
    await CreateSession()
  }catch(error){
    // console.log(error)
    console.log('uh oh...')
  }
}

keepAlive()

// async function main(){
//   const session = new meowCloud.ScratchSession(process.env.USER, process.env.PASS);
//   try{
//     await session.login().then(console.log('Log in sucessful'))
//     let cloud = await session.createCloudConnection(project_id)
//     // console.log(cloud.getVariable(qz))
//     setInterval(async()=>{
//       // console.clear()
      
//       let qz = [`tick: ${tick}`,Date(),`tps: ${Math.floor(100*1000/(Date.now()-dt))/100}`]
//       let set = func.encode(qz.join())
//       try{
//         await cloud.setVariable(`qz`,set)
//       }catch(e){}
//       // console.log(qz)
//       // console.log(cloud.variables)



//       dt = Date.now()
//       tick+=1;
//     },50); //Tick rate of 20tps

//   }catch(error){
//     // console.log(error)
//     console.log('yikes')
//   }
// }

async function main(){
  const session = new meowCloud.ScratchSession(process.env.USER, process.env.PASS);
  try{
    await session.login().then(console.log('Log in sucessful'))
    let cloud = await session.createCloudConnection(project_id)
    // console.log(cloud.getVariable(qz))
    setInterval(async()=>{
      console.clear()
      
      // let qz = [`tick: ${tick}`,Date(),`tps: ${Math.floor(100*1000/(Date.now()-dt))/100}`]
      // let set = func.encode(qz.join())
      // try{
      //   await cloud.setVariable(`qz`,set)
      // }catch(e){}
      // console.log(qz)
      console.log(cloud.variables)
      // console.log(await cloud.getVariable('CLOUD_HEADER'));
      // if (func.decode(cloud.getVariable('CLOUD_HEADER')) == 'PUT') {
      //   cloud.setVariable('CLOUD_HEADER',func.encode('PUT'))
      // }



      dt = Date.now()
      tick+=1;
    },50); //Tick rate of 20tps

  }catch(error){
    // console.log(error)
    console.log('yikes')
  }
}


main()