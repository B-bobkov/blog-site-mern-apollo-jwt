import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_POST = gql`
    {
        query post (_id: ID!){
            post {
                _id
                title
                content
            }
        }
    }
`;

const withPost = Component => props => {
    return (
        <Query query={GET_POST}>
            {({ loading, data }) => {
                return (
                    <Component postsLoading={loading} post={data && data.post} {...props} />
                );
            }}
        </Query>
    )
}

export default withPost;