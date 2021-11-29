import React from "react";
import {
  Container,
  Menu,
  Image,
  Button,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container fluid>
      <Menu size="large" borderless>
        <Link to="/">
          <Image src="logo.png" size="small" />
        </Link>
        {Auth.loggedIn() ? (
          <></>
        ) : (
          <>
            <Menu.Item>
              <Link to="/membership">
                <Button>Payment Options</Button>
              </Link>
            </Menu.Item>
          </>
        )}

        <Menu.Menu position="right">
          {Auth.loggedIn() ? (
            <>
              <Menu.Item>
                <Dropdown text="Me" pointing>
                  <Dropdown.Menu>
                    <Dropdown.Header>Choose:</Dropdown.Header>
                    <Dropdown.Item>
                      <a href="/" onClick={logout}>
                        Logout
                      </a>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                <Link to="/">
                  <Button icon labelPosition="right">
                    Search
                    <Icon name="search" />
                  </Button>
                </Link>

                <Link to="/addJob">
                  <Button icon labelPosition="right" primary>
                    Create Job
                    <Icon name="add" />
                  </Button>
                </Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item>
                <Link to="/login">
                  <Button animated="vertical">
                    <Button.Content hidden>Login</Button.Content>
                    <Button.Content visible>
                      <Icon name="user" />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button animated="vertical" primary>
                    <Button.Content hidden>Signup</Button.Content>
                    <Button.Content visible>
                      <Icon name="user plus" />
                    </Button.Content>
                  </Button>
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
