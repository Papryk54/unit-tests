import { render, screen, cleanup } from "@testing-library/react";
import ResultBox from "./ResultBox";
import "@testing-library/jest-dom/extend-expect";

describe("Component ResultBox", () => {
	const testCases = [
		{
			amount: "100",
			from: "PLN",
			to: "USD",
			expectedOutput: "PLN 100.00 = $28.57",
		},
		{
			amount: "5",
			from: "USD",
			to: "PLN",
			expectedOutput: "$5.00 = PLN 17.50",
		},
		{
			amount: "200",
			from: "PLN",
			to: "USD",
			expectedOutput: "PLN 200.00 = $57.14",
		},
		{
			amount: "345",
			from: "USD",
			to: "PLN",
			expectedOutput: "$345.00 = PLN 1,207.50",
		},
		{
			amount: "10",
			from: "PLN",
			to: "PLN",
			expectedOutput: "PLN 10.00 = PLN 10.00",
		},
		{
			amount: "10",
			from: "USD",
			to: "USD",
			expectedOutput: "$10.00 = $10.00",
		},
    {
			amount: "-10",
			from: "PLN",
			to: "USD",
			expectedOutput: "Wrong value…",
		},
	];

	afterEach(() => {
		cleanup();
	});

	for (const testObj of testCases) {
		it(`should render proper info about conversion from ${testObj.from} to ${testObj.to} and otherwise`, () => {
			render(
				<ResultBox
					from={testObj.from}
					to={testObj.to}
					amount={parseFloat(testObj.amount)}
				/>
			);

			const output = screen.getByTestId("output");
			expect(output).toHaveTextContent(testObj.expectedOutput);
		});
	}
});
