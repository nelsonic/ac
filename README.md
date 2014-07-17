AutoComplete
============
[![Build Status](https://travis-ci.org/nelsonic/ac.png?branch=master)](https://travis-ci.org/nelsonic/ac)
[![Coverage Status](https://coveralls.io/repos/nelsonic/ac/badge.png)](https://coveralls.io/r/nelsonic/ac)
[![Code Climate](https://codeclimate.com/github/nelsonic/ac.png)](https://codeclimate.com/github/nelsonic/ac)
[![Dependencies](https://david-dm.org/nelsonic/ac.png?theme=shields.io)](https://david-dm.org/nelsonic/ac)
[![devDependency Status](https://david-dm.org/nelsonic/ac/dev-status.svg)](https://david-dm.org/nelsonic/ac#info=devDependencies)
[![NPM version](https://badge.fury.io/js/ac.png)](https://npmjs.org/package/ac)

Autocomplete all the words!

The project we are currently working on requires auto-complete
with a large number of possible words.

This is an experiment to create a great auto-complete experience
on a shoe-string.

## Demo: http://wordsy.herokuapp.com/



## Tasks

- [x] Load all the words into LevelDB (no need to setup a Database!)
- [x] Search for a complete word in LevelDB
- [x] Search for a partial word (to get suggestions)
- [x] Implement simple example UI
- [x] Only start searching for suggestions after the person types second char
- [ ] When a person clicks on a word in the UI we need to count
that as a "vote" for the word, so we can get some stats.
- [x] Put demo app on Heroku: http://wordsy.herokuapp.com/
- [x] Remove surplus words files (to reduce bandwidth)
note: extended list is: https://github.com/nelsonic/english-words

Example: search for the **first four characters** of the word awesome:

Returns the following four words:
```
awesome
awesomely
awesomeness
awest
```




## Why LevelDB ?

- *Zero installation* or configuration required. **#winning**
- Benchmarks: http://leveldb.googlecode.com/svn/trunk/doc/benchmark.html


#### Got Coverage ?
```
npm run-script cover
```

## Ideas (remind me to do these later)

- [ ] Use the zipped version of the words.txt file to reduce
bandwidth when installing the the module.

- [ ] delete un-compressed version of words.txt
- [ ] Use Socket.io for faster transport of characters and suggestions.
