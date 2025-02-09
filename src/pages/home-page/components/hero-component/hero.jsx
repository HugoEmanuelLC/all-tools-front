// Dependencies
import {useEffect, useState} from 'react';
// Images
import pcBacg from '/pcBacg.webp';
import bg2 from '/bg2.webp';

function Hero() {
    const [loadingImage, setLoadingImage] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delai: 500,
            easing: 'ease-in-out',
        });

        loadingImage == null ? setLoadingImage({bg2}) : null;

    }, [loadingImage])

    return (
        <section id="section_hero" className=" ">
            <div className="hero_content" style={loadingImage?.bg2 ? {"backgroundImage": "url(" + bg2 + ")"} : {}}>
                <div className="box_shadow">
                    <div className="intitule " >
                        <div className="h2_box" >
                            <h2>sites web</h2>
                            <h2>app mobile</h2>
                            <h2>cms</h2>
                            <h2>api</h2>
                        </div>
                    </div>

                    <div className="titre">
                        <h1 data-content='développement web'>développement web</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;