// frontend/src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className="card">
                <h2>Welcome to Healthcare Booking System</h2>
                <p>
                    Here you can register yourself as a patient and as a doctor. 
                    <p>
                    We provide you a seamless experience of booking and registering appoinments.
                </p>
                </p>
            </div>
        </>
    );
};

export default Home;
