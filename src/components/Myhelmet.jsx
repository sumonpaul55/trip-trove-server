import React from 'react';
import { Helmet } from 'react-helmet-async';

const Myhelmet = ({ title }) => {
    return (
        <>
            <Helmet>
                <title>TripTrove || {title}</title>
            </Helmet>

        </>
    );
};

export default Myhelmet;