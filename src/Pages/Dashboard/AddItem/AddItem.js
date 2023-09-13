import React from 'react';

const AddItem = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center'>add an item</h1>
            {/* form */}
            <form className='px-5' >
                {/*1. recipe name */}
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" className="input input-bordered w-full " />
                </div>
                {/* 2 div Category & price*/}
                <div className='flex my-4'>
                    {/* Category */}
                    <div className="form-control w-full mx-3">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        {/* select component daisy ui */}
                        <select defaultValue="Pick One"  className="select select-bordered">
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
                        <input type="number" placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                {/* 3 Recipe Details*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>
                {/* 4 image */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-ghost w-full " />
                </div>
                {/* submit button */}
                <button className="btn btn-outline  border-4 mt-6">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;