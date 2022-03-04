import { React } from 'react';
import { useLocation } from "react-router";
import { Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';

function MenuItems() {
  const {pathname} = useLocation();

  const Pagesmenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="About">About Us</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="Features">Features</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="Team">Team</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="Roadmap">Roadmap</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="Career">Career</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="Team">Team</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="FAQs">FAQs</a>
      </Menu.Item>
      <Menu.Item key="7">
        <a href="Whitepaper">Whitepaper</a>
      </Menu.Item>
      <Menu.Item key="8">
        <a href="Contact">Contact Us</a>
      </Menu.Item>
    </Menu>
  );

  return <Menu
    theme="dark"
    mode="horizontal"
    style={{
      display: "flex",
      fontSize: "17px",
      fontWeight: "500",
      width: "100%",
      justifyContent: "center",
    }}
    defaultSelectedKeys={[pathname]}
  >
    <Menu.Item key="/home">
      <NavLink to="/home">Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <Dropdown overlay={Pagesmenu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Pages <DownOutlined />
        </a>
      </Dropdown>
    </Menu.Item>
  </Menu>
}

export default MenuItems;