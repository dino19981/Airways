'use client';

import { Airport } from '@/shared/api/requests/airport';
import { Autocomplete, TextField } from '@mui/material';

type Props = {
  airports: Airport[];
  label: string;
};

export function AirportSelector({ airports, label }: Props) {
  return (
    <Autocomplete
      disablePortal
      options={airports}
      getOptionLabel={(option) => option.name}
      sx={{ width: 299 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems='center'>
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                {parts.map((part, index) => (
                  <Box
                    key={index}
                    component='span'
                    sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                  >
                    {part.text}
                  </Box>
                ))}
                <Typography variant='body2' color='text.secondary'>
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}
