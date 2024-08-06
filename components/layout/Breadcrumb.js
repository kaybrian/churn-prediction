import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
        {/*Start Page Header*/}
        <section className="page-header">
            <div className="shape1 rotate-me"><img src="assets/img/shape/page-header-shape1.png" alt=""/></div>
            <div className="shape2 float-bob-x"><img src="assets/img/shape/page-header-shape2.png" alt=""/></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <ul className="thm-breadcrumb">
                        <li><Link href="/"><span className="fa fa-home"></span> Home</Link></li>
                        <li><i className="icon-right-arrow-angle"></i></li>
                        <li className="color-base">{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
        {/*End Page Header*/}

        </>
    )
}
