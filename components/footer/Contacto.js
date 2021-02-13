import Facebook from "components/ui/icons/Facebook";
import Instagram from "components/ui/icons/Instagram";
import Mail from "components/ui/icons/Mail";

const Contacto = () => {
	return (
		<section className="flex flex-col items-center justify-center">
			<img
				src="/img/logo-white.png"
				alt="logo ADesign"
				width="200px"
				className="w-44 md:w-48"
			/>

			<div className="text-white flex space-x-4">
				<Mail />
				<Facebook />
				<Instagram />
			</div>
		</section>
	);
};

export default Contacto;
