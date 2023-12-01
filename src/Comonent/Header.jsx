import './header.css'
import img from '../image/logo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='fle'>

                <div>
                <h3 className='text-right	'>Knowledge Cafe </h3>
                </div>
                <div>
                    <img className='img' src={img} alt="This is image" />
                </div>
            </div>
           

        </div>
    );
};

export default Header;