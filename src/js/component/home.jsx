import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center d-flex justify-content-center align-items-center" style={{
			height: "100vh"
		}}>
			<i class="fa-solid fa-clock"></i>
			<div className="">{
				Math.floor(props.counterProp / 100000 % 10)
			}</div>
			<div className="">{
				Math.floor(props.counterProp / 10000 % 10)
			}</div>
			<div className="">{
				Math.floor(props.counterProp / 1000 % 10)
			}</div>
			<div className=""> {
				Math.floor(props.counterProp / 100 % 10)
			}
			</div>
			<div className="">{
				Math.floor(props.counterProp / 10 % 10)
			}</div>
			<div className="">
				{
					props.counterProp % 10
				}
			</div>
		</div>
	);
};

export default Home;
