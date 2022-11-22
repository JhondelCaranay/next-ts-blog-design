import Slide from "./Slide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Spinner from "./_child/Spinner";
import ErrorComponent from "./_child/Error";
import Fetcher from "../lib/fetcher";
import { Post as PostType } from "../types";

const Section1 = () => {
    const { data: posts, isLoading, isError } = Fetcher("trending");

    if (isLoading) return <Spinner />;
    if (isError) return <ErrorComponent />;

    SwiperCore.use([Autoplay]);

    return (
        <section
            className="background scroll-smooth py-16"
            style={{
                background: "url('/images/banner.png') no-repeat",
                backgroundPosition: "right",
            }}
        >
            <div className="container mx-auto md:px-20">
                <h1 className="pb-12 text-center text-4xl font-bold">Trending</h1>
                {/* <Slide /> */}

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                    }}
                >
                    {posts.map((post: PostType) => {
                        return (
                            <SwiperSlide key={post.id}>
                                <Slide post={post} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};
export default Section1;
