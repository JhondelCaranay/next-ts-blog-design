import Image from "next/image";
import Format from "../../layout/format";
import Author from "../../components/_child/Author";
import Related from "../../components/_child/Related";

const Page = () => {
    return (
        <Format>
            <section className="container mx-auto w-1/2 py-16 md:px-2">
                <div className="flex justify-center">
                    <Author />
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
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it
                            is an almost unorthographic life One day however a small line of blind
                            text by the name of Lorem Ipsum decided to leave for the far World of
                            Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it
                            is an almost unorthographic life One day however a small line of blind
                            text by the name of Lorem Ipsum decided to leave for the far World of
                            Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it
                            is an almost unorthographic life One day however a small line of blind
                            text by the name of Lorem Ipsum decided to leave for the far World of
                            Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it
                            is an almost unorthographic life One day however a small line of blind
                            text by the name of Lorem Ipsum decided to leave for the far World of
                            Grammar. Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>

                <Related />
            </section>
        </Format>
    );
};
export default Page;
