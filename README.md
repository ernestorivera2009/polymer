Mobile DC :: Polymer Meetup - Jan 2014
=======

Prerequisites
-------
* *nix OS
* NodeJS
* Bower

System Setup
-------
* `$ git clone https://github.com/mobiledc/polymer`
* `$ cd polymer`
* `$ cd example-simple`
* `$ npm install`
* `$ cd example-advanced`
* `$ npm install`
* `$ cd example-simple/public`
* `$ bower install`
* `$ cd example-advanced/public`
* `$ bower install`


Running the Simple Examples
------
* `$ cd example-simple`
* `$ node index.js`
* Single element example: launch Chrome and navigate to `http://localhost:5000/index-single.html`
* Nested elements example: launch Chrome and navigate to `http://localhost:5000/index-nested.html`

Running the Advanced Example
-----
* `$ cd example-advanced`
* `$ node index.js`
* Single element example: launch Chrome and navigate to `http://localhost:5000/index.html`

Add Your Import.IO API Keys
------
* `$ cd example-advanced/public/js`
* Edit `apikeys.js` like so:

```javascript
var IMPORT_IO_KEYS = {
    userGuid    : "YOUR_USER_GUID",
    apiKey      : "YOUR_API_KEY",
    sourceGuid  : "DATA_SOURCE_GUID"
};
```

Running the KinoScribe Presentation Example
-----
* `$ cd example-presentation`
* Launch Chrome and navigate to `file:///...path...polymer/example-presentation/index.html`*

Running the Mobile Example
------
* `$ npm install -g cca`
* `$ cca checkenv`
* `$ cca create example-mobile`
* `$ cca platform add ios`
* `$ cca emulate ios`
* `$ cca run iOS`
