import type { AstPath } from "prettier"
import { doc } from "prettier"

const { hardline } = doc.builders

export const print = (
	path: AstPath,
	options: any
	//print: (selector?: string | number | Array<string | number> | AstPath) => Doc
) => {
	const nodes = path.getValue()

	let indentation = ""
	for (let i = 0; i < options.tabWidth; i++) {
		indentation += " "
	}

	const prettyBib: any = []
	for (const node of nodes) {
		switch (node.itemtype) {
			case "entry":
				prettyBib.push(`@${node.type.toLowerCase()}`)
				prettyBib.push(`{`)
				if (node.key) prettyBib.push(`${node.key},`)
				prettyBib.push(hardline)

				const fields = node.fields.sort((a: any, b: any) =>
					a.name > b.name ? 1 : -1
				)
				for (const field of fields) {
					if (options.useTabs) {
						prettyBib.push("\t")
					} else {
						prettyBib.push(indentation)
					}
					prettyBib.push(field.name.toLowerCase())
					prettyBib.push("={")
					// Remove any extended whitespace
					const value = field.value.replace(/\s\s+/g, " ")
					prettyBib.push(value)
					prettyBib.push("},")
					prettyBib.push(hardline)
				}
				prettyBib.push("}")
				prettyBib.push(hardline)
				break
			case "comment":
				prettyBib.push(node.comment.trim())
				prettyBib.push(hardline)
				break
		}
	}
	return prettyBib
}
