import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: '20px',
  },
  heading: {
    backgroundColor: '#1e2127',
    fontWeight: 800,
    fontSize: '1.2rem',
  },

  body: {
    backgroundColor: '#181b21',
    textAlign: 'left',
    padding: '30px',
    color: '#d9d9d9',
  },

  text: {
    overflow: 'hidden'
  }
}));



const Accordion = (props) => {

  const classes = useStyles();
  return (
    <div className="accordion-container">
      {props.reviews?.slice(0,Math.min(props.reviews.length, 5)).map((rev, key) =>

        <ExpansionPanel key={key} className={classes.card}>
          <ExpansionPanelSummary className={classes.heading + " accordion-header"} expandIcon={<ExpandMoreIcon />} aria-controls={"panel"+ key + "a-content"} id={"panel" +key+ "a-header"}>
            <span className="accordion-header"> {rev.author?? 'Unknown Author'} </span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.body}>
            <p className={classes.text}>
              {rev.content?? 'Review Not Available'}
            </p>
          </ExpansionPanelDetails>
      </ExpansionPanel>
      )}
    </div>
  );
}

export default Accordion;