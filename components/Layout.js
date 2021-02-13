import Head from "next/head";
import Footer from "./footer/Footer";
import Header from "./header/Header";
const Layout = (props) => {
	return (
		<>
			<Head>
				<title>ADesign | Diseño de Interiores</title>
				<meta name="description" content="ADesign web page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<main className="main">{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
