import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Search } from 'lucide-react';
import type { input } from '../../types';
import { useTheme } from '../../theme/theme-provider'; 

export default function Input({ name, search, setName }: input) {
  const { theme } = useTheme();

  return (
    <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Search style={{ marginRight: '5px', width: '20px', color: theme === 'dark' ? '#fff' : '#000' }} />
        <TextField
          onChange={(event) => {
            setName(event.target.value);
            search();
          }}
          value={name}
          id="input-with-sx"
          label="Search..."
          variant="standard"
          InputLabelProps={{
            style: { color: theme === 'dark' ? '#fff' : '#000' }
          }}
          InputProps={{
            style: {
              color: theme === 'dark' ? '#fff' : '#000',
              borderBottom: theme === 'dark' ? '1px solid #888' : undefined
            }
          }}
        />
      </Box>
    </Box>
  );
}
