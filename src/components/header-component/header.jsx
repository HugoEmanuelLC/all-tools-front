import Navbar from "./components/navbar-component/navbar";

function Header() {
    return (
        <header className='sticky'>
            <div className="logo">
                <span>HLC</span>
            </div>

            <Navbar />

            {/* <span className='underline'></span> */}
        </header>
    )
}

export default Header;