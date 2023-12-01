import './container.css'

const Container = (props) => {
    const {cart} = props
    return (
       <div className='continer'>
        <div className='blogs'>
        <h3 >Bookmarked Blogs:{cart.length} </h3>
       
        
        <div>
        <div>
        <div>

        </div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>
           <div className='dd'>Master Microsoft Power Plartform and become an In-Demand Comand</div>        </div>
           

        </div>
        
        </div>
        
       </div>
    );
};

export default Container;