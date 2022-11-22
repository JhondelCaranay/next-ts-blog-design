import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
const Related = () => {
    return (
        <section className="pt-20">
            <h1 className="py-10 text-3xl font-bold">Related</h1>

            <div className="flex flex-col gap-10">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
};
export default Related;

function Post() {
    return (
        <div className="flex gap-5">
            <div className="image self-start">
                <Link href={"/"}>
                    <Image
                        src={"/images/img1.jpg"}
                        className="rounded"
                        width={300}
                        height={200}
                        alt=""
                    />
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">
                        Business, Travel
                    </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">
                        - July 3, 2022
                    </Link>
                </div>
                <div className="title">
                    <Link
                        href={"/"}
                        className="text-xl font-bold text-gray-800 hover:text-gray-600"
                    >
                        Your most unhappy customers are your greatest source of learning
                    </Link>
                </div>
                <Author />
            </div>
        </div>
    );
}
