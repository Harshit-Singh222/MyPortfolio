import HomeLayout from "@/Layouts/HomeLayout.jsx";
import Introduction from "@/Pages/frontend/component/Introduction.jsx";
import {Head} from "@inertiajs/react";

export default function About() {
    return (
        <HomeLayout>
            <Head title="About"/>
            <div className="flex justify-between lg:mt-12 lg:pt-10 items-center">
                <Introduction />
            </div>
        </HomeLayout>
    );
}
