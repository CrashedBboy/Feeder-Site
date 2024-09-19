# Feeder-Site
A remote fish feeder with servo motor/LED control using Arduino, featuring an IoT system with a web interface built on Express.js and SQLite.  
Web control interface for Arduino fish feeder.  
check [Fish-Feeder](https://github.com/CrashedBboy/Feeder) for more detail of feeder side.

## Demo: [https://www.youtube.com/watch?v=59jO8bGCrzs](https://www.youtube.com/watch?v=59jO8bGCrzs)

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
