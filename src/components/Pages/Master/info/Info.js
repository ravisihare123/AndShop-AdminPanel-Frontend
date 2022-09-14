import { Hidden } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { post } from '../../../../helper/api';
function Info() {
    const [data, setData] = useState([]);

    // const itemList = async() => {
    //     var body = {}
    //     var result = await post("master/itemList", body)
    //     alert(JSON.stringify(result.data))
    // }

    // useEffect(() => {
    //   itemList()
    // }, [])
    



    const location = useLocation()
    // alert(JSON.stringify(location))

    function handlePrint() {  
        window.print()
        
    }
    return (
        <div >
            <div className="page-header">
                <div>
                        <Button type='submit' aria-hidden="true " onClick={()=>{handlePrint()}} variant="info" >
                            print
                       </Button>    
                </div>
            </div>
            <Row className=" row-sm">
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            {/* <pre>{ JSON.stringify(location.address ,null,2)}</pre> */}
                            <div>
                                
                         
                            <h3 style={{justifyContent:"center",display:"flex"}}>
                                Order Details
                                </h3>
                                <h4>Order Id: <span style={{ color: 'red' }} >{location.state.order_id}</span></h4>
                            <h4>Firstname: <span style={{ color: 'red' }} >{location.state.firstname}</span></h4>
                            <h4>LastName:   <span style={{ color: 'red' }} > {location.state.lastname}</span></h4>
                                <h4>Email: <span style={{ color: 'red' }} >{location.state.email}</span></h4>
                                <h4>Country: <span style={{ color: " red" }}>{location.state.country}</span></h4>
                                <h4>State: <span style={{ color: " red" }}>{location.state.state}</span></h4>
                                <h4>Zipcode: <span style={{ color: " red" }}>{location.state.zipcode}</span></h4>
                                <h4>Country: <span style={{ color: " red" }}>{location.state.country}</span></h4>
                                <h4>Address: <span style={{ color: " red" }}>{location.state.address}</span></h4>
                                <h4>Message: <span style={{ color: " red" }}>{location.state.message}</span></h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default Info;