import React, { useState,useReducer } from "react";
import "./../styles/App.css";

const states = [{
		name : "Madhya Pradesh",
		description:"Dummy description data for Madhya Pradesh",
		cities :[{
			name : "Indore",
			description:"Dummy description data for Indore",
			towns :[{
				name : "Mhow",
				description:"Dummy description data for Mhow",				
			},{
				name : "Dewas",
				description:"Dummy description data for Dewas",
			}]
		},{
			name : "Bhopal",
			description:"Dummy description data for Bhopal",
			towns :[{
				name : "Manit",
				description:"Dummy description data for Manit",
			},{
				name: "Berasia",
				description:"Dummy description data for Berasia",
			}]
		},{
			name : "Gwalior",
			description:"Dummy description data for Gwalior",
			towns :[{
				name : "Ajaypur",
				description:"Dummy description data for Ajaypur",
			}]
		}]
	},{
		name : "Jharkhand",
		description:"Dummy description data for Jharkhand",
		cities :[{
			name : "Dhanbad",
			description:"Dummy description data for Dhanbad",
			towns :[{
				name : "IIT(ISM) Dhanbad",
				description:"Dummy description data for IIT(ISM) Dhanbad",
			},{
				name : "Hirapur",
				description:"Dummy description data for Hirapur",
			}]
		},{
			name : "Wasseypur",
			description:"Dummy description data for Wasseypur",
			towns :[{
				name : "Sardar khan's",
				description:"Dummy description data for Sardar khan's",
			},{
				name : "Faizal khan's",
				description:"Dummy description data for Faizal khan's",
			}]
		},{
			name : "Mirzapur",
			description:"Dummy description data for Mirzapur",
			towns :[{
				name : "Kaleen bhaiya's",
				description:"Dummy description data for Kaleen bhaiya's",
			},{
				name : "Guddu bhaiya's",
				description:"Dummy description data for Guddu bhaiya's",
			}]
		}]
	},{
		name : "Assam",
		description:"Dummy description data for Assam",
		cities :[{
			name : "Guwhati",
			description:"Dummy description data for Guwhati",
			towns :[{
				name : "Amin",
				description:"Dummy description data for Amin",
			},{
				name : "Jalah",
				description:"Dummy description data for Jalah",
			}]
		},{
			name : "Jungle1",
			description:"Dummy description data for Jungle1",
			towns :[{
				name : "Tiger found at IIT Guwahati",
				description:"Dummy description data for Tiger found at IIT Guwahati",
			},{
				name : "Leopard found in IIT Guwahati",
				description:"Dummy description data for Leopard found in IIT Guwahati",
			}]
		},{
			name : "Tezpur",
			description:"Dummy description data for Tezpur",
			towns :[{
				name : "Dibrugarh",
				description:"Dummy description data for Dibrugarh",
			},{
				name : "Silchar",
				description:"Dummy description data for Silchar",
			}]
		}]
	},{
		name : "Bihar",
		description:"Dummy description data for Bihar",
		cities :[{
			name : "Patna",
			description:"Dummy description data for Patna",
			towns :[{
				name : "Sonpur",
				description:"Dummy description data for Sonpur",
			},{
				name : "Maner",
				description:"Dummy description data for Maner",
			}]
		},{
			name : "Gaya",
			description:"Dummy description data for Gaya",
			towns :[{
				name : "Bakraur",
				description:"Dummy description data for Bakraur",
			},{
				name : "Barachatti",
				description:"Dummy description data for Barachatti",
			}]	
		},{
			name : "Darbhanga",
			description:"Dummy description data for Darbhanga",
			towns :[{
				name : "Singhwara",
				description:"Dummy description data for Singhwara",
			},{
				name : "Jale",
				description:"Dummy description data for Jale",
			}]
		}]
	}];

function App() 
{
	// Do not alter main div
	return (
	<div id="main">
		
	</div>
	);
}


export default App;
