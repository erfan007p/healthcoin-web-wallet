/**
* The Settings Module reads the settings out of settings.json and provides
* this information to other modules. No need to modify anything here.
*
* See: settings.json.template
*/

var fs = require("fs");
var jsonminify = require("jsonminify");

// Runtime environment: 'development' or 'production'
exports.env = "development";

// The app title, visible in browser window
exports.coinTitle = "Healthcoin Web Wallet";

// Coin description
exports.coinDescription = "Healthcoin keeps track of the user's biomarker progress in diabetic and pre-diabetic patients. Biomarker data is sent anonymously to the blockchain for research purposes later.";

// The copyright for the footer
exports.copyRight = "Copyright (c) 2016, The Healthcoin Developers. All rights reserved.";

// Coin name / page heading
exports.coinName = "healthcoin";

// Coin symbol, e.g. BTC, VRC, SLR, HCN, ...
exports.coinSymbol = "HCN";

// Logo
exports.logo = "./public/images/Icon.png";

// The app favicon fully specified url, visible e.g. in the browser window
exports.favicon = "./public/favicon.ico";

// History rows per page
exports.historyRowsPP = 10;

// Minimum transaction fee
exports.minTxFee = 0.0001;

// Amount to send new users at sign-up
exports.newUserAmount  = 1.0;

// Some control over how much can be sent at one time
exports.maxSendAmount  = 1000.0;                      

// The url hosting the app. e.g. myhost.homelan.net
exports.appHost = "127.0.0.1";

// The ports express should listen on
exports.port = process.env.PORT || 8181;
exports.sslPort = process.env.SSLPORT || 8383;

// SSL certs
exports.sslKey = "./sslcert/server.key";
exports.sslCrt = "./sslcert/server.crt";

// This setting is passed to MongoDB to set up the database
exports.mdb = {
  "user": "healthcoin",
  "password": "password",
  "database": "healthcoin",
  "host" : "127.0.0.1",
  "port" : 27017
};

// MASTER_ACCOUNT will become an address label in the wallet. *** DO NOT CHANGE THE ACCOUNT NAME AFTER FIRST RUN! ***
exports.masterAccount  = "MASTER_ACCOUNT";            // Master UI login account, and Label to assign to "" wallet accounts.
exports.masterEmail    = "healthcoin@localhost";      // Master email account.
exports.masterCanEncrypt = false;                     // Allow wallet encryption by MASTER_ACCOUNT


exports.reloadSettings = function reloadSettings() {
    // Discover where the settings file lives
    var settingsFilename = "./settings.json";

    var settingsStr;
    try {
        settingsStr = fs.readFileSync(settingsFilename).toString();
    } catch(e) {
        console.warn('No settings.json file found. Continuing using defaults!');
    }

    // Parse the settings
    var settings;
    try {
        if (settingsStr) {
            settingsStr = jsonminify(settingsStr).replace(",]","]").replace(",}","}");
            settings = JSON.parse(settingsStr);
        }
    } catch(e) {
        console.error('There was an error processing your settings.json file: '+e.message);
        process.exit(1);
    }

    // Loop trough the settings
    for (var i in settings) {
        if (i) {
            // Test if the setting start with a low character
            if (i.charAt(0).search("[a-z]") !== 0) {
                console.warn("Settings should start with a low character: '" + i + "'");
            }
            //we know this setting, so we overwrite it
            if(exports[i] !== undefined) {
                exports[i] = settings[i];
            } else {
                console.warn("Unknown Setting: '" + i + "'. This setting doesn't exist or it was removed.");
            }
        }
    }
};

// Initial load settings
exports.reloadSettings();