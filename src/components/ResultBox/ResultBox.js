import PropTypes from "prop-types";
import { convertUSDToPLN } from "./../../utils/convertUSDToPLN";
import { convertPLNToUSD } from "./../../utils/convertPLNToUSD";
import { formatAmountInCurrency } from "./../../utils/formatAmountInCurrency";
import { useMemo, useState, useEffect } from "react";
import styles from "./ResultBox.module.scss";

const ResultBox = ({ from, to, amount }) => {
	const [errorDisplay, setErrorDisplay] = useState(false);
	const [wrongAmount, setWrongAmount] = useState("");

	useEffect(() => {
		if (amount < 0) {
			setErrorDisplay(true);
			setWrongAmount("Wrong value…");
		} else {
			setErrorDisplay(false);
			setWrongAmount("");
		}
	}, [amount]);

	const convertedAmount = useMemo(() => {
		if (from === "USD" && to === "PLN") return convertUSDToPLN(amount);
		if (from === "PLN" && to === "USD") return convertPLNToUSD(amount);
		return formatAmountInCurrency(amount, from);
	}, [from, to, amount]);

	const formattedAmount = useMemo(
		() => formatAmountInCurrency(amount, from),
		[amount, from]
	);

	console.log("amount: ", amount);
	console.log("errorDisplay: ", errorDisplay);
	console.log("wrongAmount: ", wrongAmount);

	return (
		<div className={styles.result} data-testid="output">
			{!errorDisplay && (
				<div>
					{formattedAmount} = {convertedAmount}
				</div>
			)}
			{errorDisplay && <div>{wrongAmount}</div>}
		</div>
	);
};

ResultBox.propTypes = {
	from: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
};

export default ResultBox;
