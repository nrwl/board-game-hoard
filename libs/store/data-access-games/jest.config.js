module.exports = {
  name: 'store-data-access-games',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/data-access-games',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
