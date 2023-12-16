import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Pie } from 'react-chartjs-2';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)


const data1 = {
    labels_2: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            labels_2: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const AdminDashboard = () => {

    return (

        <div className='body-dashboard'>
            <div className='container'>
                <h3 className='pt-4 fw-bold'>Dashboard</h3>
                <div className='row mt-4'>
                    <div className='col-md-4'>
                        <div className='card shadow p-2' style={{ border: "none" }}>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img src="https://icon-library.com/images/group-icon-png/group-icon-png-15.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-4 p-1'>
                                    <div className='text-center'>
                                        <h5 className='text-muted fw-bold'>Total Users</h5>
                                        <p>1500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow p-2' style={{ border: "none" }}>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img src="https://dafriedman97.github.io/mlbook/_static/logo.png" alt="" className='img-fluid' />
                                    {/* <i class="fa-solid fa-user fa-2xl pt-4 ms-2"></i> */}
                                </div>

                                <div className='col-md-6 p-1'>
                                    <div className='text-center'>
                                        <h5 className='text-muted fw-bold'>Total Models Trained</h5>
                                        <p>100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow p-2' style={{ border: "none" }}>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/10103/10103506.png" alt="" className='img-fluid' />
                                </div>
                                <div className='col-md-6 p-1'>
                                    <div className='text-center'>
                                        <h5 className='text-muted fw-bold'>Total Feedbacks</h5>
                                        <p>9000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-md-8'>
                        <div className='card shadow p-2' style={{ border: "none" }}>
                            <h3 className='text-center mt-3'>Statistics</h3>
                            <Bar options={options} data={data}></Bar>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow p-2' style={{ border: "none" }}>
                            <h4 className='text-center mt-3'>Visitors</h4>
                            <Pie data={data1} />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <MDBTable align='middle'>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Position</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>
                                            <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <MDBBadge color='success' pill>
                                        Active
                                    </MDBBadge>
                                </td>
                                <td>Senior</td>
                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Alex Ray</p>
                                            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Consultant</p>
                                    <p className='text-muted mb-0'>Finance</p>
                                </td>
                                <td>
                                    <MDBBadge color='primary' pill>
                                        Onboarding
                                    </MDBBadge>
                                </td>
                                <td>Junior</td>
                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Kate Hunington</p>
                                            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Designer</p>
                                    <p className='text-muted mb-0'>UI/UX</p>
                                </td>
                                <td>
                                    <MDBBadge color='warning' pill>
                                        Awaiting
                                    </MDBBadge>
                                </td>
                                <td>Senior</td>
                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>



                {/* 
             */}
            </div>
        </div>

    )
}

export default AdminDashboard;