import cv from '/documents/cv.pdf'
import { useState } from 'react'


function Footer() {
    const [cvDoc, setCvDoc] = useState(cv)


    return (
        <footer>
            <div className="infos">
                <div className="">
                    <ul>
                        <li><h3 className="sous_titres">Projets</h3></li>
                        <li><a href="https://www.wawmomo.be" target="_blank" rel="noopener noreferrer">Wawmomo</a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=com.lexandco.lexandco" target="_blank" rel="noopener noreferrer">Lex&Co.</a></li>
                    </ul>
                </div>
                
                <div className="">
                    <ul>
                        <li><h3 className="sous_titres">Contacts</h3></li>
                        <li><a href="https://www.linkedin.com/in/hugoclavinas/" target="_blank">Linkedin</a></li>
                        <li><a href="https://github.com/HugoEmanuelLC/" target="_blank">GitHub</a></li>
                        <li><a href="mailto:hugoclavinas@gmail.com">Hugoclavinas@gmail.com</a></li>
                        <li><a href={cvDoc} target='_blank'>Curriculum Vitae</a></li>
                    </ul>
                </div>
            </div>
            <p className="copyright">2025 © hugoclavinas.com</p>
        </footer>
    )
}

export default Footer