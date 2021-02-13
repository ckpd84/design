import Link from "next/link";

const Servicios = () => {
	return (
		<section className="bg-servicios text-white bg-center bg-cover w-full">
			<h2 className="py-14 text-center  bg-colDark bg-opacity-70">
				nuestros servicios
			</h2>
			<div className="bg-colDark  bg-opacity-70 flex flex-col lg:grid lg:grid-cols-3 justify-center items-center">
				<div className="flex flex-col justify-center items-center py-6">
					<img
						src="/img/plano-1280.jpg"
						alt="Planificación del espacio"
						className="w-3/4 lg:w-96 h-96 object-cover object-center"
						loading="lazy"
					/>
					<h3 className="py-4 w-3/4 text-center">planificación del espacio</h3>
					<Link href="/contacto">
						<button className="uppercase text-white bg-black py-2 px-8 w-22 cursor-pointer tracking-widest">
							concertar cita
						</button>
					</Link>
					<div className="w-96 h-px mt-4 bg-white"></div>
				</div>

				<div className="flex flex-col justify-center items-center py-6">
					<img
						src="/img/local-1280.jpg"
						alt="interiorismo comercial"
						className="w-3/4 lg:w-96 h-96 object-cover object-center"
						loading="lazy"
					/>
					<h3 className="py-4 w-3/4 text-center">interiorismo comercial</h3>
					<Link href="/contacto">
						<button className="uppercase text-white bg-black py-2 px-8 w-22 cursor-pointer tracking-widest">
							concertar cita
						</button>
					</Link>
					<div className="w-96 h-px mt-4 bg-white"></div>
				</div>

				<div className="flex flex-col justify-center items-center pb-6">
					<img
						src="/img/luz-1280.jpg"
						alt="diseño de iluminación"
						className="w-3/4 lg:w-96 h-96 object-cover object-center"
						loading="lazy"
					/>
					<h3 className="py-4 w-3/4 text-center">diseño de iluminación</h3>
					<Link href="/contacto">
						<button className="uppercase text-white bg-black py-2 px-8 w-22 cursor-pointer tracking-widest">
							concertar cita
						</button>
					</Link>

					<div className="w-96 h-px mt-4 bg-white"></div>
				</div>
			</div>
		</section>
	);
};

export default Servicios;
