export const convertPLNToUSD = (PLN) => {
  if (PLN <= 0 || typeof PLN !== "number") {
		return "$0.00";
	}
	const PLNtoUSD = PLN / 3.5;

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	return formatter.format(PLNtoUSD).replace(/\u00a0/g, " ");
};
