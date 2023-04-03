import { readFileSync } from "node:fs"
import { parse } from "../src"

test(`Test Parse Fcn.`, () => {
	const bib = readFileSync(`__tests__/bibs/unformatted/0001.bib`).toString()
	const ast = parse(bib)
	expect(ast).toBeDefined()
})
