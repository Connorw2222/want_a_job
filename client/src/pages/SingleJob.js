import React from 'react'
import { Button, Container, Segment, Header, Icon } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';

import JobList from '../components/JobList';

import { useQuery, gql } from '@apollo/client';
import { QUERY_JOB } from '../utils/queries';


const SingleJob = props => {
    const { id: jobId } = useParams();
  
    const { loading, data } = useQuery(QUERY_JOB, {
      variables: { id: jobId }
    });
  
    const job = data?.job || {};

    return (
        <div>
            <Container>
                <Segment raised>
                    <Button primary style={{ float: "right " }} content='Apply' icon='address card' size='big' />
                    <Header as='h1'>
                        <Icon name='building' />
                        <Header.Content>
                            Job Title: {job.jobtitle}
                            <Header.Subheader>Company Name: {job.company}</Header.Subheader>
                            <Header.Subheader>Website:{job.linktowebsite}</Header.Subheader>
                            <Header.Subheader>Date Posted: </Header.Subheader>
                            <Header.Subheader>Start Date:</Header.Subheader>
                            <Header.Subheader>Type of Position:{job.roletype}</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <div>
                        <h3>
                            Company Description:
                        </h3>
                        <p>
                          {job.description}
                        </p>
                        <h3>
                            Job Description:
                        </h3>
                        <p>
                        {job.description}
                        </p>
                        <h3>
                            Requirements:
                        </h3>
                        <p>
                  {job.requirements}
                        </p>
                        <h3>
                            Salary/Pay and Benefits:
                        </h3>
                        <p>Starting Salary/Pay: {job.salary} </p>
                        <p>
                      {job.benefits}
                        </p>
                    </div>
                </Segment>
            </Container>
        </div>
    )
}
export default SingleJob;