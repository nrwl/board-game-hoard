module.exports = {
  name: 'store-data-access-cart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/data-access-cart',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
