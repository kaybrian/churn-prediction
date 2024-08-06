
import Layout from "@/components/layout/Layout"
import Partner from "@/components/sections/home3/Partner"
import Service from "@/components/sections/home3/Service"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Cta from "@/components/sections/home3/Cta"
import Testimonial from "@/components/sections/home3/Testimonial"
import Funfacts from "@/components/sections/home3/Funfacts"
import Project from "@/components/sections/home3/Project"
import Skill from "@/components/sections/home3/Skill"
import Get from "@/components/sections/home3/Get"


export default function Home() {

    return (
        <>
            <div className="homestyle3">
                <Layout headerStyle={3} footerStyle={3}>
                    <Banner />
                    <About />
                    <Funfacts />
                    <Project />
                </Layout>
            </div>
        </>
    )
}
