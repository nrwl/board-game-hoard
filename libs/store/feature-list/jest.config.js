module.exports = {
  name: 'store-feature-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/feature-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
