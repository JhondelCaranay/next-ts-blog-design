import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newslatter from "./_child/Newslatter";

const Footer = () => {
    const bg = {
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
    };

    return (
        <footer className="bg-gray-50" style={bg}>
            <Newslatter />
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex justify-center gap-6">
                        <Link href={"/"}>
                            <ImFacebook color="#888888" />
                        </Link>
                        <Link href={"/"}>
                            <ImTwitter color="#888888" />
                        </Link>
                        <Link href={"/"}>
                            <ImYoutube color="#888888" />
                        </Link>
                    </div>

                    <p className="py-5 text-gray-400">
                        Copyright ©2022 All rights reserved | This template is made with by Jhondel
                        and Daily Tuition
                    </p>
                    <p className="text-center text-gray-400">Terms & Condition</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
