import React from "react";
import Slider from "./Slider";

const Testimonios = () => {
	return (
		<section className="w-full text-center my-12">
			<img
				src="/img/testimonios-sign-color.png"
				alt="testimonios"
				width="200px"
				className="mx-auto my-6"
			/>
			<Slider />
		</section>
	);
};

export default Testimonios;
