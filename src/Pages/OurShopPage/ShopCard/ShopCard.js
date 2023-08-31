import React from 'react';
import useAuth from '../../Authentication/useAuth/useAuth';
import Swal from 'sweetalert2';

const ShopCard = ({item}) => {
    const{name,recipe,image,category,price} = item;
    const {user} = useAuth();

    // add to cart function
    const handleAddToCart = (item) =>{
        console.log(item);
        if(user){
            fetch('http://localhost:5000/carts')
            .then( res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'add to cart',
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
                         <button className="btn btn-outline  border-4 mt-6">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;