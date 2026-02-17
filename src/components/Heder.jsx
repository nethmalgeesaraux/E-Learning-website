import React from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { navItems } from "../constant/data";

const Header = () => {

    const [isOpne, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="w-full py-5">
            <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
                {/* Logo */}
                <a href="#">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        width={170}
                        height={50}
                        className="object-contain"
                    />
                </a>

                {/* Menu btn (visible on mobile) */}
                <button
                    className="lg:hidden text-grey-15"
                    aria-label="Open menu"
                    onClick={handleClick}
                >
                    <RiMenuLine size={24} />
                </button>

                {/* Mobile menu */}
                <nav className={`navbar ${isOpne ? "active" : "" }`}>
                    {/* Close menu */}
                    <button
                        className="absolute top-8 right-8"
                        aria-label="Close menu"
                        onClick={handleClick}
                    >
                        <RiCloseLine size={30} />
                    </button>

                    {/* list */}
                    <ul className="space-y-5 text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className="text-lg font-medium hover:text-orange-50 transition-colors"
                                    onClick={handleClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* login btn */}
                    <button className="primary-btn mt-12 max-w-40 w-full" onClick={handleClick}>
                        Login
                    </button>
                </nav>

                {/* Lg Menu */}
                <div className="max-lg:hidden flex items-center gap-10 ">
                    {/* Lg list */}
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#" className="hover:text-orange-50 transition-colors font-medium text-lg"
                                >{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Lg login btn */}
                    <button className="primary-btn max-lg:hidden px-3 py-2 text-sm">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
