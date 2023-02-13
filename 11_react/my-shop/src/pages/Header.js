import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";



function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      {/* 헤더 영역: 상단 네비게이션 바 */}
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => { navigate('/'); }}>이상한 장난감 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/'); }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart'); }}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      {/* 헤더아래 부분 나타내줌(장바구니클릭 시) 경로는 다시 app에서 지정 */}
      <Outlet />
    </>
  );
}

export default Header;


