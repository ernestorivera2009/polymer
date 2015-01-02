Mobile DC
=======

Polymer Meetup - Jan 2014
-------

Prerequisites
-------
* *nix OS
* NodeJS
* Bower

System Setup
-------
* `git clone https://github.com/mobiledc/polymer`
* `cd polymer`
* `npm install`
* `cd public`
* `bower install`

Add Your Import.IO API Keys
-------
* `cd public/js`
* `Edit apikeys.js like so:`

```javascript
var IMPORT_IO_KEYS = {
    userGuid    : "YOUR_USER_GUID",
    apiKey      : "YOUR_API_KEY",
    sourceGuid  : "DATA_SOURCE_GUID"
};
```

Run the server
-------
* `node index.js`

Open a browser
-------
* Navigate to http://localhost:5000
* You should see a Polymer app
