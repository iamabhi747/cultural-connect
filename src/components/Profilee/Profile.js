import React from 'react';
import Profile from './Profile.jpeg';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function EditButton() {
  return (
    <div className="gradient-custom-2 bg-white" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <div>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={Profile}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />

                </div>
                <div className="ms-3" style={{ marginTop: '110px' }}>
                  <MDBTypography style={{ color: 'yellow'}} tag="h6">⭐️ Organization</MDBTypography>
                  <MDBTypography tag="h5">United People's Foundation</MDBTypography>
                  <MDBCardText>Kolhapur</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <button className='mr-12 curosor-pointer border-1 rounded-md p-2 border-black'>
                    Edit profile
                  </button>
                  <div>
                    <MDBCardText className="mb-1 h5">4</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-0">United Peoples Foundation|NGO</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Non-Governmental Organization (NGO)</MDBCardText>
                    <MDBCardText className="font-italic mb-1">We are a bunch of young minds working for the betterment of society.</MDBCardText>
                    
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent Posts</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://static.toiimg.com/thumb/msid-105827889,imgsize-1208261,width-400,resizemode-4/105827889.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://static.toiimg.com/thumb/msid-108073571,imgsize-138876,width-400,resizemode-4/108073571.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://static.toiimg.com/thumb/msid-107897936,imgsize-62288,width-400,height-225,resizemode-72/107897936.jpg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}