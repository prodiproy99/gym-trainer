import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>This is service details page: {serviceId}</h2>
            <Link to='/checkout'>
                <div className="text-center">
                    <button className='btn btn-primary'>Proceed CheckOut</button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;