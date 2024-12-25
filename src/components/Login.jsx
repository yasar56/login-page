import React, { useState } from "react";
import "../assests/css/index.css";
import AntLogo from "../assests/images/AntLogo.png";
import GitHub from "../assests/images/github.png";
import BitBucket from "../assests/images/bitbucket.png";
import Azure from "../assests/images/Azure Devops.png";
import GitLab from "../assests/images/gitlab.png";
import Vector from "../assests/images/Vector.png";
import Logo from "../assests/images/Subtract.png"
import Key from "../assests/images/SSO.png"



export default function Login() {

    const [activeTab, setActiveTab] = useState("Tab1");

    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12 p-0"  style={{ backgroundColor: "#FFFFFF"}}>
            <div className="left-column">
                <div className="box">
                    <div className="inner-content d-flex mt-2 ms-3">
                        <img src={AntLogo} alt="" />
                        <p className="mt-2">AI to Detect & Autofill Bad Code</p>
                    </div>
                    <hr />
                    <div className="data d-flex justify-content-around">
                        <div className="px-2 py-2">
                            <h6 className="text-center">30+</h6>
                            <p className="text-start">language support</p>
                        </div>
                        <div className="px-2 py-2">
                            <h6 className="text-center">10K+</h6>
                            <p className="text-start">Developers</p>
                        </div>
                        <div className="px-2 py-2">
                            <h6 className="text-center">100K+</h6>
                            <p className="text-start">Hours Saved</p>
                        </div>
                        
                    </div>
                </div>
                <div className="sub-box">
                    <div className="row-1 d-flex px-4 py-2">
                        <div className="col stats">
                            <img src={Vector} alt="" />
                        </div>
                        <div className="col mt-2">
                            <p><i class='bx bx-up-arrow-alt'></i>14%<br /> <span style={{color:"black", fontWeight:"400"}}>This Week</span></p>
                            
                        </div>
                    </div>
                    <div className="ms-4">
                        <span>Issues Fixed</span>
                        <h3 className="fw-bold">500K+</h3>

                    </div>
                </div>
                <div className="Logo">
                    <img src={Logo} alt="" style={{width:"300px", height:"270px"}}/>
                </div>  

            </div>
          
        </div>
        <div
          className="col-md-6 col-sm-12 p-0 "
          style={{ backgroundColor: "#FAFAFA", height: "100vh" }}
        >
          
          <div className="container">
            
            <div className="right row mx-3">
            
              <div className="sign-up">
                <div className="title d-flex justify-content-center align-items-center">
                  <img
                    src={AntLogo}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h3 className="ms-1">CodeAnt AI</h3>
                </div>
                <h4 className="mt-4 text-center">Welcome to code Ant Ai</h4>
                <div className="Login-button mt-4 row px-4 mb-4">
                  <button className={`col btn py-2" ${activeTab === "Tab1"?"active":""}`} id="btn-1" onClick={()=> {setActiveTab("Tab1")}}>
                    SAAS
                  </button>
                  <button className={`col btn py-2 ${activeTab ==="Tab2"?"active":""}`} id="btn-2" onClick={()=>{setActiveTab("Tab2")}}>
                    Self Hosted
                  </button>
                </div>
              </div>
            {activeTab === "Tab1" &&
              <div className="login-cred fw-bold">
                <div className="col p-2 d-flex justify-content-center ">
                  <img src={GitHub} alt="" />
                  <p className="ms-3">Sign in with Github</p>
                </div>
                <div className="col p-2 d-flex justify-content-center ">
                  <img src={BitBucket} alt="" />
                  <p className="ms-3">Sign in with Bitbucket</p>
                </div>
                <div className="col p-2 d-flex justify-content-center ">
                  <img src={Azure} alt="" />
                  <p className="ms-3">Sign in with Azure Devops</p>
                </div>
                <div className="col p-2 d-flex justify-content-center ">
                  <img src={GitLab} alt="" />
                  <p className="ms-3">Sign in with GitLab</p>
                </div>
              </div>
              }
              {activeTab === "Tab2" &&
               <div className="login-cred fw-bold">
                <div className="col p-2 d-flex justify-content-center ">
                  <img src={GitLab} alt="" />
                  <p className="ms-3">Self Hosted GitLab</p>
                </div>
                <div className="col p-2 d-flex justify-content-center">
                  <img src={Key} alt="" />
                  <p className="ms-3">Sign in with SSO</p>
                </div>
                
              </div>
              }
            </div>
            
            <p className="fs-6 text-center desc">
              By signing up you agree to the <b>privacy policy.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
