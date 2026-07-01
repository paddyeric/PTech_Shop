import React, { useState, useEffect } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { API } from "../../api/apiConfig";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



const UpdateProduct = () => {
    const [image1, setImage1] = useState(false);
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {

            try {
                const res = await fetch(`${API}/products/${productId}`);
                if (!res.ok) throw new Error("Failed to fetch product");
                const data = await res.json();
                setName(data.name);
                setPrice(data.price);
                setImage1(data.image1);
                setBrand(data.brand);
                setCategory(data.category);
                setDescription(data.description);
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        };

        fetchProduct();
    }, [productId]);


    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            image1 && formData.append("image1", image1);

            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("brand", brand);


            const response = await axios.put(`${API}/products/${productId}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.data.success) {
                toast.success('Product Updated')
                setName('')
                setDescription('')
                setCategory('')
                setBrand('')
                setImage1(true)
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
                <h1>Update Product</h1>

                <Form onSubmit={onSubmitHandler}>

                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='upload area' />
                        <input
                            onChange={(e) => setImage1(e.target.files[0])}
                            type='file'
                            id="image1"
                            hidden
                        />
                    </label>
                    <Form.Group controlId="name" className="my-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="price" className="my-2">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            autoComplete="price"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="brand" className="my-2">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete="brand"
                            placeholder="Enter Brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="category" className="my-2">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete="category"
                            placeholder="Enter Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="description" className="my-2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            autoComplete="description"
                            placeholder="Enter Description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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

export default UpdateProduct;
