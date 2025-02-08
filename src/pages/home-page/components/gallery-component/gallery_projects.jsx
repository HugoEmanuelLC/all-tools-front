import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import bg2 from '/bg2.webp';
// import bg3 from '/bg3.webp';
// import bckg_wawmomo from '/bckg-wawmomo.webp';
// import bckg_wawmomo_dash from '/bckg-wawmomo-dash.webp';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// slider images
import '@splidejs/react-splide/css';


/**
    @Gallery_projects:
    @description: max 2 Project_item
    @param: children
    @return: JSX.Element
*/ 
export function Gallery_projects({children}){

    useEffect(() => {
        // new Splide('.splide', {
        //     classes: {
        //         arrows: 'splide__arrows',
        //         arrow : 'splide__arrow',
        //         prev  : 'splide__arrow--prev',
        //         next  : 'splide__arrow--next',
        //     },
        //     perPage: 1,
        // }).mount();
    }, []);

    return(
        <section className="gallery_projects">
            <div className="container">
                <div className="list_gallery">
                    {children}
                </div>

                {/* <div className="list_gallery">
                    <div className="gallery_img">
                        <div className="bckg_img" 
                        style={{"backgroundImage": "url(" + bg2 + ")"}}
                        >PLACE VIDE</div>
                    </div>
                    <div className="gallery_img">
                        <div className="bckg_img" 
                        style={{"backgroundImage": "url(" + bg2 + ")"}}
                        >PLACE VIDE</div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}



/**
    @Project_item:
    @param: children {img1, img2, title, description, btnOrTagA, linkTxt, linkHref, fnc()} is a tag link (a) to other page false: is a button.
    @children.img1: imageName or null.
    @children.img2: imageName or null.
    @children.btnOrTagA: 
        - "navlink" 
        - "button" 
        - "a"
        - "disabled" 
    @children.linkHref: link to other screen or website
    @children.fnc(): alert()
    @return: JSX.Element
*/ 
export function Project_item({children}){
    const [description, setDescription] = useState([]);

    useEffect(() => {
        // children.description.includes(".") && console.log("voir projet")
        let tab = children.description.split(".");
        tab = tab.filter((el) => el !== "")
        let newTab = [];
        tab.forEach((el) => newTab.push(el.trim()+".") );
        setDescription(newTab);
    }, [children.description]);

    return(
        <div className="gallery_img">
            <Splide hasTrack={ false } 
            options={ {
                rewind: true,
                } }>
                <SplideTrack>

                    {children?.imgTab && children?.imgTab.map((el, index) =>
                        <SplideSlide key={index}>
                            <div className="bckg_img" 
                            style={{"backgroundImage": "url(" + el + ")"}}
                            ></div>
                        </SplideSlide>
                    )}

                    <SplideSlide>
                            <div className="infos">
                                <h3 className="title">{children.title}</h3>
                                {/* <p className="description">{children.description}</p> */}
                                <div className="description">
                                    {description?.map((el, index) => 
                                        <p key={index} >{el}</p>
                                    )}
                                </div>

                                {children?.btnOrTagA == "disabled" && 
                                <button className={"button disabled"} disabled>
                                    {children?.linkTxt}
                                </button>}

                                {children?.btnOrTagA == "navlink" && 
                                <NavLink to={children?.linkHref} className={"button"}>
                                    {children?.linkTxt}
                                </NavLink>}

                                {children?.btnOrTagA == "button" && 
                                <button onClick={() => children?.fnc()} className={"button"}>
                                    {children?.linkTxt}
                                </button>}

                                {children?.btnOrTagA == "a" &&
                                <a href={children?.linkHref} className={"button"} target="_blank">
                                    {children?.linkTxt}
                                </a>}
                            </div>
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows"></div>
            </Splide>
        </div>
    );
    
}