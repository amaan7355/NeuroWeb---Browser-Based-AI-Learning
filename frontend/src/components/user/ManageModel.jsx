import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const ManageModel = () => {

    const [userModel, setuserModel] = useState([]);
    const fetchuserModel = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setuserModel(data);
        }
    };
    useEffect(() => {
        fetchuserModel();
    }, []);



    return (
        <div className='container'>
            <section id='header'>
                <div className='manage-model mb-5'>
                    <h1 className='text-white'>Hello There!</h1>
                </div>
            </section>
            <h1 className='text-center'>hello</h1>
            <div className='container mt-5'>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Created At</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {userModel.map((user) => {
                            return (
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={user.avatar}
                                                alt=''
                                                style={{ width: '45px', height: '45px' }}
                                                className='rounded-circle'
                                            />
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>{user.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{user.email}</p>
                                        
                                    </td>
                                    <td>
                                        <MDBBadge color='success' pill>
                                            Verified
                                        </MDBBadge>
                                    </td>
                                    <td></td>
                                    <td>
                                        <MDBBtn color='link' rounded size='sm'>
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                            );
                        })}
                    </MDBTableBody>
                </MDBTable>

            </div>
        </div>
    );
}

export default ManageModel;