import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default ({ selectedOption, options, handleClick }) => {
  return (
    <List component='nav' style={{ paddingTop: 0 }}>
      {options.map(option => {
        return (
          <ListItem
            button
            key={option}
            selected={selectedOption === option}
            onClick={e => handleClick(e, option)}
          >
            <ListItemText primary={option} />
          </ListItem>
        );
      })}
    </List>
  );
};
