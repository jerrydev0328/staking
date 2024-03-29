/** @format */

import styled from "styled-components";
import ButtonImage from "../../../assets/images/button.png";
interface IButton {
	className?: string;
	size?: "small" | "medium" | "large";
}

export const MyButton = styled.button.attrs<IButton>(() => ({
	className: `flex justify-center items-center font-['ThaleahFat'] text-center shadow`,
}))<IButton>`
	background-image: url(${ButtonImage});
	background-size: 100% 100%;
	min-width: ${(props) =>
		props.size === "small"
			? "100px"
			: props.size === "medium"
			? "150px"
			: "200px"};
	height: 60px;
	padding: ${(props) =>
		props.size === "small"
			? "8px 10px"
			: props.size === "large"
			? "12px 14px"
			: "10px 12px"};
	font-size: ${(props) =>
		props.size === "small"
			? "0.8rem"
			: props.size === "large"
			? "1.2rem"
			: "1rem"};
	font-size: 20px;
	&:disabled {
		cursor: default;
		opacity: 0.3;
		pointer-events: none;
	}
`;

export const PrimaryButton = styled.button.attrs<IButton>(() => ({
	className: `flex justify-center items-center shadow-md`,
}))<IButton>`
	background-image: url(${ButtonImage});
	background-blend-mode: multiply;
	min-width: ${(props) =>
		props.size === "small"
			? "100px"
			: props.size === "medium"
			? "120px"
			: "150px"};
	color: #ffffff;
	border: shadow,
	border-radius: 7px;
	padding: ${(props) =>
		props.size === "small"
			? "8px 10px"
			: props.size === "large"
			? "12px 14px"
			: "10px 12px"};
	font-weight: bold;
	transition: all 0.3s ease;
	display: inline-block;
	outline: none;
	font-size: ${(props) =>
		props.size === "small"
			? "0.8rem"
			: props.size === "large"
			? "1.5rem"
			: "1rem"};

	&:disabled {
		cursor: default;
		opacity: 0.3;
		pointer-events: none;
	}
`;

// export const SecondaryButton = styled(PrimaryButton)<IButton>`
// 	background: transparent;
// 	// border: 2px solid ${(props) => props.theme.colors.primaryBackground};
// 	// color: ${(props) => props.theme.colors.primaryBackground};

// 	&:hover {
// 		background: ${(props) => props.theme.colors.primaryBackground};
// 	}

// 	&:disabled {
// 		cursor: default;
// 		opacity: 0.3;
// 		pointer-events: none;
// 	}
// `;

export const IconButton = styled.button.attrs<IButton>(() => ({
	className: `flex justify-center items-center`,
}))<IButton>`
	font-size: 25px;
	border-radius: 50rem;
	width: 30px;
	height: 30px;
	transition: background 0.3s ease;

	&:hover {
	}

	&:disabled {
		cursor: default;
		opacity: 0.3;
		pointer-events: none;
	}
`;
