import { convertPLNToUSD } from "./../convertPLNToUSD";

describe("ConvertPLNtoUSD", () => {
	it("should return proper value when good input", () => {
		expect(convertPLNToUSD(1)).toBe("$0.29");
		expect(convertPLNToUSD(2)).toBe("$0.57");
		expect(convertPLNToUSD(20)).toBe("$5.71");
		expect(convertPLNToUSD(12)).toBe("$3.43");
	});
	it("should return $NaN when input is not a number", () => {
		expect(convertPLNToUSD("1")).toBe("$NaN");
		expect(convertPLNToUSD("abc")).toBe("$NaN");
		expect(convertPLNToUSD(NaN)).toBe("$NaN");
	});
	it("should return $NaN when input empty", () => {
		expect(convertPLNToUSD()).toBe("$NaN");
		expect(convertPLNToUSD(null)).toBe("$NaN");
		expect(convertPLNToUSD(undefined)).toBe("$NaN");
	});
  it("should return $0.00 when input <= 0", () => {
		expect(convertPLNToUSD(0)).toBe("$0.00");
    expect(convertPLNToUSD(-6)).toBe("$0.00");
    expect(convertPLNToUSD(-628)).toBe("$0.00");
	});
});
