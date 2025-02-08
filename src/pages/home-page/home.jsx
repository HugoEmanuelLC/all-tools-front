import React, {useEffect, useState} from "react";

import Hero from "./components/hero-component/hero";
import LazyLoadImage from "../../components/LazyLoadImage";
import {Gallery_projects, Project_item} from "./components/gallery-component/gallery_projects";

import ecran from '/ecran.webp';
import pcBacg from '/pcBacg.webp';
import orange_white from '/orange-white.webp';
import front from '/front.webp';



// images projet wawmomo
import bckg_wawmomo from '/bckg-wawmomo.webp';
import bckg_wawmomo_dash from '/bckg-wawmomo-dash.webp';

// images projet lex&co
import lexandco1 from '/lexandco1.webp';
import lexandco2 from '/lexandco2.webp';
import lexandco3 from '/lexandco3.webp';


function Home() {
    const [loadingImage, setLoadingImage] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delai: 500,
            easing: 'ease-in-out',
        });

        loadingImage == null ? setLoadingImage({ecran, front, orange_white}) : null;
        console.log("loadingImage home : ", loadingImage)
    }, [loadingImage])

    return (
        <div id="homePage">

            <div className="sticky_box">
                <Hero />

                <section className="section_box_space">
                    <div className="box_space " style={loadingImage?.ecran ? {"backgroundImage": "url('"+loadingImage.ecran+"')"} : {}}>
                        <div className="box_shadow"></div>
                    </div>

                    <div className="box_space " style={loadingImage?.front ? {"backgroundImage": "url('"+loadingImage.front+"')"} : {}}>
                        <div className="box_shadow"></div>
                    </div>

                    {/* <LazyLoadImage
                        src={ecran}
                        alt="Description de l'image"
                        className="box_space "
                        >
                        <div className="box_shadow"></div>
                    </LazyLoadImage>

                    <LazyLoadImage
                        src={front}
                        alt="Description de l'image"
                        className="box_space "
                        >
                            <div className="box_shadow"></div>
                    </LazyLoadImage> */}



                    {/* <div className="box_space">
                        <LazyLoadImage
                            src={ecran}
                            effect="blur"
                            className="box_space_img"
                            height="100%"
                            width="100%"
                            style={{"objectFit": "cover", "position": "fixed", "top": "0", "left": "0", "zIndex": "-1"}}
                            alt="fond ecran de la section hero"
                        />
                        <div className="box_shadow"></div>
                    </div> */}

                    
                </section>

                {/* <div className="box_space sticky"  ></div> */}

                {/* indecit */}

                {/* <div className="titreH2 sticky" style={{"backgroundImage": "url("  + ")"}}>
                    <h2>a propos</h2>
                </div> */}


                <section id="skills_services" className=" ">
                    <div className="container">

                        <div className="box_list_skills">
                            <h3>Html5 / Sass</h3>
                            <h3>React js</h3>
                            <h3>Node js / Express js</h3>
                            <h3>MySql / Mongodb</h3>
                        </div>

                        <div className="box_list">
                            <ul>
                                <li className="titreList">What I do?</li>
                                <li>Front-End Development (HTML, CSS, JavaScript)</li>
                                <li>Back-End Development (Node.js, PHP)</li>
                                <li>Content Management Systems (CMS) Development</li>
                                <li>API Development and Integration</li>
                                <li>Responsive Web Design (Mobile-First)</li>
                            </ul>
                            
                            <ul>
                                <li className="titreList">Why do I do it?</li>
                                <li>To empower businesses with a strong online presence.</li>
                                <li>To create user-friendly and accessible web experiences.</li>
                                <li>To help clients achieve their business goals through effective web solutions.</li>
                            </ul>
                            
                            <ul>
                                <li className="titreList">How do I do it?</li>
                                <li>Agile Development Methodology</li>
                                <li>User-Centered Design</li>
                                <li>Collaborative Approach with Clients</li>
                                <li>Thorough Testing and Quality Assurance</li>
                                <li>Focus on Performance and Security</li>
                            </ul>
                            
                            <ul>
                                <li className="titreList">Location</li>
                                <li>province: brabant wallon</li>
                                <li>city: Braine-L'Alleud</li>
                            </ul>
                        </div>
                    </div>
                </section>
                

                <section className="section_box_space">
                    <div className="box_space " style={loadingImage?.orange_white ? {"backgroundImage": "url('"+loadingImage.orange_white+"')"} : {}}>
                        <div className="box_shadow with_title">
                            <h3>realisations</h3>
                        </div>
                    </div>
                </section>
                <div className="div5px"></div>


                <Gallery_projects>
                    <Project_item>{{
                        imgTab: [lexandco1, lexandco3, lexandco2],
                        title: "mvp - app mobile - lex&co.",
                        description: `Leadership d'une équipe de 2 stagiaires dans le cadre de mon stage pour la création d'un MVP de réseau social pour Android et iOS, 
                        utilisant React Native avec le framework Expo, Appwrite pour le backend, et configuration d'un VPS et d'un DNS. 
                        Ce projet démontre ma capacité à gérer une équipe, 
                        à concevoir une architecture technique solide et à déployer une application complète.`,
                        btnOrTagA: "a",
                        linkTxt: "visiter l'app",
                        linkHref: "https://play.google.com/store/apps/details?id=com.lexandco.lexandco",
                        fnc: () => {}
                    }}</Project_item>
                    
                    <Project_item>{{
                        imgTab: [bckg_wawmomo, bckg_wawmomo_dash],
                        title: "restaurant - WAWMOMO",
                        description: `Développement d'un site web dynamique avec dashboard de gestion de données pour un restaurant, 
                        utilisant React js pour l'interface utilisateur, Node js / Express js pour le backend et MySQL pour la base de données. 
                        Ce projet offre une solution complète pour la visualisation et le contrôle des données, 
                        avec une architecture robuste et évolutive.`,
                        btnOrTagA: "button",
                        linkTxt: "en savoir plus",
                        linkHref: "https://wawmomo.be",
                        fnc: () => alert(`
                            La nouvelle version du site web 
                            est en cours de développement !
                        `)
                    }}</Project_item>
                </Gallery_projects>

                {/* <Gallery_projects> */}
                    {/* <Project_item>{{
                        imgTab: [],
                        title: "ce site web - hugoclavinas.com",
                        description: `Conception et développement d'un site web dynamique et interactif, 
                        intégrant des fonctionnalités avancées telles que l'authentification des utilisateurs et un système de réservation en ligne. 
                        Ce projet démontre ma capacité à créer des solutions web complètes et fonctionnelles, 
                        en utilisant des technologies modernes et des plugins performants.`,
                        btnOrTagA: "disabled",
                        linkTxt: "inactive",
                        linkHref: "",
                        fnc: () => {}
                    }}</Project_item> */}
                    
                    {/* <Project_item>{{
                        img1: bckg_wawmomo,
                        img2: bckg_wawmomo_dash,
                        title: "Sandwicherie",
                        description: `description. description. description.`,
                        btnOrTagA: "button",
                        linkTxt: "en savoir plus",
                        linkHref: "",
                        fnc: () => alert(`
                            Pas de projet pour le moment!     
                        `)
                    }}</Project_item> */}
                {/* </Gallery_projects> */}

                <section className="section_box_space">
                    <div className="box_space " style={{"backgroundImage": "url('"+orange_white+"')"}}>
                        <div className="box_shadow with_title">
                            <h3>PLUGINS</h3>
                        </div>
                    </div>
                </section>
                <div className="div5px"></div>

                <Gallery_projects>
                    <Project_item>{{
                        imgTab: [],
                        title: "reservation",
                        description: `Mon premier plugin de reservation sera bientôt disponible`,
                        btnOrTagA: "disabled",
                        linkTxt: "inactive",
                        linkHref: "",
                        fnc: () => alert(`
                            Mon premier plugin 
                            de reservation 
                            sera bientôt disponible !     
                        `)
                    }}</Project_item>
                    
                    <Project_item>{{
                        imgTab: [],
                        title: "authentification",
                        description: `Mon plugin d'authentification sera bientôt disponible`,
                        btnOrTagA: "disabled",
                        linkTxt: "inactive",
                        linkHref: "",
                        fnc: () => alert(`
                            Mon premier plugin 
                            de authentification 
                            sera bientôt disponible !     
                        `)
                    }}</Project_item>
                </Gallery_projects>
            </div>

            
            
            {/* <div className="sticky_box">
                <div className="titreH2 sticky " style={{"backgroundImage": "url("  + ")"}}>
                    <h2>Services</h2>
                </div>

                <div className="big ">
                    <div className="big_content container" >

                        <div className="box_list" >
                            <ul>
                                <li className="titreList"><h3>Développement</h3></li>
                                <li className="list">Site web</li>
                                <li className="list">Application web</li>
                                <li className="list">mobile</li>
                            </ul>
                        </div>
                        
                        <div className="box_list">
                            <ul>
                                <li className="titreList"><h3>Cartographie</h3></li>
                                <li className="list">Exploration des données</li>
                                <li className="list">Affichage des datas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;