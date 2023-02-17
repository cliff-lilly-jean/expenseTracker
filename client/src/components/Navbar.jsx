import { Stack, Box, Typography } from '@mui/material';

import { icons } from '../utils/constants';
// import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';


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
            <SidebarToggleBtn />
        </Box>
        <Box sx={{
            color: 'white',
            flex: 2
        }}

        >
            <Typography>
                <span>Accountant</span>
            </Typography>
        </Box>
        <Box sx={{
            color: 'white'
        }}
        >
            <ManageAccountsSharpIcon
                sx={{
                    cursor: 'pointer'
                }} />
        </Box>
    </Stack>

);

export default Navbar;