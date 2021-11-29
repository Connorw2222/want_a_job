import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($jobtitle: String!) {
    addJob(jobtitle: $jobtitle) {
        _id
        jobtitle
        createdAt
        username
        company
        description
        benefits
        salary
        requirements
        roletype
        linktowebsite
        additionalinfo
        resume
    }
  }
`;