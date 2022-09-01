import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  Col,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { API_URL, post } from "../../../../helper/api";


export default function Index() {
  const [data, setData] = useState([])

  const productList = async () => {
    var body = {
      
    }
    var result = await post("master/productList", body)
    setData(result.data)
    alert(JSON.stringify(result.data));
  }

  useEffect(() => {
    productList()
  }, [])
  
  const columns = [
    {
      name: "ID",
      selector: (row) => row.p_id,
      sortable: true,
    },
    {
      name: "category Name",
      selector: (row) => row.category_name,
      sortable: false,
    },
    {
      name: "subcategory Name",
      selector: (row) => row.sub_name,
      sortable: false,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: false,
    },
    {
      name: "sales Price",
      selector: (row) => row.sales_price,
      sortable: false,
    },
    {
      name: "MRP Price",
      selector: (row) => row.mrp,
      sortable: false,
    },
    {
      name: "Image",
      selector: (row) => <img src={`${API_URL}/images/${row.image}`} />,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={editTooltip}
          >
            <i
              className="fe fe-edit fa-2x"
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
              onClick={() => handleDelete(row)}
            ></i>
          </OverlayTrigger>
        </>
      ),
    },
  ];

    const deleteTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Delete
      </Tooltip>
    );
    const editTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Edit
      </Tooltip>
  );
  
  const handleDelete = (row) => {
  alert(row.p_id)
  }
  const handleUpdateShow = () => {
    
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Product</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Master
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              product
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link
            to="/product/form"
            className="btn btn-primary btn-icon text-white me-3"
          >
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add product
          </Link>
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
