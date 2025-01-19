import HomeLayout from "@/Layouts/HomeLayout.jsx";
import {Head} from "@inertiajs/react";
import Banner from "@/Pages/frontend/component/Banner.jsx";
import Footer from "@/Pages/frontend/component/Footer.jsx";
import Introduction from "@/Pages/frontend/component/Introduction.jsx";
import useMousePosition from "@/Hooks/useMousePosition.jsx";
import AnimatedCursor from "react-animated-cursor";

export default function Homepage() {

    // const {x, y} = useMousePosition(); TODO check it

    return (
        <HomeLayout>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                // hasBlendMode={true}
                innerStyle={{
                    backgroundColor: '#000000'
                }}
                outerStyle={{
                    border: '3px solid #000000'
                }}
            />
            <Head title="Home"/>
            <div className="flex h-[calc(100vh-13rem)] justify-center items-center">
                <Banner/>
            </div>
            <div id="about" className="flex justify-between lg:mt-12 lg:pt-10 items-center">
                <Introduction/>
            </div>
            <Footer />
        </HomeLayout>
    );
}
