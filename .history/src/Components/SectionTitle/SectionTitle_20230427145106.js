import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, colored }) => {
    return (
        <div>
            <Typography
                sx={{
                    fontSize: '34px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '20px'

                }}
            >
                {title} {' '}
                {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
            </Typography>

        </div>
    );
};

export default SectionTitle;