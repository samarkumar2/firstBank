import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './SideBar.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function SideBar() {
  return (
    <div>
 <header>
        <nav
          id="sidebarMenu"
          className="collapse d-md-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3">
            <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple active"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span style={{fontSize:'1.5rem'}}><AccountBalanceIcon/>First Bank</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Webiste traffic</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Password</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Analytics</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span>SEO</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-bar fa-fw me-3"></i>
                <span>Orders</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>International</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-building fa-fw me-3"></i>
                <span>Partners</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-calendar fa-fw me-3"></i>
                <span>Calendar</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-users fa-fw me-3"></i>
                <span>Users</span>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-money-bill fa-fw me-3"></i>
                <span>Sales</span>
              </a>
            </div>
          </div>
        </nav>

      </header>


    </div>
  )
}
