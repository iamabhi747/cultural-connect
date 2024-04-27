import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client';

const GET_COMMUNITY = gql`
  query GetCommunity($_id: ID!) {
    community(id: $_id){
      name
      description
      followers
    }
  }
`;

function CommunityProfile(props) {
  let location = useLocation();
  const _id = location.search.split('=')[1];

  const { loading, error, data } = useQuery(GET_COMMUNITY, {
    variables: { _id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return error.graphQLErrors.map(({ message }, i) => (
    <p key={i}>{message}</p>
  ));

  console.log(data);

  return (
    <>
      <div className="gradient-custom-2 bg-white" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{props.title}</MDBTypography>
                  <MDBCardText>{data.community.name}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1 ">
                    
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{data.community.followers}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{data.community.description}</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
              </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  )
}

export default CommunityProfile
