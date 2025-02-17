// Dependencies
import {useEffect, useState} from 'react';
// Images
import fondEcran from '/home/fondEcran.webp';
import bg2 from '/home/bg2.webp';

// import front from '/home/front.webp';


function Hero() {
    const [loadingImage, setLoadingImage] = useState(null);

    useEffect(() => {

        loadingImage == null ? setLoadingImage({bg2, fondEcran}) : null;

    }, [loadingImage])

    return (
        <>
        <section id="section_hero" className=" ">
            <div className="hero_content" style={loadingImage?.bg2 ? {"backgroundImage": "url(" + loadingImage?.bg2 + ")"} : {}}>
                <div className="box_shadow">
                    <div className="intitule " >
                        <div className="h2_box" >
                            <h2 data-aos="zoom-out-up">sites web</h2>
                            <h2 data-aos="zoom-out-up">applications web</h2>
                            <h2 data-aos="zoom-out-up">api's</h2>
                        </div>
                    </div>

                    <div className="titre_animation ">
                        <h1 data-content='développement web'>développement web</h1>
                    </div>
                </div>
            </div>



            <div className="box_space " style={loadingImage?.fondEcran ? {"backgroundImage": "url('"+loadingImage?.fondEcran+"')"} : {}}>
                <div className="box_shadow"></div>
            </div>

            {/* <div className="box_space " style={loadingImage?.front ? {"backgroundImage": "url('"+loadingImage.front+"')"} : {}}>
                <div className="box_shadow"></div>
            </div> */}
        </section>

        {/* <section className="section_box_space">
            <div className="box_space " style={loadingImage?.ecran ? {"backgroundImage": "url('"+loadingImage.ecran+"')"} : {}}>
                <div className="box_shadow"></div>
            </div>

            <div className="box_space " style={loadingImage?.front ? {"backgroundImage": "url('"+loadingImage.front+"')"} : {}}>
                <div className="box_shadow"></div>
            </div>
        </section> */}
        </>
    )
}

export default Hero;