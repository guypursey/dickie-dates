"use strict"
const dd_path = "../index.js"
const dickiedates = require(dd_path)
const expect = require("chai").expect

describe("Using `dickie-dates`", function() {
	describe("to parse a simple string", function () {
		describe("like `198` to represent the 1980s", function () {

			let result = dickiedates.parseDate("198")

			it("should return an object", function () {
				expect(result).to.be.an("object")
			})

			it("should return an object with a `startDate` property", function () {
				expect(result).to.have.property("startDate")
			})

			it("should return an object with an `endDate` property", function () {
				expect(result).to.have.property("endDate")
			})

			it("should return an object with a `precision` property", function () {
				expect(result).to.have.property("startDate")
			})

			it("should return an object with a `startDate` value of '19800101000000'", function () {
				expect(result).to.have.property("startDate", "19800101000000")
			})

			it("should return an object with a `endDate` value of '19891231235959'", function () {
				expect(result).to.have.property("endDate", "19891231235959")
			})

			it("should return an object with a `precision` value of '2' (out of 12)", function () {
				expect(result).to.have.property("precision", 2)
			})

		})
	})

	describe("like `-1000` to represent the year 1000 BCE", function () {

		let result = dickiedates.parseDate("-1000")

		it("should return an object with a `startDate` value of '-10000101000000'", function () {
			expect(result).to.have.property("startDate", "-10000101000000")
		})

		it("should return an object with a `endDate` value of '-10001231235959'", function () {
			expect(result).to.have.property("endDate", "-10001231235959")
		})
	})
})
