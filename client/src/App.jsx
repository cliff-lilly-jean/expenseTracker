import { Stack, Box } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Navbar, Dashboard, TransactionDetail, Transactions, Budget, BudgetItem, Expenses } from './components/index';

function App() {

  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/transactions'} element={<Transactions />} />
          <Route path={'/transactions/:id'} element={<TransactionDetail />} />
          <Route path={'/budget'} element={<Budget />} />
          <Route path={'/budget/:id'} element={<BudgetItem />} />
          <Route path={'/expenses'} element={<Expenses />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
