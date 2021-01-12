import React from 'react'

import "./Footer.css"
import ScrollTopButton from "../ScrollTopButtonComponent/ScrollTopButton"

function Footer() {

  return (
    <>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
              <span>Copyright © 2021, All Rights Reserved</span>
            </div>
            <div class="col-xs-6 col-sm col-md-6">
              <div class="copyright-menu">
                <ul>
                  <li>
                    <a href="https://www.themoviedb.org/documentation/api">TheMovieDB</a>
                  </li>
                  <li>
                    <a href="https://github.com/marvelouson">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ali-murat-unal/">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-to-top" class="back-to-top">
        <ScrollTopButton />
      </div>
    </>
  )
}

export default Footer
