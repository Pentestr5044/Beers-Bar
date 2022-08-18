Hello this is the text file explaining how to operate this api. 
there are a couple things you will need before you start. 
1. Node js installed on your system.
2. mongodb installed on your system.
3. in the root folder where you unzip this file please place a "data" FOLDER and inside that data folder create a folder named "db".

setup instructions after previous tasks are finished. 
1. go into the unzipped folder with your terminal or vscode.
2. run the command "npm install". this should install all of the dependencies you need to run this api. 
3. start a seperate terminal and type in this command. mongod -dbpath {the path to your data.db folders} !!!! the database will start on port 27017 unless you need to change this just leave it be. 
4. run the command "npm test". and your api should start up letting you know what port its on and that it is connected to the database. 

when sending messages make sure you start a conversation first with the POST method on coversation the conversation _id in teh database must be the conversationID in the messages. 
if you have any questions about the databases please check out their schemas otherwise I can help with any troubleshooting. 

