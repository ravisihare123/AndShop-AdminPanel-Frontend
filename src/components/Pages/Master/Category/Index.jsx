import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import CategoryModal from './CategoryModal';

export default function Index() {
    const [showModal, setShowModal] = useState(false)
  return (
      <div>
          <div className="page-header">
        <div>
          <h1 className="page-title">Category</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Master
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              category
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to="#"
            className="btn btn-primary btn-icon text-white me-3"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add airport
                  </Link>
                  <CategoryModal
                      show={showModal}
                      setShow={setShowModal}
                  />
                 
              </div>
              </div>
    </div>
  )
}
