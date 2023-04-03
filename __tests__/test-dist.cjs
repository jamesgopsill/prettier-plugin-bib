const fs = require("node:fs")
const parser = require("../dist/cjs")

const bib = fs.readFileSync(`../__tests__/bibs/unformatted/0001.bib`).toString()
const ast = parser.parse(bib)

console.log(ast)