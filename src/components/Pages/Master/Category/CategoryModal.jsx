import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import Swal from "sweetalert2";

export default function CategoryModal({ show, setShow }) {
    
    const [name, setName] = useState("")
    const [parentId, setParentId] = useState("")
    const [id, setId] = useState("")
    
    const handleClose = () => {
        setId("")
        setName("")
        setShow(false)

    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        var params = {
            id:id,
            name: name
        }
        var result = await axios.post(
          "http://localhost:5000/master/insertEditCategory",params
        );
        if (result.status) {
            Swal.fire({
              icon: "success",
              title: " Categroy has inserted!!!",
            });
            setShow(false)
        }
        else {
            Swal.fire({
              icon: "error",
              title: " Category not insert!",
            });
        }
        
    }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{id == "" ? "Inserted" : "Updated"}Category </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <b>
              <Form.Label>Enter Category Name</Form.Label>
            </b>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            ></Form.Control>
          </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="primary" type="submit">
            {id === "" ? "inserted " : "updated"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
