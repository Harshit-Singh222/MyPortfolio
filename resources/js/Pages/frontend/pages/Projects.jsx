import HomeLayout from "@/Layouts/HomeLayout.jsx";
import ProjectCard from "@/Pages/frontend/component/ProjectCard.jsx";
import {Head, Link} from "@inertiajs/react";

export default function Projects() {
    return (
        <HomeLayout>
            <Head title="Projects"/>
            <div className="flex lg:h-[calc(100vh-12rem)] justify-center items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <a target="_blank" href="https://github.com/Harshit-Singh222/PMS">
                        <ProjectCard image={'pma.png'} toolTip="Project Management Website" />
                    </a>
                    <a target="_blank" href="https://github.com/Harshit-Singh222/WA">
                        <ProjectCard image={'wa.png'} toolTip="Weather Web App" />
                    </a>
                    <Link href={route('home')}>
                        <ProjectCard image={'portfolio.png'} toolTip="Portfolio Website" />
                    </Link>
                    <a target="_blank" href="https://github.com/Harshit-Singh222/Chat-App">
                        <ProjectCard image={'ca.png'} toolTip="Chat Application" />
                    </a>
                    <Link href={route('projects')}>
                        <ProjectCard image={'portfolio.png'} toolTip="Coming Soon" />
                    </Link>
                    <Link href={route('projects')}>
                        <ProjectCard image={'portfolio.png'} toolTip="Coming Soon" />
                    </Link>
                </div>
            </div>
        </HomeLayout>
    );
}
