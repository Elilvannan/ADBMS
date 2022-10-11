import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom';

const RoomsList = () => {
  let user = localStorage.getItem('theUserName');
  let theId = localStorage.getItem('theId');
  const [roomsDetails, setRoomDetails] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/getRooms').then((response) => {

      setRoomDetails(response.data);
    });
  }, []);
  let navigate = useNavigate();
  const addToCart = (e, roomNumber) => {
    if (user == null) {
      let path = `/login`;
      navigate(path);
    } else {
      (async () => {
        await fetch('http://localhost:8080/bookRoom', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              "room_id": roomNumber,
              "cus_id": theId
            }
          )
        });
        alert("Room booked");
        window.location.reload();
      })();
    }


  };
  return (
    <>
      <div className='row'>
        <div className='row '>
          <div className='col-md-12 theFoodTop d-flex content-align-center'>
            Rooms
          </div>
        </div>
        <div className='row m-4'>
          {
            roomsDetails.map((val) => {
              return <div className='col-md-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Room</Card.Title>
                    <Card.Text>
                      {val[2]}
                    </Card.Text>
                    <div className='row'>
                      <div className='col-md-9'>
                      </div>
                      <div className='col'>
                        <Button variant="success" onClick={event => addToCart(event, val[0])}><Icon.Cart3 /></Button>
                      </div>
                    </div>

                  </Card.Body>
                </Card>
              </div>
            })
          }
        </div>
      </div>



    </>
  )
}

export default RoomsList
