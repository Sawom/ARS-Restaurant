import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';

const ShopCard = ({item}) => {
    const{name,recipe,image,category,price, _id} = item;
    const {user} = useAuth();

    // useCart theke refetch anchi. cz navbar e cart er item er count
    //  ta update korar jonno
    const [,refetch] = useCart()

    // add to cart function. add to cart button e click korle database e zabe
    const handleAddToCart = (item) =>{
        // console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('https://ars-restaurant-db.vercel.app/carts', {
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
                    refetch(); 
                    // refetch ta eikahne call dilam. count ta update korar jonno database theke.
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
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={image} className='w-full' alt="food" /></figure>
                <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > ${price} </p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                         <button onClick={ ()=> handleAddToCart(item) } className="btn btn-outline  border-4 mt-6"> <FaShoppingCart></FaShoppingCart> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;