# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ramyageethikakhandavilli/lotide`

**Require it:**

`const _ = require('@ramyageethikakhandavilli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* head() : displays the first element of the array
* tail() : displays the list of elements in the array leaving the first element
* middle() : displays the middle elements in an array
* without() : compares the array and returns the resultant array without the matching elements
* takeUntil() : displays array elements until any specified special character
* map() : returns the array as per the condition specified
* letterPositions() : checks for a particular letter position
* findKeyByValue() : returns the key for the specified value
* findKey() : returns the key for the specified condition
* eqObjects() : compares the arrays of object
* eqArrays() : compare the arrays
* countOnly() : iterate through the array and returns the count of the occurences of strings whose value is given true
* CountLetters() : counts the occurances of character