module.exports = {
	parseDate: function (date) {

		var dateInput = {}

		if (typeof date === "string") {
			dateInput.startDate = date
			dateInput.endDate = date
		} else if (typeof date === "object") {
			dateInput.startDate = date.startDate
			dateInput.endDate = date.endDate || date.startDate
		}

		var datePattern = /(-?)(\d{1,4})(?:(0[1-9]|1[0-2])(?:(0[1-9]|[1-2][0-9]|3[0-1])(?:([0-1][0-9]|2[0-3])(?:([0-5][0-9])(?:([0-5][0-9]))?)?)?)?)?/

		var startDate = datePattern.exec(dateInput.startDate)
		var endDate = datePattern.exec(dateInput.endDate)

		var startEra = startDate[1]
		var startYear = startDate[2]
				 ? `${startDate[2]}${"0000".substr(startDate[2].length)}`
				 : ""
		var startMonth = startDate[3] || "01"
		var startDay = startDate[4] || "01"
		var startHour = startDate[5] || "00"
		var startMinute = startDate[6] || "00"
		var startSecond = startDate[7] || "00"

		var endEra = endDate[1]
		var endYear = endDate[2]
				 ? `${endDate[2]}${"9999".substr(endDate[2].length)}`
				 : ""
		var endMonth = endDate[3] || "12"
		var endDay = endDate[4]
				   || ((endDate[3] === "02")
					   ? (endDate[2] % 4 === 0)
						 ? "29"
						 : "28"
					   : (/(04|06|09|11)/.test(endDate[1]))
						 ? "30"
						 : "31")
		var endHour = endDate[5] || "23"
		var endMinute = endDate[6] || "59"
		var endSecond = endDate[7] || "59"
		var startDateResult = `${startEra}${startYear}${startMonth}${startDay}${startHour}${startMinute}${startSecond}`
		var endDateResult = `${endEra}${endYear}${endMonth}${endDay}${endHour}${endMinute}${endSecond}`

		var startPrecision = 6
		while (startPrecision) {
			if (startDate[startPrecision + 1]) {
				break
			}
			startPrecision -= 1
		}

		var endPrecision = 6
		while (endPrecision) {
			if (startDate[endPrecision + 1]) {
				break
			}
			endPrecision -= 1
		}

		var precision = startPrecision + endPrecision

		return {
			startDate: startDateResult,
			endDate: endDateResult,
			precision: precision
		}

	}
}
