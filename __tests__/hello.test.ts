import { hello } from "../src"

test(`hello`, () => {
	const ans = hello()
	expect(ans).toBe("world")
})
