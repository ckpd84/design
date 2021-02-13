import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="es">
				<Head>
					<meta
						name="description"
						content="Necesitas renovar tu casa, tu espacio de trabajo? ADesign es la solución. Diseño de Interior a tu medida."
					/>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="preload" as="style" href="styles/tailwind.css" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
