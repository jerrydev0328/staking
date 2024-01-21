/** @format */

import React from "react";

export type MyContextProps = {
	basename?: string;
};

export const MyContext = React.createContext<MyContextProps | null>(null);
