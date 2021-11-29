import React from "react";
import { useQuery } from '@apollo/client';
import {QUERY_JOBS} from '../utils/queries';
import {QUERY_ME_BASIC} from '../utils/queries';
import {
  Container,
  Input,
  Segment,
  Header,
  Dropdown,
  Grid,
  Divider,
  Sticky,
  Label,
  Form
} from "semantic-ui-react";
import JobList from "../components/JobList"


const options = [
  { key: 1, text: "Filter by date", value: 1 },
  { key: 2, text: "Filter by alphabet", value: 2 },
  { key: 3, text: "Filter by Salary range", value: 3 },
];
const renderLabel = (label) => ({
  color: "blue",
  content: `Customized label - ${label.text}`,
  icon: "check",
});
 

const Home = () => {

  const { loading, data } = useQuery(QUERY_JOBS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const jobs = data?.jobs || [];
 // submit form
 const handleFormSubmit = async event => {
  console.log('jobs', jobs);

  event.preventDefault();

  try {
    {loading ? (
      <div>Loading...</div>
    ) : (
      <JobList jobs={jobs} title="List of Jobs Searched..." />
      
    )}
    
  } catch (e) {
    console.error(e);
  }
};

  

  return (
    <Container>
      <div className="margin-top-50">
        <Header as="h2">
          <Header.Content>
            Want a Job?
            <Header.Subheader>
              Search for a job by keyword or postion
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Form onSubmit={handleFormSubmit}>
        <Input
          icon={{ name: "search", circular: true, link: true }}
          fluid
          placeholder="Search..."  
          onSubmit={handleFormSubmit}
        />
       </Form>
      
      </div>

      <Divider />

      <Grid className="margin-top-20">
        <Grid.Column width={4}>
          
            <Segment>
              <Label as='f' color="green" ribbon>Filters</Label>

              <Dropdown
                multiple
                selection
                
                options={options}
                placeholder="Active filters"
                renderLabel={renderLabel}
                className="margin-top-20"
              />
            </Segment>
          
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid container stackable columns={3} divided="vertically" >
            <Grid.Row stretched padded>
                {/* Repeating card */}
                <JobList jobs={jobs} title="Here is the list of Jobs"/>
              {/* End Repeating card */}
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Home;
