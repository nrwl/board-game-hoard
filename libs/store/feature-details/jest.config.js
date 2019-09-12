module.exports = {
  name: 'store-feature-details',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/feature-details',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
