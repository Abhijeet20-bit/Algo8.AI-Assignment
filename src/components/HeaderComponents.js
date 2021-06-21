import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';

//creating header
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }
    render() {
        return (
            <>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">Mobile Store</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ms-auto">
                            <form class="d-flex me-5">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" aria-describedby="button-add" />
                                <button id="button-add" class="btn btn-success" type="button"><span className="fa fa-search fa-lg"></span></button>
                            </form>
                            <NavItem className="me-2">
                                <span className="fa fa-home fa-lg"> Home</span>
                            </NavItem>
                            <NavItem className="me-2">
                                <span className="fa fa-info fa-lg"> About Us</span>
                            </NavItem>
                            <NavItem className="me-2">
                                <span className="fa fa-address-card fa-lg"> Contact Us</span>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className="me-2">
                                <DropdownToggle nav caret>
                                    <span className="fa fa-sign-in fa-lg"> Log In!</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Customer Login
                                    </DropdownItem>
                                    <DropdownItem>
                                        Admin Login
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;