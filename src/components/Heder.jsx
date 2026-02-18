import React from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { navItems } from "../constant/data";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isAuthOpen, setIsAuthOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, setUser] = React.useState(null);
    const [googleReady, setGoogleReady] = React.useState(false);
    const [authError, setAuthError] = React.useState("");
    const tokenClientRef = React.useRef(null);
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => setIsOpen(false);
    const openAuth = () => setIsAuthOpen(true);
    const closeAuth = () => {
        setIsAuthOpen(false);
        setAuthError("");
        setPassword("");
    };

    React.useEffect(() => {
        const savedUser = localStorage.getItem("skillbridge-user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    React.useEffect(() => {
        if (!googleClientId) return;
        if (window.google?.accounts?.oauth2) {
            setGoogleReady(true);
            return;
        }

        const existingScript = document.getElementById("google-identity-script");
        if (existingScript) return;

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.id = "google-identity-script";
        script.onload = () => setGoogleReady(true);
        document.body.appendChild(script);
    }, [googleClientId]);

    const saveSession = (userData) => {
        setUser(userData);
        localStorage.setItem("skillbridge-user", JSON.stringify(userData));
        closeAuth();
    };

    const handleEmailSignIn = (event) => {
        event.preventDefault();
        setAuthError("");

        const trimmedEmail = email.trim();
        if (!trimmedEmail || !password) {
            setAuthError("Please enter both email and password.");
            return;
        }

        const userData = {
            name: trimmedEmail.split("@")[0],
            email: trimmedEmail,
            provider: "email",
        };
        saveSession(userData);
    };

    const handleGoogleSignIn = () => {
        setAuthError("");

        if (!googleClientId) {
            setAuthError("Set VITE_GOOGLE_CLIENT_ID in your .env file to enable Google sign-in.");
            return;
        }

        if (!window.google?.accounts?.oauth2 || !googleReady) {
            setAuthError("Google sign-in is still loading. Please try again.");
            return;
        }

        if (!tokenClientRef.current) {
            tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
                client_id: googleClientId,
                scope: "openid email profile",
                callback: async (tokenResponse) => {
                    if (!tokenResponse?.access_token) {
                        setAuthError("Google sign-in failed. Please try again.");
                        return;
                    }

                    try {
                        const profileResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                            headers: {
                                Authorization: `Bearer ${tokenResponse.access_token}`,
                            },
                        });
                        const profile = await profileResponse.json();

                        saveSession({
                            name: profile?.name || "Google User",
                            email: profile?.email || "",
                            provider: "google",
                        });
                    } catch {
                        setAuthError("Could not fetch Google profile. Please try again.");
                    }
                },
            });
        }

        tokenClientRef.current.requestAccessToken();
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("skillbridge-user");
        closeMenu();
    };

    const userInitial = user?.name?.charAt(0)?.toUpperCase() || "U";

    return (
        <>
        <header className="sticky top-0 z-50 w-full bg-white-97/95 backdrop-blur-sm">
            <div className="container flex items-center justify-between border-b border-b-white-95 py-4">
                {/* Logo */}
                <a href="#home" onClick={closeMenu}>
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
                <nav className={`navbar ${isOpen ? "active" : "" }`}>
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
                                    href={item.href}
                                    className="text-lg font-medium hover:text-orange-50 transition-colors"
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* login btn */}
                    {!user ? (
                        <button className="primary-btn mt-12 max-w-40 w-full" onClick={() => { closeMenu(); openAuth(); }}>
                            Login
                        </button>
                    ) : (
                        <div className="mt-12 space-y-3 w-full max-w-52">
                            <div className="w-10 h-10 rounded-full bg-orange-75 text-grey-15 font-semibold flex items-center justify-center mx-auto">
                                {userInitial}
                            </div>
                            <button className="secondary-btn w-full" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </nav>

                {/* Lg Menu */}
                <div className="max-lg:hidden flex items-center gap-10 ">
                    {/* Lg list */}
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href={item.href} className="hover:text-orange-50 transition-colors font-medium text-lg"
                                >{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Lg login btn */}
                    {!user ? (
                        <button className="primary-btn max-lg:hidden px-3 py-2 text-sm" onClick={openAuth}>
                            Login
                        </button>
                    ) : (
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-orange-75 text-grey-15 font-semibold flex items-center justify-center">
                                {userInitial}
                            </span>
                            <button className="secondary-btn px-3 py-2 text-sm" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </header>
            {isAuthOpen && (
                <div className="fixed inset-0 z-[60] bg-black/35 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl border border-white-95 p-5 sm:p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
                        <button
                            className="absolute top-3 right-3 text-grey-15/70 hover:text-grey-15"
                            onClick={closeAuth}
                            aria-label="Close auth popup"
                        >
                            <RiCloseLine size={22} />
                        </button>

                        <h3 className="text-xl font-semibold">Sign In</h3>
                        <p className="mt-2 text-sm text-grey-15/70">Sign in with your email or Google account.</p>

                        <form onSubmit={handleEmailSignIn} className="mt-5 space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Email"
                                className="w-full h-11 px-3 rounded-md border border-white-95 bg-white-99 outline-none focus:border-orange-75"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                className="w-full h-11 px-3 rounded-md border border-white-95 bg-white-99 outline-none focus:border-orange-75"
                            />
                            <button type="submit" className="primary-btn w-full py-3">
                                Sign in with Email
                            </button>
                        </form>

                        <div className="my-4 h-px bg-white-95" />

                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full h-11 rounded-md border border-white-95 bg-white text-sm font-medium hover:bg-orange-90 transition-colors"
                        >
                            Sign in with Google
                        </button>

                        {authError && (
                            <p className="mt-3 text-sm text-red-500">{authError}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
