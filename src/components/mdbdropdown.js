// src/components/CustomDropdown.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './CustomDropdowns.css';

const CustomDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Main Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown>
          <Dropdown.Toggle as="a" href="#" className="dropdown-item">
            Sub Dropdown 1
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-submenu">
            <Dropdown.Item href="#item-1-1">Item 1-1</Dropdown.Item>
            <Dropdown.Item href="#item-1-2">Item 1-2</Dropdown.Item>
            <Dropdown.Item href="#item-1-3">Item 1-3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as="a" href="#" className="dropdown-item">
            Sub Dropdown 2
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-submenu">
            <Dropdown.Item href="#item-2-1">Item 2-1</Dropdown.Item>
            <Dropdown.Item href="#item-2-2">Item 2-2</Dropdown.Item>
            <Dropdown.Item href="#item-2-3">Item 2-3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle as="a" href="#" className="dropdown-item">
            Sub Dropdown 3
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-submenu-right">
            <Dropdown.Item href="#item-3-1">Item 3-1</Dropdown.Item>
            <Dropdown.Item href="#item-3-2">Item 3-2</Dropdown.Item>
            <Dropdown.Item href="#item-3-3">Item 3-3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
