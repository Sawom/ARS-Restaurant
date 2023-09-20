import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateItem = () => {
    // axios diye data load korchi
    // const [axiosSecure] = useAxiosSecure();
    // const {data: menu = [], refetch } = useQuery(['menu'], async()=>{
    //     const res = await axiosSecure.get('/menu')
    //     return res.data;
        
    // })

    // update
    const [update, setUpdate] = useState({});
    const {id} = useParams();

    // data load
    useEffect(()=>{
        fetch(`http://localhost:5000/menu/${id}`)
        .then(res => res.json())
        .then( data => {
            setUpdate(data)
            // console.log(data)
        })
    }, [])

    // update recipe name
    const handleNameChange = event =>{
        const updatedName = event.target.value;
        const updatedItem = {name: updatedName, recipe: update.recipe, category: update.category, price: update.price };
        setUpdate(updatedItem);
    }

    // update category
    const handleCategoryChange = event =>{
        const updatedCategory = event.target.value;
        const updatedItem = {name: update.name, category: updatedCategory, price: update.price, details: update.details };
        setUpdate(updatedItem);
    }

    // update price
    const handlePriceChange = event =>{
        const updatedPrice = event.target.value;
        const updatedItem = {name: update.name, category: update.category, price: updatedPrice, details: update.details };
        setUpdate(updatedItem);
    }

    // update details
    const handleDetailsChange = event =>{
        const updatedDetails = event.target.value;
        const updatedItem = {name: update.name, category: update.category, price: update.price, details: updatedDetails};
        setUpdate(updatedItem);
    }
    
    // update function
    const handleUpdate = (event) =>{
        event.preventDefault();
        const url = `http://localhost:5000/menu/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        } )
        .then( res => res.json() )
        .then( data =>{
            if(data.modifiedCount > 0 ){
                // swal
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setUpdate({})
                event.target.reset()
            }
        })
    }
    

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p className='text-xl' > <span className=' py-4 border-y-4 uppercase' > Update  ITEM </span> </p>
                <br />
                <p>Update menu for : {update.name}  </p>
            </section>
            {/* update kortechi */}
            {/* form. react-hook-form diye kora eta */}
            <form className='px-5' onSubmit={handleUpdate} >
                {/*1. recipe name */}
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" name="name" onChange={handleNameChange} defaultValue={update.name || ''} placeholder="Recipe name"   className="input input-bordered w-full " />
                </div>
                {/* 2 div Category & price*/}
                <div className='flex my-4'>
                    {/* Category */}
                    <div className="form-control w-full mx-3">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        {/* select component daisy ui */}
                        <select onChange={handleCategoryChange} defaultValue={update.category || ''} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    {/* price */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" onChange={handlePriceChange} defaultValue={update.price || ''} className="input input-bordered w-full "  />
                    </div>
                </div>
                {/* 3 Recipe Details*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" onChange={handleDetailsChange} defaultValue={update.details || ''} placeholder="Recipe Details" ></textarea>
                </div>
                {/* submit button */}
                <button className="btn btn-outline  border-4 mt-6"  type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;

// note
// update route setup (bphoy pera khaichi xd)
// app.js theke route change
//  useParams() diye id nibo
// manageItem theke edit button e link ta change hobe