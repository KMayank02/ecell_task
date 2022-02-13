import React from 'react'

export default function Footer() {
  return (
    <div>
          <footer className="page-footer pt-4">
              <hr className='mb-1'/><hr className='mt-1'/>
              <div className='row'>
                  <div className='col'>
                      <div className="footer-copyright ms-3">Copyright © 2013 Gadget Store, Inc. All Rights Reserved
                      </div>
                  </div>
                  <div className='col'>
                      <div className='text-end me-3'><a className='text-decoration-none text-info' href=''>Privacy Policy</a> | <a href='' className='text-decoration-none text-info'>Terms of Use</a></div>
                  </div>
              </div>
              
          </footer>
    </div>
  )
}
