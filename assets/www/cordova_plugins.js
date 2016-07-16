cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-wifi/www/WifiAdmin.js",
        "id": "cordova-plugin-wifi.WifiAdmin",
        "clobbers": [
            "window.plugins.WifiAdmin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-powermanagement/www/powermanagement.js",
        "id": "cordova-plugin-powermanagement.powermanagement",
        "clobbers": [
            "window.powermanagement"
        ]
    },
    {
        "file": "plugins/cordova.plugin.Brightness/www/brightness.js",
        "id": "cordova.plugin.Brightness.Brightness",
        "clobbers": [
            "cordova.plugins.brightness"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/events.js",
        "id": "cordova-plugin-chrome-apps-common.events",
        "clobbers": [
            "chrome.Event"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/errors.js",
        "id": "cordova-plugin-chrome-apps-common.errors"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/stubs.js",
        "id": "cordova-plugin-chrome-apps-common.stubs"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-common/helpers.js",
        "id": "cordova-plugin-chrome-apps-common.helpers"
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-storage/storage.js",
        "id": "cordova-plugin-chrome-apps-storage.Storage",
        "clobbers": [
            "chrome.storage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-app/backgroundapp.js",
        "id": "cordova-plugin-background-app.backgroundapp",
        "clobbers": [
            "cordova.backgroundapp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-chrome-apps-alarms/alarms.js",
        "id": "cordova-plugin-chrome-apps-alarms.Alarms",
        "clobbers": [
            "chrome.alarms"
        ]
    },
    {
        "file": "plugins/com.uniclau.alarmplugin/www/alarmplugin.js",
        "id": "com.uniclau.alarmplugin.AlarmPlugin",
        "clobbers": [
            "navigator.plugins.alarm"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-wifi": "0.5.0",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-background-mode": "0.6.5",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-powermanagement": "1.0.5",
    "cordova.plugin.Brightness": "0.1.1",
    "cordova-plugin-chrome-apps-common": "1.0.7",
    "cordova-plugin-chrome-apps-storage": "1.0.4",
    "cordova-plugin-background-app": "2.0.2",
    "cordova-plugin-chrome-apps-alarms": "1.3.3",
    "com.uniclau.alarmplugin": "0.1.0",
    "cordova-plugin-vibration": "2.1.1"
};
// BOTTOM OF METADATA
});