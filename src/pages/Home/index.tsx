/** @format */

import React from "react";
import styled from "styled-components";
import HomeLogo from "assets/images/background.jpg";
import { MyButton } from "components/common/Button";
import LabelCard from "components/common/LabelCard";
import Card from "components/common/Card";

const HomeContainer = styled.div.attrs(() => ({
	className: `flex flex-col h-120`,
}))`
	background-image: url(${HomeLogo});
	background-size: cover;
	// background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;
const Main = () => {
	return (
		<HomeContainer id="app">
			<div className="grid grid-cols-12">
				<div className="flex flex-col col-start-3 col-span-8 pt-2">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<label className="w-[276px] h-16 text-green-500 text-[28px] font-normal font-['Digitizer'] uppercase leading-[64px]">
								Explain
							</label>
							<p className=" h-[30px] text-gray-200 text-xl font-normal font-['Digitizer'] leading-[10px]">
								Pulsemax Finance, $MAX is pegged to the price of $DAI
							</p>
						</div>
						<MyButton size="large">CONNECT WALLET</MyButton>
					</div>
					<div className="flex justify-center gap-6 pt-4">
						<LabelCard buttonShow={true} />
						<LabelCard buttonShow={false} />
					</div>
					<div className="px-48">
						<Card />
						<Card />
					</div>
					<div className="bg-neutral-900 bg-opacity-70"></div>
				</div>
			</div>
		</HomeContainer>
	);
};
export default Main;
