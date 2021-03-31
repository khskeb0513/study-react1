import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import pknuLogo from "../../pknu.svg";

interface NavigationBarProps {
    parentDispatch: any;
    state: any;
}

const NavigationBar = (props: NavigationBarProps) => {
    return (
        <>
            <Navbar variant={"dark"} className={'navbar-custom'} expand="lg">
                <Navbar.Brand href="#home">
                    <img className={'navbar-logo'} width={36} height={36} src={pknuLogo} alt={'부경대 로고'}/>{' '}
                    LIBISOR.COM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="basic-navbar-nav, justify-content-end">
                    <Nav.Link className={'navbar-link'} href={"#home"}>열람실 좌석확인</Nav.Link>
                    {props.state.loginBtn ?
                        <Nav.Link className={'navbar-link'} onClick={() => props.parentDispatch({type: 'loginModal'})}>
                            로그인 / 회원가입
                        </Nav.Link> :
                        <Nav.Link className={'navbar-link'} onClick={() => {
                        }}>
                            xxx@pukyong.ac.kr
                        </Nav.Link>}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationBar
