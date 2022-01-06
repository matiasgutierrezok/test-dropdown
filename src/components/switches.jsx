import * as React from 'react';
import { Switch } from '@material-ui/core';

export default function ControlledSwitches(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.cb(props.label);
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
