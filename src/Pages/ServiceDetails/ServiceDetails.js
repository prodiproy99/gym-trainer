import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2 className='text-center mt-5'>This Service id page: {serviceId}</h2>
            <Link to='/checkout'>
                <div className="text-center">
                    <button className='btn btn-primary proceedBtn'>Proceed CheckOut</button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;