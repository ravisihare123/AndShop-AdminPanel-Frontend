
import React, { useState, useEffect } from 'react'
import { Row,Col, Card , Container, Form} from 'react-bootstrap'
import { API_URL, authHeader, post } from '../../../../helper/api';
import useAuth from '../../../Context/auth';
import * as Notification from "../../../Components/Notifications/index";
import { width } from '@mui/system';

export default function BannerForm() {

  const {adminInfo} = useAuth()
  const [id, setId] = useState("")
  const [imageOne, setImageOne] = useState({bytes:"",filename:""})
  const [imageTwo, setImageTwo] = useState({bytes:"",filename:""})
  const [imageThird, setImageThird] = useState({bytes:"",filename:""})
  const [imageFourth, setImageFourth] = useState({bytes:"",filename:""})
  const [imageFive, setImageFive] = useState({ bytes: "", filename: "" })
  
  const [data, setData] = useState([]);

  const bannerList = async () => {
    var body = {
    }
    var result = await post("master/bannerList", body, {
      headers:authHeader()
    })
    if (result) {
      setData(result.data)
    }
    else {
      alert("banner not updated!!")
    }

  }
  

  useEffect(() => {
   bannerList()
  }, [])
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    var formData = new FormData()
    formData.append("id", id);
    formData.append("Aid",adminInfo.aid)
    formData.append("image1", imageOne.bytes);
    formData.append("image2", imageTwo.bytes);
    formData.append("image3", imageThird.bytes);
    formData.append("image4", imageFourth.bytes);
    formData.append("image5", imageFive.bytes);

    var result = await post("master/insertEditBanner", formData, {
      headers:authHeader()
    })
    if (result.status) {
      Notification.swatSuccess(result.msg);
      bannerList();
    }
    else {
      alert("Banner not inserted!!!");
    }
  }
  return (
    <div>
      <div className="page-header">
        <Container>
          <Row className=" row-sm">
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Form>
                    <Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group controlId="formFile" className="mb-3">
                            <b>
                              <Form.Label>Upload Image</Form.Label>
                            </b>
                            <Form.Control
                              type="file"
                              multiple
                              accept={2}
                              onChange={(event) => {
                                setImageOne({
                                  bytes: event.target.files[0],
                                  filename: URL.createObjectURL(
                                    event.target.files[0]
                                  ),
                                });
                              }}
                              required
                            ></Form.Control>
                          </Form.Group>
                        </Col>

                        <Col lg={6}>
                          <b>Images</b>
                         <br />
                          {data.map((item) => {
                            return (
                              <img
                                src={`${API_URL}/images/${item.image1}`}
                                style={{ width: "100px", height: "50px" }}
                              />
                            );
                          })}
                        </Col>
                      </Row>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Upload Image</Form.Label>
                          </b>
                          <Form.Control
                            type="file"
                            multiple
                            onChange={(event) => {
                              setImageTwo({
                                bytes: event.target.files[0],
                                filename: URL.createObjectURL(
                                  event.target.files[0]
                                ),
                              });
                            }}
                            required
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <br/>
                        {data.map((item) => {
                          return (
                            <img
                              src={`${API_URL}/images/${item.image2}`}
                              style={{ width: "100px", height: "50px" }}
                            />
                          );
                        })}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Upload Image</Form.Label>
                          </b>
                          <Form.Control
                            type="file"
                            multiple
                            onChange={(event) => {
                              setImageThird({
                                bytes: event.target.files[0],
                                filename: URL.createObjectURL(
                                  event.target.files[0]
                                ),
                              });
                            }}
                            required
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <br/>
                        {data.map((item) => {
                          return (
                            <img
                              src={`${API_URL}/images/${item.image3}`}
                              style={{ width: "100px", height: "50px" }}
                            />
                          );
                        })}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Upload Image</Form.Label>
                          </b>
                          <Form.Control
                            type="file"
                            multiple
                            onChange={(event) => {
                              setImageFourth({
                                bytes: event.target.files[0],
                                filename: URL.createObjectURL(
                                  event.target.files[0]
                                ),
                              });
                            }}
                            required
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <br/>
                        {data.map((item) => {
                          return (
                            <img
                              src={`${API_URL}/images/${item.image4}`}
                              style={{ width: "100px", height: "50px" }}
                            />
                          );
                        })}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formFile" className="mb-3">
                          <b>
                            <Form.Label>Upload Image</Form.Label>
                          </b>
                          <Form.Control
                            type="file"
                            multiple
                            onChange={(event) => {
                              setImageFive({
                                bytes: event.target.files[0],
                                filename: URL.createObjectURL(
                                  event.target.files[0]
                                ),
                              });
                            }}
                            required
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <br/>
                        {data.map((item) => {
                          return (
                            <img
                              src={`${API_URL}/images/${item.image5}`}
                              style={{ width: "100px", height: "50px" }}
                            />
                          );
                        })}
                      </Col>
                    </Row>

                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
