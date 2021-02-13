const Legales = () => {
	return (
		<div className="text-gray-500 tracking-wide pt-6 px-6">
			<div className="flex flex-col md:flex-row items-center justify-between lg:justify-around">
				<div className="flex space-x-2">
					<p>©2021 ADesign</p>
					<a className="text-secondary" href="#!">
						Diseño &hearts; Cecilia Denaro
					</a>
				</div>

				<div className="divide-x divide-gray-500">
					<a href="#!" className="pr-2">
						Términos & Condiciones
					</a>
					<a href="#!" className="pl-2">
						Privacidad
					</a>
				</div>
			</div>
		</div>
	);
};

export default Legales;
