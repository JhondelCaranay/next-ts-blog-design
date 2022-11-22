import Image from "next/image";
import Link from "next/link";
import Post from "../Post";

type Props = {
    author: {
        name: string;
        img: string;
        designation: string;
    };
};

const Author = ({ author }: Props) => {
    return (
        <div className="author flex py-5">
            <Image src={author.img} width={60} height={60} className="rounded-full" alt="" />
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">
                    {author.name}
                </Link>
                <span className="text-sm text-gray-500">{author.designation}</span>
            </div>
        </div>
    );
};
export default Author;
