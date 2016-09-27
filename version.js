var fs = require("fs")

fs.readFile("README.md", "utf8", function (error, data) {
	if (error) throw error
	var bumped = data.replace(/(!\[Version )(\d+\.\d+\.\d+)(\]\(https:\/\/img\.shields\.io\/badge\/version-)(\d+\.\d+\.\d+)(-gray\.svg\))/g,  `$1${process.argv[2] || "$2"}$3${process.argv[2] || "$4"}$5`)
	fs.writeFile("README.md", bumped, function (error) {
		if (error) throw error
		console.log(process.argv[2] ? `Bumped readme file to ${process.argv[2]}` : `Version number not found.`)
	})
})
