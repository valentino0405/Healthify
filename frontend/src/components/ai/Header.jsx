import { useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react"; // Clerk import

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
            {/* Corrected Image Path for Vite */}
            <img src="/images/logo.png" width={100} height={100} alt="logo" />

            <ul className="hidden md:flex gap-6">
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === "/dashboard" && "text-primary font-bold"}`}>
                    Dashboard
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === "/dashboard/questions" && "text-primary font-bold"}`}>
                    Questions
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === "/dashboard/upgrade" && "text-primary font-bold"}`}>
                    Upgrade
                </li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === "/dashboard/how" && "text-primary font-bold"}`}>
                    How it Works?
                </li>
            </ul>

            {/* Clerk UserButton */}
            <UserButton />
        </div>
    );
};

export default Header;
