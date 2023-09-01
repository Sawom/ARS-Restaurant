import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';

const ShopCard = ({item}) => {
    const{name,recipe,image,category,price, _id} = item;
    const {user} = useAuth();

    // add to cart function. att to cart button e click korle database e zabe
    const handleAddToCart = (item) =>{
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                // POST dile database e zay
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                // json file akare database e rakhtechi
                body: JSON.stringify(cartItem)
            })
            .then( res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added to cart',
                        showConfirmButton: false,
                        timer: 1500
                        })
                }
            })
        }
    } 

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food" /></figure>
                <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > ${price} </p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                         <button onClick={ ()=> handleAddToCart(item) } className="btn btn-outline  border-4 mt-6">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;