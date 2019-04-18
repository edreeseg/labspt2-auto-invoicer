import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import styles from './styles';
import InvoicedChart from './InvoicedChart';

const InvoicedCard = props => {
  const { checked, classes } = props;
  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
      <Paper className={classes.paper} style={{ position: 'relative' }}>
        <Typography variant="h3" gutterBottom>
          Total $ Invoiced
        </Typography>
        <InvoicedChart />
      </Paper>
    </Zoom>
  );
};

export default withStyles(styles)(InvoicedCard);
