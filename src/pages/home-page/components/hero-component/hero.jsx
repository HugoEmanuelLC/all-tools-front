// Dependencies
import {useEffect, useState} from 'react';
// Images
import fondEcran from '/fondEcran.webp';
import bg2 from '/bg2.webp';
import ecran from '/ecran.webp';
import front from '/front.webp';


function Hero() {
    const [loadingImage, setLoadingImage] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delai: 500,
            easing: 'ease-in-out',
        });

        loadingImage == null ? setLoadingImage({bg2, ecran, front, fondEcran}) : null;

    }, [loadingImage])

    return (
        <>
        <section id="section_hero" className=" ">
            <div className="hero_content" style={loadingImage?.bg2 ? {"backgroundImage": "url(" + loadingImage?.bg2 + ")"} : {}}>
                <div className="box_shadow">
                    <div className="intitule " >
                        <div className="h2_box" >
                            <h2>sites web</h2>
                            <h2>applications web</h2>
                            <h2>api's</h2>
                        </div>
                    </div>

                    <div className="titre_animation ">
                        <h1 data-content='développement web'>développement web</h1>
                    </div>
                </div>
            </div>



            <div className="box_space " style={loadingImage?.ecran ? {"backgroundImage": "url('"+loadingImage?.fondEcran+"')"} : {}}>
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