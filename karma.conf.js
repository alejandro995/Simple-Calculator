module.exports = function(config){
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors:{
            '*.js':['coverage']
        },
        files:[
            './custom-matchers.js',
            '*.js',
            '*.spec.js'
        ],
        plugins: ['karma-jasmine',
        'karma-jasmine-matchers', 
        'karma-chrome-launcher',
    'karma-coverage'],
        reporters: ['dots', 'coverage'],
        color:true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        port: 9876,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: false,
        coverageReporter: {
            dir: 'coverage/',
            reporters:[
                {
                    type: 'html', subdir: 'html'
                }
            ]
        }
    })
}
