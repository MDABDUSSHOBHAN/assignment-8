
 

import './shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import imga from '../image/img.png'

const Shop = (props) => {
    console.log(props);
    const {id,img,name,price,quantity,ratings,seller}= props.product
  const handleCard= props.handleCard;
    return (
        <div className="imgProduct">
            
         <img src={img} alt="" />
         <div>
            <div className='subcontent'>
                <div className='dflex'>
                    <div className='user'> <img className='user' src= {imga} alt="Img" /> 
                    </div>
                    <div>
                        <h3 className='top'>Mr.Rajue</h3>
                        <p className='top'>Mar14 (4 Days ago)</p>
                    </div>
                  
                </div>
                <div>
                       
                    <p>05 min read 
                    
                        <button onClick={ ()=>handleCard(props.product)}>
                        <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </p>
                </div>
            </div>

            <div>
            <h2 className='he'>How to get your first job as a self-taught programmer</h2>
            </div>
            <div>
                <a href="#">Make as read</a>
            </div>
         </div>
     
       
        
            
         
        </div>
    );
};

export default Shop;