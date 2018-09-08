module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      'karma-coverage',
      'karma-typescript',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter'
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage',
      subdir: '.'
    },
    files: [
      'src/**/*.ts'
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
      '**/!(interface)/!(*spec|*index).ts': ['karma-typescript', 'coverage']
    },
    exclude: [
      'src/*.ts'
    ],
    karmaTypescriptConfig: {
      compilerOptions: {
        "target": "es6",
        "lib": ["es2016"]
      },
      bundlerOptions: {
        "entrypoints": /\.spec\.ts$/
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox'
        ]
      }
    },
    singleRun: true
  });
};