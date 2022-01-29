1- Give the full permission on the folder that you created by going on the folder -> R-CLICK -> Properties -> Security -> Give full control permission the the Authenticated
    user or the LAPTOP user
2- npm init --yes to create your nodejs app
3- install dependencies
    npm i nodemon -D
    npm i express
    npm i mongodb

4- Additional packages
    Install http-server:

    $ npm install http-server --save-dev
    and concurrently:

    $ npm install concurrently --save-dev
    npm scripts
    Add the following open script to package.json:

    "scripts": {
        "start": "npm run open",
        "open": "concurrently \"http-server -a localhost -p 1234\" \"open http://localhost:1234/build\""
    }
    Note
    start will actually be defined as follows to include the tasks you currently have:

    "start": "npm run build && npm run dev && npm run open",
    The code in the open script above which reads:
    open http://localhost:1234/build
    ...assumes that the build task you have previously defined outputs a index.html to a build folder. If the file is named differently you will need to define it. E.g.

    open http://localhost:1234/build/the_html_file_name.html
    You may need to add a delay between launching the server and opening the file, just to wait a bit til the server starts up. If that's the case then also install sleep-ms:

    $ npm install sleep-ms --save-dev
    and change the open script to:

    "open": "concurrently \"http-server -a localhost -p 1234\" \"sleepms 1000 && open http://localhost:1234/build\""

    Ref: https://stackoverflow.com/questions/40713752/how-to-open-browser-to-localhost-through-npm-scripts

The way that you set up a default launch
    // "start": "start http://localhost:3000 && nodemon app.js",

