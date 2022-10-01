import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';

const FoodsList = () => {
    const [foodDetails, setFoodDetails] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8080/getFoods').then((response) => {

            setFoodDetails(response.data);
        });
    }, []);
    return (
        <>
            <div className='row'>
                <div className='row '>
                    <div className='col-md-12 theFoodTop d-flex content-align-center'>
                        Foods
                    </div>
                </div>
                <div className='row'>
                    {
                        foodDetails.map((val) => {
                            console.log(val.food_name);
                            return <div className='col-md-3'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={val.food_image} />
                                    <Card.Body>
                                        <Card.Title>{val.food_name}</Card.Title>
                                        <Card.Text>
                                            {val.food_desc}
                                        </Card.Text>
                                        <div className='row'>
                                            <div className='col'>
                                                <input type="number" className='form-control' />
                                            </div>
                                            <div className='col'>
                                                <Button variant="primary">ADD TO CART</Button>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        })
                    }
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../../../public/Foods/1.jpg" />
                        <Card.Body>
                            <Card.Title>df</Card.Title>
                            <Card.Text>
                                sad
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default FoodsList