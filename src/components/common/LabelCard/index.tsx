/** @format */

import React from "react";
import { MyButton } from "../Button";

interface LabelCardProps {
	buttonShow: boolean;
}
const LabelCard: React.FC<LabelCardProps> = ({ buttonShow }) => {
	return (
		<div className="labelcard_image w-60 h-54 font-['Digitizer']">
			<label className="text-amber-700 text-xl font-normal uppercase font-['Press Start 2P']">
				Mammoth
			</label>
			<div className="flex justify-center gap-2 px-1">
				<ul className="p-2">
					<li>Price</li>
					<li>Market Cap</li>
					<li>Total Supply</li>
				</ul>
				<ul className="p-2">
					<li>$111</li>
					<li>2344</li>
					<li>235656</li>
				</ul>
			</div>
			{buttonShow && <MyButton size="small">APPROVE</MyButton>}
		</div>
	);
};
export default LabelCard;
