import React from "react";
import {
  Container,
  Header,
  Grid,
  Card,
  Icon,
  Checkbox,
  Button,
  Divider, 
  Message
} from "semantic-ui-react";

const MembershipPlans = () => {
  return (
    <Container className="max-width-800">
      <div className="margin-top-50">
        <Header as="h2">
          <Header.Content>
            Flexible Plans
            <Header.Subheader>
              Choose a plan that works best for you and your team.
            </Header.Subheader>
          </Header.Content>
        </Header>

        <Grid columns={3} className="margin-top-50 margin-0">
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Basic Plan</Card.Header>
                  <Card.Meta>
                    <span>Essentials to get you going.</span>
                  </Card.Meta>
                  <Card.Description style={{ lineHeight: 3}}>
                  <Divider></Divider>
                    <Checkbox label="Afordable plan to get the results you're looking for." defaultChecked disabled />
                    <Checkbox label="Up to 10GB of cloud storage." defaultChecked disabled />
                    <Checkbox label="Post up to 10 listings per month." defaultChecked disabled />
                    <Checkbox label="5 ads promotion per month" defaultChecked disabled />
                    <Checkbox label="Share plans amongst 5 team members." defaultChecked disabled />
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button animated="vertical" fluid>
                    <Button.Content visible>
                      Choose Plan
                    </Button.Content>
                    <Button.Content hidden>$99.99 a month</Button.Content>
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
            <Card className="popular-plan">
                <Card.Content>
                  <Card.Header>Unlimited Plan</Card.Header>
                  <Card.Meta>
                    <span>The best plan for any business.</span>
                  </Card.Meta>
                  <Card.Description style={{ lineHeight: 3}}>
                  <Divider></Divider>
                    <Checkbox label="Plan to get the results you're looking for and more." defaultChecked disabled />
                    <Checkbox label="Unlimited cloud storage." defaultChecked disabled />
                    <Checkbox label="Unlimited listings." defaultChecked disabled />
                    <Checkbox label="Unlimited account creation." defaultChecked disabled />
                    <Checkbox label="Access to pro features." defaultChecked disabled />
                    <Checkbox label="Unlimited listings promotion." defaultChecked disabled />
                    <Checkbox label="Tech support priority." defaultChecked disabled />
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Message color='green'><Icon name='star' />Most Popular</Message>
                  <Button animated="vertical" color="blue" fluid>
                    <Button.Content visible>
                      Choose Plan
                    </Button.Content>
                    <Button.Content hidden>$499.99 a month</Button.Content>
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
            <Card>
                <Card.Content>
                  <Card.Header>Executive Plan</Card.Header>
                  <Card.Meta>
                    <span>The largest plan ever.</span>
                  </Card.Meta>
                  <Card.Description style={{ lineHeight: 3}}>
                  <Divider></Divider>
                    <Checkbox label="Built for large businesses." defaultChecked disabled />
                    <Checkbox label="Unlimited cloud storage." defaultChecked disabled />
                    <Checkbox label="Unlimited listings." defaultChecked disabled />
                    <Checkbox label="Unlimited account creation." defaultChecked disabled />
                    <Checkbox label="Access to pro features." defaultChecked disabled />
                    <Checkbox label="Unlimited listings promotion." defaultChecked disabled />
                    <Checkbox label="Tech support priority." defaultChecked disabled />
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button animated="vertical" fluid>
                    <Button.Content visible>
                      Choose Plan
                    </Button.Content>
                    <Button.Content hidden>$999.99 a month</Button.Content>
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
  );
};

export default MembershipPlans;
