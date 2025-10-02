import { Link, useLocation } from "react-router-dom"
import Button from "./Button";
import logo from "../../assets/school-logo.png"

function Header() {

    const location = useLocation();

    const navLinks = [
        { href: "/", label: "Homes" },
        { href: "/about", label: "About" },
        { href: "/features", label: "Features" },
        { href: "/contact", label: "Contact" },
    ];

    const isActiveLink = (href: string) => {
        return location.pathname === href;
    };

    return (
        <nav id="header" className="sticky top-0 z-50 bg-background border border-border shadow-custom">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                            {/* <span className="text-black font-bold text-xl">F</span> */}
                            <img src={logo} alt="logo" className="" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-2xl text-black">
                                EduManage
                            </span>
                            <span className="text-sm text-gray-500">
                                Smart Management System
                            </span>
                        </div>

                    </Link>

                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`font-medium transition-colors hover:text-primary ${isActiveLink(link.href) ? "text-primary" : "text-muted-foreground"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Login Buttons */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Button primary onClick={() => alert('Student Login')}>Student Login</Button>
                            <Button danger onClick={() => alert('Staff Login')}>Staff Login</Button>
                        </div>
                    </div>


                </div>
            </div>
        </nav >
    )
}

export default Header
