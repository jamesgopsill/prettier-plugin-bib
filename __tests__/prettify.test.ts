import { readFileSync } from "node:fs"
import prettier from "prettier"

test(`0001`, () => {
	const bib = readFileSync(`__tests__/bibs/unformatted/0001.bib`).toString()
	const expectedBib = readFileSync(
		`__tests__/bibs/formatted/0001.bib`
	).toString()
	const p = prettier.format(bib, {
		parser: "bib-parse",
		plugins: ["./src"],
	})
	expect(p).toEqual(expectedBib)
})
