import Link from "next/link";

const Nav = () => {
	return (
		<nav
			role="navigation"
			className="uppercase space-x-6 text-center py-2 bg-primary text-colWhite  w-full"
		>
			<Link href="/">inicio</Link>
			<Link href="/historia">mi historia</Link>
			<Link href="/portfolio">portfolio</Link>
			<Link href="/servicios">servicios</Link>
			<Link href="/contacto">contacto</Link>
		</nav>
	);
};

export default Nav;
