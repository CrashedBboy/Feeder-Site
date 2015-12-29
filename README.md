# Feeder-Site
Web control interface for Arduino fish feeder  
checkc [Fish-Feeder](https://github.com/CrashedBboy/Feeder) for more detail of feeder side.

## 1.Setup
Take Ubuntu 14.04 as example:  

### Install npm and nodejs
`sudo apt-get install -y node npm nodejs-legacy`

### Setup packages dependency
move to project root directory  
`cd Feeder-Site`  
install required packages  
`npm install`  

### Seeding in SQLite3
we use database to store last time user feed  
before the first feed, you need to setup table and initial record.  
  
move to project root directory, then execute:  
`node ./database/seeds/feederSeed.js`

## 2.Run
move to project root directory, then execute:  
`npm start`
