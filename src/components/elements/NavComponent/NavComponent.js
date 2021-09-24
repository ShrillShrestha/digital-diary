import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import styles from './NavComponent.module.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const NavComponent = () => {
  return (
    <Navbar className={styles.nav_main} bg="light" variant="light">
      <Container fluid className={styles.nav_pad}>
        <Navbar.Brand href="/">
          <img
            alt="Company logo"
            src="/images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Digital Diary
        </Navbar.Brand>
        <Nav className={`d-flex ${styles.nav_look}`}>
          <Nav.Link href="/">Categories</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <AmplifySignOut />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComponent;