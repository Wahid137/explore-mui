import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const OurWorks = () => {
    return (
        <Box sx={{ my: 5, mb: 10 }}>
            {/* heading section */}
            <Box

            >
                <SectionTitle
                    title='Here are some of'
                    colored='our works'
                    sx={{
                        textAlign: 'left',
                    }}
                />
            </Box>

        </Box>
    );
};

export default OurWorks;