var should = require('chai').should(),
    ac = require('../');

describe('Word List', function() {

  before(function dbSetup() {
    ac.import(function(wordCount){
      console.log('    ✓ words imported:', wordCount);
    });
  });

  it('should contain a list english words', function(done) {
    ac.count(function(err,count){
      count.should.equal(235886); // 354983
      console.log('    --> WordCount:',count);
      done();
    });
  });

  it('contains 4 words begining in "awes" ', function(done) {
    ac.findWords('awes', function(err,words){
      var justWords = words.map( function(word) {
        return word.key;
      });
      var awesWords = [ 'awesome', 'awesomely', 'awesomeness', 'awest' ];
      justWords.length.should.equal(4);
      console.log(justWords);
      done();
    });
  });

  it('contains 0 words beginning in "zeit" ', function(done) {
    ac.findWords('zeit', function(err,words){
      words.length.should.equal(0);
      done();
    });
  });


});
