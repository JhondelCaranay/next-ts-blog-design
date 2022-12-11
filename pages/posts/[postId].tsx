import Image from "next/image";
import Format from "../../components/layout/format";
import Related from "../../components/_child/Related";
import { Post as PostType } from "../../types";
import ErrorComponent from "../../components/_child/Error";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPost, getPosts } from "../../lib/helper";
import Author from "../../components/_child/Author";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import Spinner from "../../components/_child/Spinner";
import Fetcher from "../../lib/fetcher";

type PageProps = {
    fallback: any;
};

type ArticleProps = {
    post: PostType;
};

const Page = ({ fallback }: PageProps) => {
    // return <Article post={post}></Article>;

    const router = useRouter();
    const { postId } = router.query;

    const { data: post, isLoading, isError } = Fetcher(`posts/${postId}`);

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <ErrorComponent></ErrorComponent>;

    return (
        <SWRConfig value={{ fallback }}>
            <Article post={post}></Article>
        </SWRConfig>
    );
};

const Article = ({ post }: ArticleProps) => {
    return (
        <Format>
            <section className="container mx-auto w-1/2 py-16 md:px-2">
                <div className="flex justify-center">
                    {post.author && <Author author={post.author} />}
                </div>

                <div className="post py-10">
                    <h1 className="pb-5 text-center text-4xl font-bold">
                        Your most unhappy customers are your greatest source of learning
                    </h1>

                    <p className="text-center text-xl text-gray-500">
                        Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.
                    </p>

                    <div className="py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600} alt=""></Image>
                    </div>

                    <div className="content flex flex-col gap-4 text-lg text-gray-600">
                        {post.description.split(";").map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>

                <Related />
            </section>
        </Format>
    );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
    const posts: PostType[] = await getPosts();

    const paths = posts.map((value: PostType) => ({
        params: {
            postId: value.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false, // if false, then 404 page will be shown
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post: PostType = await getPost(parseInt(params?.postId as string));

    // return {
    //     props: {
    //         post,
    //     },
    // };
    return {
        props: {
            fallback: {
                "/api/posts": post,
            },
        },
    };
};
