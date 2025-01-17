import { useEffect, useState } from "react";
import { Text, render } from "ink";
import { jsx, jsxs } from "react/jsx-runtime";

//#region src/GitBrowser.tsx
const GitBrowser = () => {
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
		children: [counter, " quibbles scribbled"]
	});
};

//#endregion
//#region src/main.tsx
function main() {
	render(jsx(GitBrowser, {}));
}

//#endregion
export { main };