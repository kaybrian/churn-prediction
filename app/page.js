import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Service from "@/components/sections/home1/Service"
import Blog from "@/components/sections/home1/Blog"
import Testimonial from "@/components/sections/home1/Testimonial"
import Cta from "@/components/sections/home1/Cta"
import Partner from "@/components/sections/home1/Partner"
import Project from "@/components/sections/home1/Project"
import Team from "@/components/sections/home1/Team"
import Work from "@/components/sections/home1/Work"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <About />
                <Work />
                <Team />
                <Testimonial />
            </Layout>

        </>
    )
}
