import gql from "graphql-tag";

export const QUERY_JOBS = gql`
  query jobs($username: String) {
    jobs(username: $username) {
      _id
      jobtitle
      company
      description
      benefits
      salary
      requirements
      roletype
      linktowebsite
      additionalinfo
    }
  }
`;

export const QUERY_JOB = gql`
  query job($id: ID!) {
    job(_id: $id) {
      _id
      jobtitle
      company
      description
      benefits
      salary
      requirements
      roletype
      linktowebsite
      additionalinfo
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      jobs {
        _id
        jobtitle
        createdAt
        username
        company
        description
        benefits
        salary
        requirments
        roletype
        linktowebsite
        additionalinfo
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      jobs {
        _id
        jobtitle
        createdAt
        username
        company
        description
        benefits
        salary
        requirments
        roletype
        linktowebsite
        additionalinfo
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
