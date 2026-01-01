import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArrowDown, ArrowUp, Globe } from 'lucide-react';
import afr from "../../icons/africa.png";
import as from "../../icons/asia.png";
import eu from "../../icons/europe.png";
import us from "../../icons/usa1.png";
import aus from "../../icons/aus.png";
import type { Select as SelectType } from '../../types';
import { useTheme } from '../../theme/theme-provider';

export default function SelectVariants({ value, setValue }: SelectType) {
  const { theme } = useTheme();

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 170}}>
      <InputLabel
        id="demo-simple-select-standard-label"
        sx={{ color: theme === 'dark' ? '#fff' : '#000' }}
      >
        Минтақа
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{
          color: theme === 'dark' ? '#fff' : '#000',
          '.MuiSelect-icon': { color: theme === 'dark' ? '#fff' : '#000' },
          '.MuiPaper-root': { backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' },
        }}
      >
        <MenuItem value="all"><Globe /> Ҳамаи Кишварҳо</MenuItem>
        <MenuItem value="bigarea"><ArrowUp className="fill-green-400" /> Калонтарин масоҳат</MenuItem>
        <MenuItem value="smailarea"><ArrowDown className="fill-yellow-400" /> Хурдтарин масоҳат</MenuItem>
        <MenuItem value="bigpopulation"><ArrowUp className="fill-green-400" /> Калонтарин Аҳоли</MenuItem>
        <MenuItem value="smailpopulation"><ArrowDown className="fill-yellow-400" /> Хурдтарин Аҳоли</MenuItem>
        <MenuItem value="as"><img src={as} alt="img" width={20} /> Осиё</MenuItem>
        <MenuItem value="eu"><img src={eu} alt="img" width={20} /> Аврупо</MenuItem>
        <MenuItem value="usa"><img src={us} alt="img" width={20} /> Амрико</MenuItem>
        <MenuItem value="af"><img src={afr} alt="img" width={20} /> Африқо</MenuItem>
        <MenuItem value="aus"><img src={aus} alt="img" width={20} /> Австралия</MenuItem>
      </Select>
    </FormControl>
  );
}
