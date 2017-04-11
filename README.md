Prerequisite:
install mongodb and run command:
mongodb_executable_path/mongod.exe --dbpath mongodb_database_path

Install and load data:
1. git clone https://github.com/sndevs/slack_archive.git
2. cd slack_archive
3. npm install
4. Run command "node importData.js"
5. cd website
6. npm install

Run:
1. Run the express server
1a. navigate to slack_archive directory
1b. Run command "node server/server.js" ( leave this running )
2. Run the webpack development server
2a. cd website
2b. npm run dev

Your browser should pop up with the message archive website
