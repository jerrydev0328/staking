/** @format */

import React from "react";
import DashboardHome from "./DashboardHome";
import { MyContext, MyContextProps } from "context/MyContext";
import styled from "styled-components";
import Logo from "assets/images/logo.gif";
import AboutUs from "./AboutUs";
const contextValue: MyContextProps = {
	basename: "/myapp",
};
const DashboardContainer = styled.div.attrs(() => ({
	className: `flex flex-col h-screen`,
}))`
	background-image: url(${Logo});
	background-size: cover;
`;
const Dashboard = () => {
	return (
		<MyContext.Provider value={contextValue}>
			<div className="flex flex-col">
				<DashboardContainer>
					<DashboardHome />;
				</DashboardContainer>
				<AboutUs />
			</div>
		</MyContext.Provider>
	);
};
export default Dashboard;
