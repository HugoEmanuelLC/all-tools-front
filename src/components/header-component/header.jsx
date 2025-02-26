import Navbar from "./components/navbar-component/navbar";

function Header() {
    return (
        <header className='sticky'>
            <div className="logo">
                <span>hugo.clavinas.com</span>
            </div>

            <Navbar />

            {/* <span className='underline'></span> */}
        </header>
    )
}

export default Header;