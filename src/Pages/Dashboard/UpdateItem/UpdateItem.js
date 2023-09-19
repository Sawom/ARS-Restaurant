import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {
    // axios diye data load korchi
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const {data: menu = [], refetch } = useQuery(['menu'], async()=>{
        const res = await axiosSecure.get('/menu')
        return res.data;
        
    })

    // 
    const onSubmit = data =>{
        const formData = new FormData();



    }

   
    

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p className='text-xl' > <span className=' py-4 border-y-4 uppercase' > Update  ITEM </span> </p>
                <br />
                <p>Update menu for :   </p>
            </section>
            {/* update kortechi */}
            {/* form. react-hook-form diye kora eta */}
            <form className='px-5' onSubmit={handleSubmit(onSubmit)} >
                {/*1. recipe name */}
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", { required: true })}  className="input input-bordered w-full " />
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
                            <option>Drinks</option>
                        </select>
                    </div>
                    {/* price */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full "  />
                    </div>
                </div>
                {/* 3 Recipe Details*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true })} ></textarea>
                </div>
                {/* submit button */}
                <button className="btn btn-outline  border-4 mt-6"  type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;