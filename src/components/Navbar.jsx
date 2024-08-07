import './Navbar.css';
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className="arrowscope_common_continer">
            <div className='navmenu'>
                <div className='companylogo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='home'>
                    <a href='https://arrowscope.in/'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="home"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg></span>
                        Home</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
