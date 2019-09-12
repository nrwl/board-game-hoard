module.exports = {
  name: 'store-ui-formatters',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/ui-formatters',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
