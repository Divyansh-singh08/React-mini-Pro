import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		// alert("Upper case has been changed " + text);
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleOnChange = (event) => {
		// console.log("text has clicked");
		setText(event.target.value); //for this function now we can write in the textarea
	};

	// text is a variable whose placed where we want data need to update dynamically
	// text is a default value ' Enter Text here '
	// setText is a update text part help in showing new data on screen
	// using setText we update info
	//this is a state variable
	const [text, setText] = useState(
		"Please Enter SomeText and Convert them in Upper Case"
	);

	//text change using setText function
	// setText("By Divyansh Singh");
	return (
		<>
			<div>
				<h1 style={{ color: "blue", marginTop: "10px" }}>{props.heading}</h1>
				{/* this is the text-Area */}
				<div className="mb-3">
					{/* <label For="myBox" className="form-label">
						Example textarea
					</label> */}
					<textarea
						value={text}
						style={{ border: "2px solid tomato" }}
						className="form-control"
						id="myBox"
						rows="8"
						onChange={handleOnChange}
					></textarea>
				</div>
				<button
					className="btn btn-lg btn-outline-success"
					onClick={handleUpClick}
				>
					ConvertToUpperCase
				</button>
			</div>
		</>
	);
}

// const styles = {

// }
