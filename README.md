# moringa
API for MoringaCore

INSTALLATION
1. Ensure you have Nodejs and MongoDB installed on your local PC.
   If you don't have them already installed, visit https://www.mongodb.com
   and https://www.nodejs.org to download the appropriate version for your PC OS.
2. Download or clone this repository to your PC.
3. Extract the downloaded zip file to a folder.
4. Launch a command prompt and navigate (cd) to the extracted folder on your PC.
5. Run "npm install" from the command prompt to install required nodejs
   middlewares.


DATABASE CONNECTION
By default the system is connected to a live database hosted on AWS MongoDB Atlas Cluster.
To use the locally hosted mongodb database, run "mongorestore" from the command prompt and
then start the local mongodb by running "mongod" command. Also ensure the mongodb is running
on the default port 27017.

RUNNING THIS API
When the installation completes, open a command prompt and navigate (cd) to the extracted folder,
then run "npm start" to start the service.

NOTE: Ensure you have internet connect all through the installation process. This API doesn't have a UI
but works directly with the MoringaCore app which is found at https://github.com/jaymomnang/moringacore.git
Download and install to use this API
