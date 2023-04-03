import { readFileSync } from "node:fs"
import { parse } from "../dist/esm/index.js"

const bib = readFileSync(`../__tests__/bibs/unformatted/0001.bib`).toString()
const ast = parse(bib)

console.log(ast)