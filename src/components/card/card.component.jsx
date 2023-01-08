import './card.styles.css'

const Card = ({ product }) => {
    const { id, title, description, thumbnail, category, price, brand, rating, stock} = product;
    return (
        <div className='card-container' >
            <h1>{brand}</h1>
            <img
                className='card-image'
                src={thumbnail}
                alt={title}
            />
            <div className='product-title'>
                <h3>{title}</h3>
                <button type='button'>#{category}</button>
            </div>
            <p id='desc'>{description}</p>

            <div className='card-container-bottom'>
                <p>Rating: {rating}</p>
                <p>Price ${price}</p>
                
            </div>
            <div className='stock'>
                <p>Stock {stock}</p>
            </div>
            

        </div>
    )
}


export default Card;