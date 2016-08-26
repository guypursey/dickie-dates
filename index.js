var parseDate = function (date) {

	var dateInput = {}

	if (typeof date === "string") {
		dateInput.startDate = date
		dateInput.endDate = date
	} else if (typeof date === "object") {
		dateInput.startDate = date.startDate
		dateInput.endDate = date.endDate || date.startDate
	}

	var datePattern = /(\d{1,4})(?:(0[1-9]|1[0-2])(?:(0[1-9]|[1-2][0-9]|3[0-1])(?:([0-1][0-9]|2[0-3])(?:([0-5][0-9])(?:([0-5][0-9]))?)?)?)?)?/

	var startDate = datePattern.exec(dateInput.startDate)
	var endDate = datePattern.exec(dateInput.endDate)

	var startYear = startDate[1]
			 ? `${startDate[1]}${"0000".substr(startDate[1].length)}`
			 : ""
	var startMonth = startDate[2] || "01"
	var startDay = startDate[3] || "01"
	var startHour = startDate[4] || "00"
	var startMinute = startDate[5] || "00"
	var startSecond = startDate[6] || "00"

	var endYear = endDate[1]
			 ? `${endDate[1]}${"9999".substr(endDate[1].length)}`
			 : ""
	var endMonth = endDate[2] || "12"
	var endDay = endDate[3]
			   || ((endDate[2] === "02")
				   ? (endDate[1] % 4 === 0)
					 ? "29"
					 : "28"
				   : (/(04|06|09|11)/.test(endDate[2]))
					 ? "30"
					 : "31")
	var endHour = endDate[4] || "23"
	var endMinute = endDate[5] || "59"
	var endSecond = endDate[6] || "59"
	var startDateResult = `${startYear}${startMonth}${startDay}${startHour}${startMinute}${startSecond}`
	var endDateResult = `${endYear}${endMonth}${endDay}${endHour}${endMinute}${endSecond}`

	var startPrecision = 6
	while (startPrecision) {
		if (startDate[startPrecision]) {
			break
		}
		startPrecision -= 1
	}

	var endPrecision = 6
	while (endPrecision) {
		if (startDate[endPrecision]) {
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

module.exports = parseDate
