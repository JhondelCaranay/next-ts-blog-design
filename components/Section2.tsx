import Post from "./Post";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorComponent from "./_child/Error";
import { Post as PostType } from "../types";

const Section2 = () => {
    // const [posts, setPosts] = useState<PostType[]>([]);

    // useEffect(() => {
    //     getPosts().then((posts) => setPosts(posts));

    //     return () => setPosts([]);
    // }, []);

    const { data: posts, isLoading, isError } = Fetcher("posts");

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorComponent />;

    return (
        <section className="container mx-auto py-10 md:px-20">
            <h1 className="py-12 text-center text-4xl font-bold">Latest Posts</h1>

            {/* grid columns */}
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post: PostType) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </section>
    );
};
export default Section2;
