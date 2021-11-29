import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Button, Icon, Divider } from "semantic-ui-react";


const JobList = ({ jobs, jobtitle }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }
  
  const extra = (
    <Link to="/job">
      <Button animated primary>
        <Button.Content visible>Apply Now</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </Link>
    );

  return (
    <>
      
        {jobs &&
          jobs.map((job) => (
              <Grid.Column key={job._id} className="margin-bottom-50">
                <Card className="card"
                  header={job.jobtitle}
                  description={job.description}
                  meta="Microsoft"
                  extra={    <Link to={`/job/${job._id}`}>
                  <Button animated primary>
                    <Button.Content visible>Apply Now</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Link>}
                />
              </Grid.Column>
              
            
          ))}
      
    </>
  );
};

export default JobList;
