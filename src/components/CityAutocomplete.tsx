import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { useEffect, useState, Fragment } from "react";
import { cityValidation } from "../hooks/handles";
import { City } from "../types/City";
import { sleep } from "../hooks/sleep";

/**
 * Renders a city autocomplete component that allows users to search for cities.
 *
 * @return {JSX.Element} The rendered city autocomplete component.
 */
export const CityAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState<string>("");
  const [options, setOptions] = useState<City[]>([]);
  const loading = open && options.length === 0;
  useEffect(() => {
    let active = true;
    if (!loading) return undefined;
    (async () => {
      await sleep(1e3);
      if (active) {
        const data: City[] = await cityValidation(input || "");
        setOptions(data);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, input]);
  return (
    <Autocomplete
      id="city-autocomplete"
      options={options}
      noOptionsText="No options"
      sx={{ width: 300 }}
      getOptionLabel={(option: City) => option.cityName}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
        setOptions([]);
      }}
      onInputChange={(_, newInput) => {
        setInput(newInput);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="City Name"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};
