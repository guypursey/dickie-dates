# Dickie dates

> dickie-dates implies controlling knowingly imprecise epochs

v0.0.2

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
