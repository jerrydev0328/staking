/** @format */

import React from "react";
import styled from "styled-components";
import { MyButton } from "../Button";

export const CardContainer = styled.div.attrs(() => ({
	className: `flex flex-col font-['Digitizer']`,
}))`
	background-color: rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(105, 193, 39, 1);
	border-radius: 10px;
	padding: 10px;
	margin-top: 10px;
`;
const Card = () => {
	return (
		<CardContainer>
			<label className="text-yellow-400 text-xl font-normal uppercase font-['Digitizer']">
				Mammoth Staking
			</label>
			<div className="flex justify-center gap-2 px-1">
				<ul className="p-2 uppercase">
					<li>APR</li>
					<li>Staked Amount</li>
					<li>Reward</li>
				</ul>
				<ul className="p-2 uppercase">
					<li>111 %</li>
					<li>2344 mommoth</li>
					<li>235656 tusk</li>
				</ul>
			</div>
			<div className="grid grid-cols-3 gap-2">
				<MyButton size="small">APPROVE</MyButton>
				<MyButton size="small">CLAIM</MyButton>
				<MyButton size="small">UnStack</MyButton>
			</div>
		</CardContainer>
	);
};
export default Card;
