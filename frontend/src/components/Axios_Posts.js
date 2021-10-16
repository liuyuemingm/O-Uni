import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import LikeButton from './LikeButton';
import { PostData } from './PostData';
import SellIcon from '@mui/icons-material/Sell';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Button from '@mui/material/Button';
import Respond from './Axios_Response';
import AxiosRating from './Axios_Rating';


export default function Posts() {
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div style={{ width: "75%", margin: "20px", textAlign: "left", background: "darkred", padding: "20px" }}>
      <div>
        {PostData.map((item, index) => {
          return (
            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary>
                <div style={{ margin: "10px 12px 6px", display: "inline" }}>
                  {(() => {
                    if (item.post_type == "GP") {
                      return (
                        <FavoriteIcon color="error" />
                      )
                    } else if (item.post_type == "IT") {
                      return (
                        <SellIcon color="info" />
                      )
                    } else {
                      return (
                        <StarIcon color="warning" />
                      )
                    }
                  })()}
                </div>
                {(() => {
                  if (item.post_type == "GP") {
                    return (
                      <p style={{ margin: "11px", position: "absolute", left: " 50px" }}>  {item.reaction}</p>
                    )
                  } else if (item.post_type == "IT") {
                    return (
                      <p style={{ margin: "11px", position: "absolute", left: " 50px" }}> $ {item.reaction}</p>
                    )
                  } else {
                    return (
                      <p style={{ margin: "11px", position: "absolute", left: " 50px" }}>  {item.reaction}/ 5</p>
                    )
                  }
                })()}

                <p style={{ margin: "10px", position: "absolute", left: " 200px" }}> <b> {item.title} </b></p>
                <p style={{ margin: "10px", position: "absolute", left: " 600px" }}> {item.author} </p>
                <p style={{ margin: "10px", position: "absolute", left: " 750px" }}> {item.date} </p>
              </AccordionSummary>
              <AccordionDetails>
                {item.message}
                <div style={{ position: "relative", left: "90%" }}>
                  {(() => {
                    if (item.post_type == "GP") {
                      return (<LikeButton />)
                    }
                  })()}
                </div>
                <p />
                <Divider variant="fullWidth" />

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <Divider />
                  {item.responses.map((res, key) => {
                    return (
                      <div>
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={res.name}
                            secondary={res.response}
                          />
                        </ListItem>
                        <Divider variant="fullWidth" component="li" />
                      </div>
                    )
                  })}
                </List>
                <Divider variant="fullWidth" />
                <div style={{ position: "relative", margin: "12px" }}>
                  {(() => {
                    if (item.post_type == "CR") {
                      return (<AxiosRating />)
                    }
                  })()}
                </div>
                <Respond title={item.title} />
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </div >

  );
}
