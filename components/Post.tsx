import Image from "next/image";
import Link from "next/link";
import { Post as PostType } from "../types";
import Author from "./_child/Author";

type Props = {
    post: PostType;
};

const Post = ({ post }: Props) => {
    return (
        <div className="item shadow-md">
            <div className="images">
                <Link href={`/posts/${post.id}`}>
                    <Image src={post.img} className="rounded" width={500} height={350} alt="" />
                </Link>
            </div>
            <div className="info flex flex-col justify-center py-4">
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
                {/* limit description length */}
                <p className="py-3 text-gray-500">{post.description.slice(0, 150)}...</p>
                <Author author={post.author} />
            </div>
        </div>
    );
};
export default Post;
