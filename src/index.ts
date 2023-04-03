import * as parser from "bibtex-parse"
import { print } from "./print.js"

export const parse = parser.parse

export const hello = () => {
	return "world"
}

export const languages = [
	{
		name: "BibTeX",
		parsers: ["bib-parse"],
		extensions: [".bib"],
	},
]

export const parsers = {
	"bib-parse": {
		parse: (text: string) => parse(text),
		astFormat: "bib-ast",
	},
}

export const printers = {
	"bib-ast": {
		print,
	},
}

export const options = {}

export const defaultOptions = {
	useTabs: true,
}
