import Link from "next/link";

const About = () => {
	return (
		<div className="flex items-center justify-center lg:justify-around px-2 lg:px-12 py-4 lg:py-16 bg-about lg:bg-none bg-no-repeat bg-cover bg-center">
			<div className="border-t-8 border-secondary px-8 py-12 md:w-1/2 xl:w-1/3 bg-white bg-opacity-40">
				<h2 className="pb-8">acerca del estudio</h2>
				<p className="md:text-base">
					adesign convertirá tus sueños en realidad. Podemos hacer cualquier
					cosa que hayas imaginado para tu hogar o tu área de trabajo. Desde
					2000, nuestros creativos especialistas han estado diseñando los
					lugares más significativos para nuestros clientes. Déjanos guiarte
					hacia un resultado que te encantará.
				</p>
				<p className="md:text-base py-2">
					En resumen, queremos que ames tu espacio. Sabemos que cada detalle es
					crucial. Trabajaremos muy de cerca contigo para comprender lo que
					necesitas, conocer tu estilo y los aspectos más importantes para ti.
				</p>
				<p>
					<Link href="/contacto">Agenda hoy mismo una cita.</Link>
				</p>
			</div>
			<div>
				<img
					src="/img/escritorio-1280.jpg"
					alt="escritorio"
					width="600px"
					className="hidden lg:block"
				/>
			</div>
		</div>
	);
};

export default About;
