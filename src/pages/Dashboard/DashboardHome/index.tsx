/** @format */

import { MyButton, PrimaryButton } from "components/common/Button";
import React, { useContext } from "react";
import ButtonImage from "assets/images/button.png";
import { useNavigate } from "react-router-dom";
import { MyContext } from "context/MyContext";
import Mammoth from "assets/images/elephant.png";
import Plsx from "./Plsx";
const DashboardHome: React.FC = () => {
	const navigate = useNavigate();
	const handeClickEnter = () => {
		console.log("enter click");
		navigate("/app");
	};
	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-12 flex-1">
				<div className=" col-start-4 col-span-6 justify-center">
					<p className=" text-white text-center text-[40px] font-medium font-['ThaleahFat']  pt-4">
						Coming soon to pulsechain
					</p>
					<div className="flex flex-row mt-6 pl-8 pt-16">
						<div className="flex-1 justify-start">
							<p className="text-green-900 text-[48px] font-normal font-['Digitizer'] leading-[50px]">
								Mammoth
							</p>
							<p className="text-white text-[24px] font-medium py-4 font-['ThaleahFat']">
								PulseX first synthetic token
							</p>
							<MyButton
								size="large"
								onClick={handeClickEnter}>
								Enter
							</MyButton>
						</div>
						<div className="flex-1">
							<img
								src={Mammoth}
								className="w-100 hidden md:block"
							/>
						</div>
					</div>
				</div>
			</div>
			<Plsx />
		</div>
	);
};
export default DashboardHome;
