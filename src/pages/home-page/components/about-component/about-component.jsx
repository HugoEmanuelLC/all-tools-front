// scripts
import {createParagraphs} from '../../../../scripts/global_functions.js'


const texts = [
    {
        title: `about`,
        content: `Je m'appelle Hugo Lopes Clavinas, et depuis 2020, je me suis lancé dans une reconversion professionnelle passionnante : le développement web et d'applications.
        Résidant à Braine-l'Alleud, en Belgique, et d'origine portugaise, je suis animé par la volonté de créer des solutions digitales innovantes et performantes.`
    },
    {
        title: `parcours`,
        content: `Après une première partie de carrière dans [domaine précédent], j'ai décidé de me tourner vers le développement web, un domaine qui me passionne depuis longtemps. 
        J'ai suivi une formation intensive et continue de me perfectionner au quotidien, en explorant les dernières technologies et en réalisant des projets concrets.`
    },
    {
        title: `competences`,
        content: `Je suis compétent dans le développement de sites web et d'applications, avec une expertise particulière dans les technologies suivantes :`,
        list: [
            {
                titleList: `Front-end:`,
                contentList: ["HTML,", "CSS,", "JavaScript,", "React"]
            },
            {
                titleList: `Back-end:`,
                contentList: ["Node.js,", "Express.js,", "PHP"]
            },{
                titleList: `Bases de données:`,
                contentList: ["MySQL,", "MongoDB"]
            },
            {
                titleList: `Autres:`,
                contentList: ["GitHub"]
            }
        ]
    },
    {
        title: `projets`,
        content: `J'ai déjà réalisé plusieurs projets, allant de [type de projets : sites web vitrines, applications web, applications mobiles, etc.] à 
        [type de projets], qui m'ont permis de mettre en pratique mes compétences et de développer mon expérience. Vous pouvez consulter mon portfolio pour en savoir plus sur mes réalisations.`
    },
    {
        title: `motivations`,
        content: `Je suis convaincu que le développement web est un outil puissant pour créer des solutions qui facilitent la vie des gens et qui contribuent à améliorer le monde. 
        Je suis passionné par l'idée de pouvoir utiliser mes compétences pour réaliser des projets qui ont un impact positif.`
    },
    {
        title: `objectifs`,
        content: `Je suis à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets ambitieux et stimulants. 
        Je suis ouvert aux collaborations et aux défis, et je suis toujours prêt à apprendre et à me dépasser.`
    },
    {
        title: `contact`,
        content: `N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Je serai ravi de vous répondre et de vous accompagner dans la réalisation de vos idées.`,
        list: [
            {
                titleList: `Gsm:`,
                contentList: ["0484447341"]
            },
            {
                titleList: `Email:`,
                contentList: ["hugoclavinas@gmail.com"]
            }
        ]
    }
]


function AboutComponent() {
    return (
        <section className="about">
            <div className="container">

            {texts.map((el, i) => 
                <div className="box_about" key={i}>
                    <h3>{el.title}</h3>
                    { createParagraphs(el.content).map((ele, ind)=><p key={ind}>{ele}</p>) }
                    <ul>
                        { el?.list && el.list.map((ele, ind) => <li key={ind}>
                            <h4>{ele.titleList}</h4>
                            {ele.contentList.map((elem, index) => 
                                <span key={index}>{elem}</span>
                            )}
                        </li>) }
                    </ul>
                </div> 
            )}

            </div>
        </section>
    );
}

export default AboutComponent;