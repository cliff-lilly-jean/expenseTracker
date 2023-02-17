import { Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { SidebarToggleBtn, AccountSettings } from './index';

const Navbar = () => (
    <Stack
        direction={{ sm: 'row' }}
        spacing={2}
        alignItems={'center'}
        sx={{
            height: 'auto',
            backgroundColor: '#222',
            padding: '1rem'

        }}
    >
        <Box sx={{
            height: 'auto',
            color: 'white'

        }}>
            <Link to="/" >
                <SidebarToggleBtn />
            </Link>

        </Box>
        <Box sx={{
            color: 'white',
            flex: 2
        }}
        >
            <Typography variant='h5'>
                <span style={{ textAlign: 'center', display: 'block' }}>Accountant</span>
            </Typography>
        </Box>
        <Box sx={{
            color: 'white'
        }}
        >
            <AccountSettings />
        </Box>
    </Stack>

);

export default Navbar;