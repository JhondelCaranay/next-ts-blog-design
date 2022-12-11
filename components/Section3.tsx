import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/Author";
import { Pagination, A11y } from "swiper";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import Spinner from "./_child/Spinner";
import ErrorComponent from "./_child/Error";
import Fetcher from "../lib/fetcher";
import { Post as PostType } from "../types";

const Section3 = () => {
    const { data: posts, isLoading, isError } = Fetcher("trending");

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorComponent />;

    return (
        <section className="container mx-auto py-16 md:px-20">
            <h1 className="py-12 text-center text-4xl font-bold">Most Popular</h1>

            {/* swiper */}
            <Swiper
                modules={[Pagination, A11y]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                pagination={{ clickable: true }}
            // slidesPerView={2}
            >
                {posts.map((post: PostType) => {
                    return (
                        <SwiperSlide key={post.id}>
                            <Post post={post} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
export default Section3;

type PostProps = {
    post: PostType;
};

function Post({ post }: PostProps) {
    return (
        <div className="grid gap-5 p-4" id="popular">
            <div className="mx-3 px-5 shadow-xl">
                <div className="images">
                    <Link href={`/posts/${post.id}`}>
                        <Image src={post.img} width={500} height={350} alt="" />
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
                            className="text-xl font-bold text-gray-800 hover:text-gray-600 md:text-4xl"
                        >
                            {post.title}
                        </Link>
                    </div>
                    <p className="py-3 text-gray-500">{post.subtitle}</p>
                    <Author author={post.author} />
                </div>
            </div>
        </div>
    );
}
