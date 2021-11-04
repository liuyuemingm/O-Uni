import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import LikeButton from './LikeButton';

export default function PostsThread() {
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
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Post </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> I love the chime concert today. </p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> al343 </p>
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
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Post </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> The Apocalypse Debate was AMAZING </p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> kc56 </p>
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
          <p style={{ margin: "10px", position: "absolute", left: " 50px" }}> 34</p>
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Post </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> Did they run out of ice cream in Okies?</p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> cj226 </p>
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
          <p style={{ margin: "10px", position: "absolute", left: " 100px" }}> <b> Post </b></p>
          <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> Can't believe it's November right now... </p>
          <p style={{ margin: "10px", position: "absolute", left: " 650px" }}> abc20 </p>
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
