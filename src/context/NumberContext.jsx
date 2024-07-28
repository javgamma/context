import React, { createContext, useState, useContext} from "react";

export const NumberContext = createContext(0);

export default function NumberContextProvider({children}) {

    const [userNumber, setUserNumber] = useState(0)
	return(
		<NumberContext.Provider value= {{userNumber,setUserNumber}}>
			{children}
		</NumberContext.Provider>
	)
}