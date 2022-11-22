import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
    children: React.ReactNode;
};

const Format = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Next js Blog App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <main>{children}</main>
            </main>
            <Footer />
        </>
    );
};
export default Format;
