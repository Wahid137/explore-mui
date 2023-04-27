import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, colored }) => {
    return (
        <div>
            <Typography>
                {title}{' '}
                {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
            </Typography>

        </div>
    );
};

export default SectionTitle;