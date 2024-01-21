/** @format */

import React from "react";

const AboutUs = () => {
	return (
		<div className="flex flex-col justify-between gap-10 bg-neutral-900 py-10 px-40 font-['ThaleahFat']">
			<div className="flex flex-col">
				<p className="text-amber-400 text-xl font-medium uppercase leading-tight">
					Easy step
				</p>
				<p className="text-neutral-400 text-[40px] font-medium uppercase">
					How to earn
				</p>
			</div>
			<div className="flex flex-row gap-2">
				<div className="w-[38.11px] h-[140px] text-[70px] font-normal font-['PixelCaps'] uppercase leading-[100px] text-teal-400">
					1
				</div>
				<div className="w-[198px] h-[69px] text-neutral-400 text-2xl font-medium font-['ThaleahFat'] leading-[30px]">
					mint Mammoth, stake Mammoth, earn Tusk
				</div>
				<div className="w-[52.11px] h-[140px] text-[70px] font-normal font-['PixelCaps'] uppercase leading-[100px] text-indigo-500">
					2
				</div>
				<div className="w-[350px] h-[69px] text-neutral-400 text-2xl font-medium font-['ThaleahFat'] leading-[30px] pl-8">
					The amount of Trunk you get is set by Dynamic APY based on PLSX price
					performance
				</div>
				<div className="w-[53.31px] h-[140px] text-[70px] font-normal font-['PixelCaps'] uppercase leading-[100px] pl-1 text-yellow-400">
					3
				</div>
				<div className="w-[200px] h-[69px] text-neutral-400 text-2xl font-medium font-['ThaleahFat'] leading-[30px] pl-8">
					stake Tusk to earn PulseX on top of your staked PulseX
				</div>
			</div>
			<p className="text-amber-300 text-2xl font-normal leading-[10px] font-['Press Start 2P'] text-center">
				Mammoth will be pegged to PulseX which means it will follow PulseX Price
			</p>
			<p className="text-black text-[30px] font-medium font-['ThaleahFat'] text-center">
				💰💰💰💰
			</p>
			<p className="text-neutral-400 text-2xl font-normal leading-[10px] font-['Press Start 2P'] text-center">
				If you have PulseX you can mint Mammoth
			</p>
			<div className="flex flex-row items-center">
				<div className="w-[286px] h-[180px] pl-[55px] pr-14 bg-neutral-800 rounded-lg border border-green-400 justify-center items-center inline-flex">
					<div className="text-green-400 text-[52px] font-medium font-['ThaleahFat']">
						staking
					</div>
				</div>
				<div className="w-[450px] h-[167px] pl-[69px] pr-[70px] pt-14 pb-[55px] bg-neutral-800 rounded-lg border border-yellow-600 justify-center items-center inline-flex ml-[-16px] z-index-1">
					<div className="text-center text-yellow-600 text-[52px] font-medium font-['ThaleahFat']">
						Dynamic APY
					</div>
				</div>
				<label className="w-[429px] h-[120px] text-center text-[52px] relative bg-neutral-800 text-red-500 rounded-lg border border-red-500 ml-[-16px] z-index-2 pt-4">
					Earn & Tusk
				</label>
			</div>
		</div>
	);
};
export default AboutUs;
