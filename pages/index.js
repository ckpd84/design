import Bienvenida from "components/home/Bienvenida";
import Hero from "components/home/Hero";
import Servicios from "components/home/Servicios";
import Testimonios from "components/home/Testimonios";

export default function Home() {
	return (
		<section>
			<Hero />
			<Bienvenida />
			<Servicios />
			<Testimonios />
		</section>
	);
}
