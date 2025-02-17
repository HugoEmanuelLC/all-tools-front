import React, {useEffect, useState} from "react";

import Hero from "./components/hero-component/hero";
// import LazyLoadImage from "../../components/LazyLoadImage";
import {Gallery_projects, Project_item} from "./components/gallery-component/gallery_projects";

// import AboutComponent from "./components/about-component/about-component";

import orange_white from '/home/orange-white.webp';
// import front from '/home/front.webp';

// images projet wawmomo
import bckg_wawmomo from '/home/bckg-wawmomo.webp';
import bckg_wawmomo_dash from '/home/bckg-wawmomo-dash.webp';

// images projet lex&co
import lexandco1 from '/home/lexandco1.webp';
import lexandco2 from '/home/lexandco2.webp';
import lexandco3 from '/home/lexandco3.webp';


function Home() {
    const [loadingImage, setLoadingImage] = useState(null);

    useEffect(() => {
        loadingImage == null ? setLoadingImage({orange_white}) : null;
        // console.log("loadingImage home : ", loadingImage)
    }, [loadingImage])


    useEffect(() => {
        AOS.init({
            duration: 700,
            delai: 500,
            easing: 'ease-in-out',
        });
    }, [])
    

    return (
        <div id="homePage">

            <div className="sticky_box">

                {/* <section className="head ">
                    <h1>développeur web apps</h1>
                    <h2>sites web</h2>
                    <h2>applications web</h2>
                    <h2>api's</h2>
                </section> */}

                <Hero />


                <section id="skills_services" className=" ">
                    <div className="container">

                        <div className="box_list_skills">
                            <h3 data-aos="zoom-out-up">Html5 / Sass</h3>
                            <h3 data-aos="zoom-out-up">React js</h3>
                            <h3 data-aos="zoom-out-up">Node js / Express js</h3>
                            <h3 data-aos="zoom-out-up">MySql / Mongodb</h3>
                        </div>

                        <div className="box_list">
                            <ul data-aos="zoom-out-up">
                                <li className="titreList">Á propos</li>
                                <li>Je m'appelle Hugo Lopes Clavinas, et depuis 2020, je me suis lancé dans une reconversion professionnelle passionnante: le développement web et d'applications.</li>
                                <li>je suis animé par la volonté de créer des solutions digitales innovantes et performantes.</li>
                            </ul>

                            <ul data-aos="zoom-out-up">
                                <li className="titreList">parcours</li>
                                <li>Après une première partie de carrière dans [domaine précédent], j'ai décidé de me tourner vers le développement web, un domaine qui me passionne depuis longtemps.</li>
                                <li>J'ai suivi une formation intensive et continue de me perfectionner au quotidien, en explorant les dernières technologies et en réalisant des projets concrets.</li>
                            </ul>

                            <ul data-aos="zoom-out-up">
                                <li className="titreList">competences</li>
                                <li>Je suis compétent dans le développement de sites web et d'applications, avec une expertise particulière dans les technologies suivantes:</li>
                                <li>Front-End Development (HTML, CSS, JavaScript, React js)</li>
                                <li>Back-End Development (Node js / Express js, PHP)</li>
                                <li>Base de données (MySQL, Mongodb)</li>
                                <li>Autres (GitHub, DNS)</li>
                            </ul>

                            <ul data-aos="zoom-out-up">
                                <li className="titreList">projets</li>
                                <li>J'ai déjà réalisé plusieurs projets, des sites web vitrines, applications web, applications mobiles, API's, qui m'ont permis de mettre en pratique mes compétences et de développer mon expérience.</li>
                                <li>Vous pouvez consulter mon portfolio pour en savoir plus sur mes réalisations.</li>
                            </ul>

                            <ul data-aos="zoom-out-up">
                                <li className="titreList">motivations</li>
                                <li>Je suis convaincu que le développement web est un outil puissant pour créer des solutions qui facilitent la vie des gens et qui contribuent à améliorer le monde.</li>
                                <li>Je suis passionné par l'idée de pouvoir utiliser mes compétences pour réaliser des projets qui ont un impact positif.</li>
                            </ul>

                            <ul data-aos="zoom-out-up">
                                <li className="titreList">objectifs</li>
                                <li>Je suis à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets ambitieux et stimulants.</li>
                                <li>Je suis ouvert aux collaborations et aux défis, et je suis toujours prêt à apprendre et à me dépasser.</li>
                            </ul>
                            
                            <ul data-aos="zoom-out-up">
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
                            <h3 data-aos="zoom-out-up">realisations</h3>
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

                <div className="div5px"></div>
                

                {/* <AboutComponent /> */}


                <section className="section_box_space">
                    <div className="box_space " style={loadingImage?.orange_white ? {"backgroundImage": "url('"+loadingImage.orange_white+"')"} : {}}>
                        <div className="box_shadow with_title">
                            <h3 data-aos="zoom-out-up">PLUGINS</h3>
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

                <div className="div5px"></div>
            </div>
        </div>
    )
}

export default Home;