import { Stack, Box, Typography } from '@mui/material';

// import { AccountCircleSharpIcon } from '../utils/constants';

const Navbar = () => (
    <Stack
        direction={'row'}
    >
        <Box sx={{
            width: 100,
            height: '100vh',
            backgroundColor: 'red'
        }}>
        // SidebarToggleBtn
        </Box>
        <Box>
        // App name
        </Box>
        <Box>
        // ThemeToggleBtn
            {/* <AccountCircleSharpIcon /> */}
        </Box>
    </Stack>

);

export default Navbar;