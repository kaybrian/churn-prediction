
export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>

            <div className={`search-popup ${isPopup ? "active" : ""}`}>
                <div className="search-popup__overlay search-toggler">
                    <div className="search-close-btn" onClick={handlePopup}>
                        <i className="icon-plus"></i>
                    </div>
                </div>
                <div className="search-popup__content">
                    <form action="#">
                        <label className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="btn-one">
                            <i className="icon-search-interface-symbol"></i>
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
