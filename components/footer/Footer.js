import Contacto from "./Contacto";

const { default: Legales } = require("./Legales");

const Footer = () => {
	return (
		<footer className="w-full bg-colDark text-white overflow-hidden max-h-72">
			<Contacto />
			<Legales />
		</footer>
	);
};

export default Footer;
