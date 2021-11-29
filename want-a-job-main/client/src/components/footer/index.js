import React from "react";
import { Container, Grid, List, Header, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Container fluid className="margin-top-100">
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Take My Recipe Web App</List.Item>
                  <List.Item as="a">See code in GitHub</List.Item>
                </List>
                <p>&copy; 2021. All Rights Reserved. </p>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Sitemap" />
                <List link inverted>
                  <List.Item as="a">Log in</List.Item>
                  <List.Item as="a">Sign up</List.Item>
                  <List.Item as="a">Home</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Want A Job?
                </Header>
                <p>Built with love by the team:</p>
                <List link inverted>
                  <List.Item as="a">Connor Werth</List.Item>
                  <List.Item as="a">Jaya Gudipalli</List.Item>
                  <List.Item as="a">Shital Chaudhary</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  );
};

export default Footer;
