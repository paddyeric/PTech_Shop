import React, { useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { API } from "../../api/apiConfig";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';



const AddProduct = () => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            image1 && formData.append("image1", image1);
            image2 && formData.append("image2", image2);
            image3 && formData.append("image3", image3);

            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("brand", brand);


            const response = await axios.post(`${API}/add`, formData)
            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setCategory('')
                setBrand('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setPrice('')
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    };


    return (
        <>
            <div className="justify-content-center align-items-center m-16">
                <h1>Add New Product</h1>

                <Form onSubmit={onSubmitHandler}>

                    <div>
                        <p className='mb-2 font-medium text-sm'>Upload Images</p>
                        <div className='flex gap-2'>
                            <label htmlFor="image1">
                                <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='upload area' />
                                <input
                                    onChange={(e) => setImage1(e.target.files[0])}
                                    type='file'
                                    id="image1"
                                    hidden
                                />
                            </label>
                            <label htmlFor="image2">
                                <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='upload area' />
                                <input
                                    onChange={(e) => setImage2(e.target.files[0])}
                                    type='file'
                                    id="image2"
                                    hidden
                                />
                            </label>
                            <label htmlFor="image3">
                                <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='upload area' />
                                <input
                                    onChange={(e) => setImage3(e.target.files[0])}
                                    type='file'
                                    id="image3"
                                    hidden
                                />
                            </label>
                        </div>
                    </div>

                    <Form.Group className="my-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type='text'
                            placeholder='Type here'
                            required
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="my-2">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            name='brand'
                            onChange={(e) => setBrand(e.target.value)}
                            value={brand}
                            type='text'
                            placeholder='Write product brand'
                            required
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="my-2">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            name='description'
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            type='text'
                            placeholder='Write product category'
                            required
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="my-2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name='description'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            type='text'
                            placeholder='Write product description'
                            required
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className="my-2">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name='price'
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type='number'
                            placeholder='input amount'
                            required
                        ></Form.Control>
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        className="my-2"
                    >
                        Submit
                    </Button>

                    <ToastContainer />
                </Form>
            </div>
        </>
    );
};

export default AddProduct;
