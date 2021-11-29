import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <Container>
       
       <Segment size="huge" className="margin-top-100">
            Oops, we couldn't find that page.

        </Segment>
    </Container>
  );
};

export default NoMatch;