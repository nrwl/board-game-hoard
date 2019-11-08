module.exports = {
  name: 'angular-publish',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-publish',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
