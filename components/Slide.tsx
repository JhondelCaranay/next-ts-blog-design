import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Post as PostType } from "../types";
type Props = {
    post: PostType;
};

const Slide = ({ post }: Props) => {
    return (
        <div className="grid md:grid-cols-2 md:gap-5">
            <div className="image">
                <Link href={`/posts/${post.id}`}>
                    <Image src={post.img} width={600} height={600} alt="" />
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
                        className="text-3xl font-bold text-gray-800 hover:text-gray-600 md:text-5xl"
                    >
                        {post.title}
                    </Link>
                </div>
                <p className="py-3 text-gray-500">{post.subtitle}</p>
                <Author author={post.author} />
            </div>
        </div>
    );
};
export default Slide;
