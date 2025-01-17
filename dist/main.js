import { useEffect, useState } from "react";
import { Text, render } from "ink";
import { jsx, jsxs } from "react/jsx-runtime";

//#region src/main.tsx
const Counter = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((previousCounter) => previousCounter + 1);
		}, 100);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return jsxs(Text, {
		color: "green",
		children: [counter, " tests passed"]
	});
};
function main() {
	render(jsx(Counter, {}));
}

//#endregion
export { main };