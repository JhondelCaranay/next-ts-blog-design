import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";
import ErrorComponent from "./_child/Error";
import Fetcher from "../lib/fetcher";
import { Post as PostType } from "../types";

const Section4 = () => {
    const { data: posts, isLoading, isError } = Fetcher("posts");

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorComponent />;

    return (
        <section className="container mx-auto py-16 md:px-20" id="category">
            <div className="grid gap-4 lg:grid-cols-2">
                <div className="item">
                    <h1 className="py-12 text-4xl font-bold">Business</h1>
                    <div className="flex flex-col gap-6">
                        {/* posts display only four */}
                        {posts.slice(0, 4).map((post: PostType) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="py-12 text-4xl font-bold">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {/* posts */}
                        {posts.slice(0, 4).map((post: PostType) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Section4;

type Props = {
    post: PostType;
};

function Post({ post }: Props) {
    return (
        <div className="flex gap-5 shadow-md">
            <div className="image self-start">
                <Link href={"#category"}>
                    <Image src={post.img} className="rounded" width={300} height={250} alt="" />
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
                <div className="cat">
                    <Link href={"#category"} className="text-orange-600 hover:text-orange-800">
                        {post.category}
                    </Link>
                    <Link href={"#category"} className="text-gray-800 hover:text-gray-600">
                        - {post.published}
                    </Link>
                </div>
                <div className="title">
                    <Link
                        href={"#category"}
                        className="text-xl font-bold text-gray-800 hover:text-gray-600"
                    >
                        {post.title}
                    </Link>
                </div>
                <Author author={post.author} />
            </div>
        </div>
    );
}
