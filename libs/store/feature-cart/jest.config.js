module.exports = {
  name: 'store-feature-cart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/feature-cart',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
