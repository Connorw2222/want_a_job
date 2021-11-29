import React from "react";
import {
  Button,
  Container,
  Form,
  Segment,
  Header,
  Grid,
  Divider,
  List,
} from "semantic-ui-react";

const typeOfPosition = [
  { key: "ft", value: "fullTime", text: "Full-Time" },
  { key: "pt", value: "partTime", text: "Part-Time" },
  { key: "cw", value: "contractWork", text: "Contract Work" },
  { key: "ts", value: "temp", text: "Temp/Seasonal" },
];

const JobForm = () => {
  return (
    <Container>
      <div className="margin-top-50"></div>

      <Grid className="margin-top-20">
        <Grid.Column width={4} className="margin-top-100">
          <Header as="h3">
            <Header.Content>
              Required fields
              <Header.Subheader>
                Please make sure to fill out the following parts of the form
                prior to pressing submit.
              </Header.Subheader>
            </Header.Content>
          </Header>

          <List bulleted>
            <List.Item>Job Title</List.Item>
            <List.Item>Type of Position</List.Item>
            <List.Item>Location</List.Item>
            <List.Item>Job Description</List.Item>
            <List.Item>Company Description</List.Item>
            <List.Item>Requirements</List.Item>
          </List>
          <Divider />
          <Header as="h3">
            <Header.Content>
              Optional fields
              <Header.Subheader>
                The listed field below are optionals but we encorage every
                employeer to share this info to attract more candidates.
              </Header.Subheader>
            </Header.Content>
          </Header>
          <List bulleted>
            <List.Item>Benefits</List.Item>
            <List.Item>Salary</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as="h2">
            <Header.Content>
              Post a Job
              <Header.Subheader>
                Fill out the form to submit a listing.
              </Header.Subheader>
              <Divider />
              <Header.Subheader>
                Please make sure to fill out the following parts of the form
                prior to pressing submit.
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Segment>
            {/* From goes here */}
            <Form>
              <Form.Group widths="equal">
                {/* Job Title */}
                <Form.Input label="Job Title" placeholder="Title" />
                {/* Type of Postion */}

                <Form.Select
                  placeholder="Type of Position"
                  options={typeOfPosition}
                  label="Type of Position"
                />
                {/* Location */}
                <Form.Input
                  icon="location arrow"
                  iconPosition="right"
                  label="Location"
                  placeholder="Location"
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.TextArea
                  placeholder="Tell us more"
                  label="Job Description"
                />
                <Form.TextArea
                  placeholder="Tell us more"
                  label="Company Description"
                />
              </Form.Group>

              <Form.Group widths="equal">
                {/* requirements */}

                <Form.TextArea
                  placeholder="Tell us about the requiremnts of the position"
                  label="Requirements"
                />
                <Form.TextArea label="Benefits (optional)" />
              </Form.Group>

              {/* Salary */}
              <Form.Input
                icon="dollar sign"
                iconPosition="left"
                type="number"
                label="Salary (optional)"
                placeholder="Salary or Pay (optional)"
              />

              <Button primary content="Submit" icon="envelope" />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default JobForm;
