import * as React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        NEW CUSTOMERS GET 15% OFF! USE CODE <a href="#">WELCOME15</a>
      </div>
      <nav className="">
        <div className="container">
          <div className="nav-flex">
            <div className="menu-items">
              <a className="menu-item active" href="">
                home
              </a>
              <a className="menu-item" href="">
                about
              </a>
              <a className="menu-item" href="">
                products
              </a>
            </div>
            <div className="logo">
              <img src="./assets/img/logo.png" alt="" />
            </div>
            <div className="button-list">
              <svg
                className="svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="21"
                  fill="#D9D9D9"
                  stroke="#827D7D"
                />
                <path
                  d="M17.6973 32C17.175 32 16.7281 31.8141 16.3565 31.4424C15.9843 31.07 15.7982 30.6225 15.7982 30.1C15.7982 29.5775 15.9843 29.13 16.3565 28.7576C16.7281 28.3859 17.175 28.2 17.6973 28.2C18.2195 28.2 18.6664 28.3859 19.038 28.7576C19.4103 29.13 19.5964 29.5775 19.5964 30.1C19.5964 30.6225 19.4103 31.07 19.038 31.4424C18.6664 31.8141 18.2195 32 17.6973 32ZM27.1927 32C26.6705 32 26.2236 31.8141 25.852 31.4424C25.4798 31.07 25.2936 30.6225 25.2936 30.1C25.2936 29.5775 25.4798 29.13 25.852 28.7576C26.2236 28.3859 26.6705 28.2 27.1927 28.2C27.715 28.2 28.1622 28.3859 28.5344 28.7576C28.906 29.13 29.0918 29.5775 29.0918 30.1C29.0918 30.6225 28.906 31.07 28.5344 31.4424C28.1622 31.8141 27.715 32 27.1927 32ZM21.7803 19.935C21.6062 19.7608 21.5192 19.5392 21.5192 19.27C21.5192 19.0008 21.6062 18.7792 21.7803 18.605L22.6112 17.75H19.5964C19.3273 17.75 19.102 17.6591 18.9203 17.4773C18.738 17.295 18.6468 17.0692 18.6468 16.8C18.6468 16.5308 18.738 16.3051 18.9203 16.1227C19.102 15.9409 19.3273 15.85 19.5964 15.85H22.6112L21.7566 14.995C21.5667 14.805 21.4758 14.5833 21.4841 14.33C21.4917 14.0767 21.5904 13.855 21.7803 13.665C21.9702 13.4908 22.1918 13.3996 22.445 13.3914C22.6982 13.3838 22.9198 13.475 23.1097 13.665L25.5785 16.135C25.6735 16.23 25.7409 16.3329 25.7808 16.4437C25.82 16.5546 25.8396 16.6733 25.8396 16.8C25.8396 16.9267 25.82 17.0454 25.7808 17.1562C25.7409 17.2671 25.6735 17.37 25.5785 17.465L23.1097 19.935C22.9356 20.1092 22.7182 20.2 22.4573 20.2076C22.1959 20.2159 21.9702 20.125 21.7803 19.935ZM17.6973 27.25C16.9693 27.25 16.4195 26.9371 16.0479 26.3114C15.6757 25.6863 15.6716 25.065 16.0356 24.4475L17.3175 22.12L13.8991 14.9H12.9495C12.6805 14.9 12.4551 14.8088 12.2735 14.6264C12.0912 14.4446 12 14.2192 12 13.95C12 13.6808 12.0912 13.455 12.2735 13.2726C12.4551 13.0909 12.6805 13 12.9495 13H14.4926C14.6666 13 14.8328 13.0475 14.9911 13.1425C15.1493 13.2375 15.268 13.3721 15.3471 13.5463L19.1691 21.55H25.8159L29.2105 15.3988C29.2896 15.2404 29.4045 15.1176 29.5552 15.0301C29.7052 14.9434 29.8673 14.9 30.0414 14.9C30.4054 14.9 30.6785 15.0583 30.8608 15.375C31.0425 15.6917 31.0463 16.0083 30.8722 16.325L27.4776 22.4525C27.3035 22.7692 27.074 23.0146 26.7892 23.1888C26.5043 23.3629 26.1799 23.45 25.8159 23.45H18.7418L17.6973 25.35H28.1423C28.4113 25.35 28.6367 25.4409 28.8184 25.6226C29.0007 25.805 29.0918 26.0308 29.0918 26.3C29.0918 26.5692 29.0007 26.7946 28.8184 26.9764C28.6367 27.1588 28.4113 27.25 28.1423 27.25H17.6973Z"
                  fill="#443B3B"
                />
              </svg>

              <svg
                className="svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="21"
                  fill="#D9D9D9"
                  stroke="#827D7D"
                />
                <path
                  d="M21.5 21.5C24.1244 21.5 26.25 19.3744 26.25 16.75C26.25 14.1256 24.1244 12 21.5 12C18.8756 12 16.75 14.1256 16.75 16.75C16.75 19.3744 18.8756 21.5 21.5 21.5ZM21.5 23.875C18.3294 23.875 12 25.4662 12 28.625V31H31V28.625C31 25.4662 24.6706 23.875 21.5 23.875Z"
                  fill="#443B3B"
                />
              </svg>

              <svg
                className="svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="21.5"
                  cy="21.5"
                  r="21"
                  fill="#D9D9D9"
                  stroke="#827D7D"
                />
                <path
                  d="M25.5792 24.9497H24.721L24.4168 24.6564C25.4814 23.418 26.1224 21.8102 26.1224 20.0612C26.1224 16.1612 22.9611 13 19.0612 13C15.1612 13 12 16.1612 12 20.0612C12 23.9611 15.1612 27.1224 19.0612 27.1224C20.8102 27.1224 22.418 26.4814 23.6564 25.4168L23.9497 25.721V26.5792L29.3814 32L31 30.3814L25.5792 24.9497ZM19.0612 24.9497C16.3562 24.9497 14.1727 22.7662 14.1727 20.0612C14.1727 17.3562 16.3562 15.1727 19.0612 15.1727C21.7662 15.1727 23.9497 17.3562 23.9497 20.0612C23.9497 22.7662 21.7662 24.9497 19.0612 24.9497Z"
                  fill="#443B3B"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="video-box">
          <div className="video-player"></div>
          <div className="over-view"></div>
          <div className="over-content">
            <a href="" className="btn">
              lorem ipsum
            </a>
            <h2>Loren Ipsum Dolor Sit amet</h2>
            <h3>
              Donec cursus ligula diam, nec congue <br />
              augue ultrices nec.
            </h3>
            <div className="video-timeline">
              <svg
                className="svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="25.377"
                  cy="25.6992"
                  rx="24.3112"
                  ry="24.3338"
                  fill="#101215"
                  stroke="#888E8E"
                />
                <path
                  d="M23.8811 32.8122H22.011V17.8376H23.8811V19.7094H25.7512V22.5172H27.6213V24.389H29.4914V26.2608H27.6213V28.1327H25.7512V30.9404H23.8811V32.8122Z"
                  fill="#CAE771"
                />
              </svg>

              <div className="timeline">
                <span style={{ width: "20%" }}></span>
              </div>
              <div className="video-time">03:23</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container pb-5 footer-content">
          <a href="" className="btn">
            example section
          </a>
          <p>
            Lorem
            <span>
              ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex
              vel
            </span>
            massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed
            sodales eros mollis eget. Morbi vitae libero in nunc sodales.
          </p>
          <a href="" className="seemore">
            see more
          </a>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo">
                <img src="logo-name.png" alt="" />
              </div>
              <div className="copyright-text">
                © 2024 <strong>Brand Name</strong> All rights reserved.
                Unauthorized use or copying of this brand is strictly
                prohibited. No part of this website may be reproduced,
                distributed, or transmitted in any form or by any means,
                including photocopying, recording, or other electronic or
                mechanical methods, without the prior written permission of{" "}
                <strong>Brand Name</strong> , except in the case of brief
                quotations embodied in critical reviews and certain other
                non-commercial uses permitted by copyright law.
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="assets/js/jquery.min.js"></script>
      <script src="./assets/libs/bootstrap/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;
