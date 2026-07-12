import { Link } from "react-scroll";
import { SiMongodb, SiReact, SiNodedotjs, SiExpress } from "react-icons/si";

const Navbar = () => {
    const navLinks = [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <div className="flex items-center gap-4 text-2xl">
                    <a
                        href="https://www.mongodb.com/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 hover:scale-110 transition"
                        title="MongoDB Documentation"
                    >
                        <SiMongodb />
                    </a>

                    <a
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-500 hover:scale-110 transition"
                        title="Express.js Documentation"
                    >
                        <SiExpress />
                    </a>

                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 hover:scale-110 transition"
                        title="React Documentation"
                    >
                        <SiReact />
                    </a>

                    <a
                        href="https://nodejs.org/docs/latest/api/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 hover:scale-110 transition"
                        title="Node.js Documentation"
                    >
                        <SiNodedotjs />
                    </a>
                </div>

                <ul className="flex items-center gap-8 ">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="cursor-pointer  transition hover:text-blue-600"
                            >
                                <p className="text-1xl hover:scale-110">
                                    {link.name}
                                </p>                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;