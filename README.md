# Dickie dates

> dickie-dates implies controlling knowingly imprecise epochs

![Version 0.0.3](https://img.shields.io/badge/version-0.0.3-gray.svg)

An implementation of a simple set of conventions for handling intentionally ambiguous date-time stamps.

## Installation

	npm install dickie-dates

## Usage

The 1980s can be represented by the string "198".

	var dickiedates = require("dickie-dates")
	console.log(dickiedates.parseDate("198"))

This will return:

	{ startDate: '19800101000000',
	  endDate: '19891231235959',
	  precision: 2 }

The precision index allows for continued recognition of the originally ambiguous input.

## Documentation

There's not a lot of detailed documentation at the moment, but for what it's worth you can follow the thinking that went into this package in the following blog posts:

 - ["Awkward dates", 20th June 2016](http://guypursey.com/blog/201606201000-awkward-dates)
 - ["Allowing date uncertainty", 27th June 2016](http://guypursey.com/blog/201606271030-allowing-date-uncertainty)
 - ["Playpool chart", 4th July 2016, in which you can see the approach being used](http://guypursey.com/blog/201607042300-playpool-chart)
