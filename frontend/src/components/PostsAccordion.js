import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LikeButton from './LikeButton';

export default function PostsAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: "75%", margin: "20px", textAlign: "left", background: "darkred", padding: "20px" }}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <LikeButton />
          <p style={{ margin: "10px", position: "absolute", left: " 50px" }}> 25</p>
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Camle </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> Her name is O. She sits in our exams.</p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> sad_me21</p>
          <p style={{ margin: "10px", position: "absolute", left: " 750px" }}> 5 replies</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <LikeButton />
          <p style={{ margin: "10px", position: "absolute", left: " 50px" }}> 13</p>
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> O </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> She is a camle.</p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> anony_ta </p>
          <p style={{ margin: "10px", position: "absolute", left: " 750px" }}> 0 replies</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <LikeButton />
          <p style={{ margin: "10px", position: "absolute", left: " 50px" }}> 0</p>
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Celebration </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> of learning 2.</p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> Clarkson</p>
          <p style={{ margin: "10px", position: "absolute", left: " 750px" }}> 5 replies</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <LikeButton />
          <p style={{ margin: "10px", position: "absolute", left: " 50px" }}> 46</p>
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Drop ddl? </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> Will the system crash if I drop on the last day?</p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> abc20</p>
          <p style={{ margin: "10px", position: "absolute", left: " 750px" }}> 1 replies</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>



    </div>
  );
}
