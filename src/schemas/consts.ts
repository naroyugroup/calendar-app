const passwordCriteria = {
	minNumbers: 1,
	minUppercase: 1,
	minSymbols: 1,
};

const digitsRegex = `(?=.*[0-9]{${passwordCriteria.minNumbers},})`; // At least minNumbers digits
const uppercaseRegex = `(?=.*[A-Z]{${passwordCriteria.minUppercase},})`; // At least minUppercase uppercase letters
const symbolsRegex = `(?=.*[^A-Za-z0-9]{${passwordCriteria.minSymbols},})`; // At least minSymbols symbols
const noWhitespaceRegex = "[^\\s]*"; // Disallow whitespace characters

export const passwordRegex = new RegExp(
	`^${digitsRegex}${uppercaseRegex}${symbolsRegex}${noWhitespaceRegex}$`,
);
