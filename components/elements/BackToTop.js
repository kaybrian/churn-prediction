
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-to-top scroll-to-target d-block" href="#top">
                </a>
            )}
        </>
    )
}