const Newslatter = () => {
    return (
        <section className="mt-20 bg-gray-50">
            <div className="container mx-auto py-16 text-center md:px-20">
                <h1 className="text-3xl font-bold">Subscribe Newslatter</h1>

                <div className="py-4">
                    <input
                        type="text"
                        className="focus:shadow-outline w-9/12 rounded border py-3 px-3 text-gray-700 shadow focus:outline-none"
                        placeholder="Enter Your Email"
                    />
                </div>

                <button className="rounded-full bg-orange-400 px-20 py-3 text-xl text-gray-50">
                    Subscribe
                </button>
            </div>
        </section>
    );
};
export default Newslatter;
