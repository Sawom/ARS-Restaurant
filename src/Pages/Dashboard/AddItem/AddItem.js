import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const img_hosting_token = '8646fdb5383b816f8a5e181a1d0fdd77';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=8646fdb5383b816f8a5e181a1d0fdd77` ;
    const [axiosSecure] = useAxiosSecure();

    // img upload function
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgUrl}
                console.log('newitem = ',newItem);
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    console.log('after posting', data.data);
                    if(data.data.insertedId){
                        // reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };
    // console.log(errors);

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p className='text-blue-600 font-bold' >---What's new?---</p> <br />
                <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > ADD AN ITEM </span> </p>
            </section>
            {/* form. react-hook-form diye kora eta */}
            <form className='px-5' onSubmit={handleSubmit(onSubmit)} >
                {/*1. recipe name */}
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("Recipe name", { required: true })}  className="input input-bordered w-full " required  />
                </div>
                {/* 2 div Category & price*/}
                <div className='flex my-4'>
                    {/* Category */}
                    <div className="form-control w-full mx-3">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        {/* select component daisy ui */}
                        <select defaultValue="Pick One"  {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    {/* price */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("Price", { required: true })} className="input input-bordered w-full " required  />
                    </div>
                </div>
                {/* 3 Recipe Details*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("Recipe Details", { required: true })} required ></textarea>
                </div>
                {/* 4 image */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-ghost w-full " required />
                </div>
                {/* submit button */}
                <button className="btn btn-outline  border-4 mt-6"  type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;