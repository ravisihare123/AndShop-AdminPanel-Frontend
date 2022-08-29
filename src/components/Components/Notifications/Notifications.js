import React from "react";
import { Link } from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast, Slide, Flip } from "react-toastify";
import { Button, Breadcrumb, Card, Row,Col } from "react-bootstrap";
import {
  SuccessNotification,
  SuccessNotification1,
  SuccessNotification2,
  SuccessNotification3,
  SuccessNotification4,
  SuccessNotification5,
} from "../../../data/Component/notificationdata/notificationdata";
export default function Notifications() {
  if (typeof window !== "undefined") {
    injectStyle();
  }
  const Default =()=>
  toast.success(<p className="text-white tx-16 mb-0">
  Well done Details Submitted Successfully
</p>, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose:5000,
        theme: "colored",
      }
    );
    const Center =()=>
    toast.error(<p className="text-white tx-16 mb-0">
     Default Center Notification
  </p>, {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          autoClose:5000,
          theme: "colored",
        }
      );
      const Left =()=>
      toast.warn(<p className="text-white tx-16 mb-0">
     Default Left Notification
    </p>, {
            position: toast.POSITION.TOP_LEFT,
            hideProgressBar: true,
            autoClose:5000,
            theme: "colored",
          }
        );
  const Centerdanger = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">
       Oops! An Error Occurred
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Flip,
        theme: "colored",
      }
    );
  const  Centerinfo= () =>
    toast.info(
      <p className="text-white tx-16 mb-0 ">
       Some info here
      </p>,
      {
        autoClose:5000,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        transition: Flip,
        theme: "colored",
      }
    );
  const  Centerwarning= () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">
        Warning : Something Went Wrong 
      </p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        transition: Flip,
        theme: "colored",
      }
    );
    const Toastslidesucc = () =>
    toast.success(
      <p className="text-white tx-16 mb-0 ">
        Slide Notification
      </p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme:'colored'
      }
    );
    const Toastslidewarn = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Slide Notification</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme:'colored'
      }
    );
    const Toastslideerror = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">
        Slide Notification
      </p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme:'colored'
      }
    );
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Notification</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Notification
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link>
        </div>
      </div>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alerts Notifications</h3>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
                <Button onClick={Default} variant="" className="btn btn-success">Default</Button>
								<Button onClick={Center} variant="" className="btn btn-secondary">Center</Button>
								<Button onClick={Left} variant="" className="btn btn-warning">Left</Button>
								<Button onClick={Centerinfo} variant="" className="btn btn-info">Center Info</Button>
								<Button onClick={Centerdanger} variant="" className="btn btn-danger">Center Error</Button>
								<Button onClick={Centerwarning} variant="" className="btn btn-warning">Center Warning</Button>
                <ToastContainer />
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Side Alerts Notifications</h3>
            </Card.Header>
            <Card.Body>
              <div className="btn-list">
								<Button onClick={Toastslidesucc} variant="" className="btn btn-success notice">Success</Button>
								<Button  onClick={Toastslidewarn} variant=""  className="btn btn-warning warning">Warning</Button>
								<Button onClick={Toastslideerror} variant="" className="btn btn-danger error">Danger</Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alerts Popovers</h3>
            </Card.Header>
            <Card.Body>
              <SuccessNotification />

              <SuccessNotification1 />

              <SuccessNotification2 />

              <SuccessNotification3 />

              <SuccessNotification4 />
              
              <SuccessNotification5 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
