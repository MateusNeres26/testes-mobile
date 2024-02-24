export const config = {

    // runner: 'local',
    // port: 4723,


    user: '-',
    key: '-',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // platformName: 'Android',
        // 'appium:deviceName': 'ebac-qe',
        // 'appium:platformVersion': '14.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        // 'appium:appWaitAtctivity': '.mainActivity',
        // 'appium:disableIdLocatorAutocompletion': true,



        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        "appium:disableIdLocator Autocompletion": true,

        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebac Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0'
        },



    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


}
