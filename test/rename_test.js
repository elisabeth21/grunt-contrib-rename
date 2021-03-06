'use strict';

var grunt = require('grunt');

exports.clean = {

  rename_file_test: function(test) {
    test.expect(1);
    var expected = grunt.file.exists('tmp/test/fixtures/file-renamed.txt');
    test.equal(expected, true, 'File Should be Renamed');
    test.done();
  },

  rename_folder_test: function(test) {
    test.expect(1);
    var expected = grunt.file.exists('tmp//test/fixtures/folder-renamed');
    test.equal(expected, true, 'Folder Should be Renamed');
    test.done();
  },

};
