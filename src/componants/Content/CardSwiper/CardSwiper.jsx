import {Navbar, Nav, Button} from 'react-bootstrap';

const CardSwiper = () => {
    return(
        <>
            <h2 className="fontStyle ms-2 mt-5 mb-4">Shop now</h2>
            <div className="swiper-container">
                <div className="swiper-wrapper" id="swiper-wrapper">
                {/* Cards will be injected here */}
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <button id="prev" className="swiper-button">
                    Previous
                </button>
                <button id="next" className="swiper-button">
                    Next
                </button>
                </div>
            </div>
        </>
    )
}

export default CardSwiper