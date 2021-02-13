import ChevronLeft from "components/ui/icons/ChevronLeft";
import ChevronRight from "components/ui/icons/ChevronRight";
import Testimonial from "components/ui/icons/Testimonial";
import React from "react";

const Slider = () => {
	return (
		<div className="slider">
			<ul>
				<li className="space-y-8">
					<Testimonial />
					<p>
						Esta es tu cita testimonial. Es un buen lugar para compartir
						comentarios de los clientes sobre tus últimos proyectos. Agrega
						detalles de clientes para una mayor credibilidad y entusiasma a los
						visitantes del sitio desde el primer día.
					</p>
					<p className="uppercase"> - jane doe</p>
					<div className="text-secondary">
						<ChevronLeft /> <ChevronRight />
					</div>
				</li>
				<li className="space-y-8">
					<Testimonial />
					<p>
						Esta es tu cita testimonial. Es un buen lugar para compartir
						comentarios de los clientes sobre tus últimos proyectos. Agrega
						detalles de clientes para una mayor credibilidad y entusiasma a los
						visitantes del sitio desde el primer día.
					</p>
					<p className="uppercase"> - jane doe</p>
					<div className="text-secondary">
						<ChevronLeft /> <ChevronRight />
					</div>
				</li>
				<li className="space-y-8">
					<Testimonial />
					<p>
						Esta es tu cita testimonial. Es un buen lugar para compartir
						comentarios de los clientes sobre tus últimos proyectos. Agrega
						detalles de clientes para una mayor credibilidad y entusiasma a los
						visitantes del sitio desde el primer día.
					</p>
					<p className="uppercase"> - jane doe</p>
					<div className="text-secondary">
						<ChevronLeft /> <ChevronRight />
					</div>
				</li>
				<li className="space-y-8">
					<Testimonial />
					<p>
						Esta es tu cita testimonial. Es un buen lugar para compartir
						comentarios de los clientes sobre tus últimos proyectos. Agrega
						detalles de clientes para una mayor credibilidad y entusiasma a los
						visitantes del sitio desde el primer día.
					</p>
					<p className="uppercase"> - jane doe</p>
					<div className="text-secondary">
						<ChevronLeft /> <ChevronRight />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Slider;
