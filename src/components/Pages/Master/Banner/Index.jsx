import React, { useState } from 'react'
import {Row,Card,Col,Breadcrumb,OverlayTrigger,Tooltip,} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Index() {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Banner</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Master
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              banner
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to="/banner/form"
                      className="btn btn-primary btn-icon text-white me-3"
                     
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Banner
          </Link>
        </div>
          </div>
          
    </div>
  );
}
