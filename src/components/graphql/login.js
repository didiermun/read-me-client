import {gql} from 'graphql-tag'
export const LOGIN_USER = gql`
  mutation login($userData: loginInput!) {
    login(
      logindata: $userData
    ) {
      token
    }
  }
`