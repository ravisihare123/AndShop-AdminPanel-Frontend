import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import * as custompagesswitcherdata from "../../../data/Switcher/Custompagesswitcherdata";
import axios from "axios";
import Swal from "sweetalert2";
export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    var body = {
      email: email,
      password: password,
    };
    // alert(JSON.stringify(body));
    var result = await axios.post(
      "http://localhost:5000/admin/adminlogin",
      body
    );
    if (result.data.status) {
      // alert(JSON.stringify(result.data.status));
      // const id = result.data.data.id;
      // const name = result.data.data.name;
      // alert(id);

      localStorage.setItem("Aid", JSON.stringify(result.data.data));
      
      
      navigate("/dashboard");
      Swal.fire({
        icon: "success",
        title: "Login Sucessfull",
        text: "Welcome ",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Unsucessfull",
      });
    }
  };
  return (
    <div className="login-img">
      <div className="page">
        <div className="dropdown float-end custom-layout">
          <div
            className="demo-icon nav-link icon mt-4 bg-primary"
            onClick={() => custompagesswitcherdata.Swichermainright()}
          >
            <i className="fe fe-settings fa-spin text_primary"></i>
          </div>
        </div>
        <div
          className=""
          onClick={() => custompagesswitcherdata.Swichermainrightremove()}
        >
          <div className="col col-login mx-auto">
            <div className="text-center">
              <img
                src={require("../../../assets/images/brand/logo.png")}
                className="header-brand-img"
                alt=""
              />
            </div>
          </div>
          <div className="container-login100">
            <div className="wrap-login100 p-0">
              <Card.Body>
                <form
                  onSubmit={(e) => login(e)}
                  className="login100-form validate-form"
                >
                  <span className="login100-form-title">Login</span>
                  <div className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-email" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="text-end pt-1">
                    <p className="mb-0">
                      <Link
                        to={`/custompages/forgotPassword/`}
                        className="text-primary ms-1"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                  <div className="container-login100-form-btn">
                    <Button type="submit"> Login</Button>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">
                      Not a member?
                      <Link
                        to={`/custompages/register/`}
                        className="text-primary ms-1"
                      >
                        Create an Account
                      </Link>
                    </p>
                  </div>
                </form>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center my-3">
                  <Link to="#" className="social-login  text-center me-4">
                    <i className="fa fa-google"></i>
                  </Link>
                  <Link to="#" className="social-login  text-center me-4">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#" className="social-login  text-center">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </div>
              </Card.Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
