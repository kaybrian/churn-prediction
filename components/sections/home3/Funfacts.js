import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function Funfacts() {
    return (
        <>
        {/*Start Fact Counter One*/}
        <section className="fact-counter-one">
            <div className="container">
                <div className="row">
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".1s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-completed-projects"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={10002} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Rows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-happy-clients"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={3} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Missing rows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-winning-award"></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={89} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Model Accurancy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}
                    {/*Start Single Fact Counter*/}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="single-fact-counter wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-fact-counter-inner">
                                <div className="single-fact-counter-icon">
                                    <span className="icon-cup-teas"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span></span>
                                </div>
                                <div className="outer-box">
                                    <div className="count-outer count-box">
                                    <CounterUp end={0} />
                                        <i className="icon-plus-symbol-button"></i>
                                    </div>
                                    <div className="title">
                                        <p>Outliers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Single Fact Counter*/}

                </div>
            </div>
        </section>
        {/*End Fact Counter One*/}

        </>
    )
}
