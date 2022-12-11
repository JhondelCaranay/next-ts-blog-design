import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="flex flex-col items-center py-3  text-center sm:flex-row sm:justify-between xl:container xl:mx-auto">
                <div className="order-2 flex w-96 justify-center py-4 sm:order-1 sm:py-0 md:flex-none">
                    <input type="text" className="input-text" placeholder="Search..." />
                </div>
                <div className="w-80 shrink sm:order-2">
                    <Link href={"/"} className="text-3xl font-bold uppercase">Design</Link>
                </div>
                <div className="order-3 flex w-96 justify-center">
                    <div className="flex gap-6">
                        <Link href="/">
                            <ImFacebook color="#888888" />
                        </Link>
                        <Link href="/">
                            <ImTwitter color="#888888" />
                        </Link>
                        <Link href="/">
                            <ImYoutube color="#888888" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
