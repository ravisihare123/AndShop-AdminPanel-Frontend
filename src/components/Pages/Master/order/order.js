import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {
  Row,
  Col,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { post } from '../../../../helper/api';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Order() {
  const navigate  = useNavigate()
    const [data, setData] = useState([])
    
    const orderList =async () => {
        var body = {}
        var result = await post("master/orderList", body);
        if (result.data) {
               setData(result.data)
        }
        
    }
    useEffect(() => {
      orderList()
    }, [])
    
  
    const deleteTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Delete
      </Tooltip>
    );
    const infoTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
       info
      </Tooltip>
  );

  const handleUpdateShow = (row) => {
    // window.open("http://localhost:3001/info")
    navigate('/info', {state:row})
  }
  
    const columns = [
      {
        name: "ID",
        selector: (row) => row.order_id,
        sortable: true,
      },
      {
        name: "First Name",
        selector: (row) => row.firstname,
        sortable: false,
      },
      {
        name: "Last Name",
        selector: (row) => row.lastname,
        sortable: false,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: false,
      },
      {
        name: "Country",
        selector: (row) => row.country,
        sortable: false,
      },
      {
        name: "State",
        selector: (row) => row.state,
        sortable: false,
      },
      {
        name: "Zipcode",
        selector: (row) => row.zipcode,
        sortable: false,
      },
      {
        name: "Address",
        selector: (row) => row.address,
        sortable: false,
      },
      {
        name: " Message",
        selector: (row) => row.message,
        sortable: false,
      },
      {
        name: "Action",
        cell: (row) => (
          <>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={infoTooltip}
            >
              <i
                className="fe fe-info fa-2x"
                onClick={() => handleUpdateShow(row)}
              ></i>
              {/* </Link> */}
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={deleteTooltip}
            >
              <i
                className="mx-4 fe fe-trash-2 fa-2x text-red"
                // onClick={() => handleDelete(row)}
              ></i>
            </OverlayTrigger>
          </>
        ),
      },
    ];
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Order</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Master
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              order
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="table-responsive">
                <div className="table">
                  <DataTable
                    columns={columns}
                    data={data}
                    defaultSortField="id"
                    defaultSortAsc={false}
                    striped={true}
                    center={true}
                    persistTableHead
                    subHeader
                    subHeaderComponent={
                      <Row>
                        <Col>
                          <input
                            placeholder="Search here .."
                            className="form-control"
                            type="text"
                            // onChange={(e) => setSearch(e.target.value)}
                          />
                        </Col>
                      </Row>
                    }
                    pagination
                    highlightOnHover
                    paginationServer
                    // progressPending={loading}
                    // paginationTotalRows={totalRows}
                    // onChangeRowsPerPage={(perPage) => setPerPage(perPage)}
                    // onChangePage={(page) => setPage(page)}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
