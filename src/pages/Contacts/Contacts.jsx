import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';

const Contacts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h4" align="center">
            Phonebook
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ContactForm />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Filter />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ContactList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contacts;
