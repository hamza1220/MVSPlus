var numeral = require('numeral');

export const moneyConverter = (num) => {
	let x = numeral(num).format('$ 0.00 a')
	return x === "$ 0.00 "? 'N/A': x;
}

export const timeConverter = (mins) => {
	return mins? parseInt(mins/60,10)+" hr " + mins%60 + " min" : 'N/A';
} 

export const getYear = (date) => {
	return date.split('-')[0]
}
