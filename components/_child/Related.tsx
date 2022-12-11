import Image from "next/image";
import Link from "next/link";
import Fetcher from "../../lib/fetcher";
import Author from "./Author";
import Spinner from "./Spinner";
import ErrorComponent from "./Error";

import { Post as PostType } from "../../types";

const Related = () => {
    const { data: posts, isLoading, isError } = Fetcher("posts");

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <ErrorComponent></ErrorComponent>;

    return (
        <section className="pt-20">
            <h1 className="py-10 text-3xl font-bold">Related</h1>

            <div className="flex flex-col gap-10">
                {posts.map((post: PostType) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
        </section>
    );
};
export default Related;

type PostProps = {
    post: PostType;
};

function Post({ post }: PostProps) {
    return (
        <div className="flex gap-5">
            <div className="image self-start">
                <Link href={`/posts/${post.id}`}>
                    <Image src={post.img} className="rounded" width={300} height={200} alt="" />
                </Link>
            </div>
            <div className="info flex flex-col justify-center">
                <div className="cat">
                    <Link href={`/posts/${post.id}`} className="text-orange-600 hover:text-orange-800">
                        {post.category}
                    </Link>
                    <Link href={`/posts/${post.id}`} className="text-gray-800 hover:text-gray-600">
                        - {post.published}
                    </Link>
                </div>
                <div className="title">
                    <Link
                        href={`/posts/${post.id}`}
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
