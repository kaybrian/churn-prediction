export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="d" className="letters-loading">
                                d
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                I
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="g" className="letters-loading">
                                g
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="N" className="letters-loading">
                                N
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                        </div>
                    </div>   
                </div>
            </div>
        </div>


        </>
    )
}
