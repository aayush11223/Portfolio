import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socialLinks = [
    {
        icon: SiGithub,
        href: "https://github.com/aayush11223",
        title: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/aayush-basnet-717594267/",
        title: "LinkedIn",
    },
    {
        icon: BiLogoGmail,
        href: "mailto:aayush9823@gmail.com",
        title: "Email",
    },
];

const Footer = () => {
    return (
        <footer className="w-full border-t bg-white py-6 shadow-sm">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-3">
                <p className="text-lg font-semibold">Aayush Basnet</p>

                <a
                    href="https://aayushbasnet05.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition hover:text-blue-600"
                >
                    aayushbasnet05.com.np
                </a>

                <div className="flex gap-6 text-2xl">
                    {socialLinks.map(({ icon: Icon, href, title }) => (
                        <a
                            key={title}
                            href={href}
                            target={href.startsWith("mailto:") ? "_self" : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            title={title}
                            className="transition hover:scale-110 
                             hover:text-blue-600"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Aayush Basnet. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;