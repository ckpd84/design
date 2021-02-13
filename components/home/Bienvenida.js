import Link from "next/link";

const Bienvenida = () => {
	return (
		<div className="w-full lg:w-3/4 mx-auto my-24 lg:flex lg:flex-row items-center lg:space-x-4">
			<div className="text-center px-8 pb-8 flex flex-col justify-center items-center lg:w-1/2">
				<h2 className="pb-8 w-3/4">bienvenid@ al estudio</h2>
				<p className="text-base w-3/4">
					En ADesign empleamos un método de trabajo que nos permite comprender
					las soluciones que necesitas. Trabajamos directamente contigo para
					desarrollar las ideas que tengas en mente. Después diseñamos un estilo
					que refleje tanto tus ideas y necesidades como tu personalidad, para
					finalmente crear una habitación espectacular.
				</p>
			</div>
			<div className="flex flex-col  items-center justify-center space-y-8">
				<div className="flex flex-col  md:flex-row md:space-x-2 justify-center items-center">
					<div className="flex flex-col justify-center items-center">
						<img
							src="/img/luces-1280.jpg"
							alt="Luces"
							className="object-center object-cover h-48 w-60"
							loading="lazy"
						/>
						<p>Rediseña tu espacio.</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<img
							src="/img/pots-1280.jpg"
							alt="Luces"
							className="object-center object-cover h-48 w-60"
							loading="lazy"
						/>

						<p>Reinventa tu vida.</p>
					</div>
				</div>
				<Link href="/contacto">
					<button className="uppercase text-white bg-black py-2 px-8 w-22 cursor-pointer tracking-widest ">
						diseña la casa de tus sueños
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Bienvenida;
