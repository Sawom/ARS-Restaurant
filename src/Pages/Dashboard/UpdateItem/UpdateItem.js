import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const UpdateItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

    }

    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > Update  ITEM </span> </p>
            </section>
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