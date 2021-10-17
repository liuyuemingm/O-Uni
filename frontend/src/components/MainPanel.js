import { Button } from "@mui/material";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import NewPost from "./NewPost";
import PostsAccordion from "./PostsAccordion"

export default function MainPanel() {
  const [active, setActive] = useState("Threads")

  return (
    <div>
      <div style={{ padding: "20px", position: "absolute", left: "80%" }}>
        <Button variant="contained" onClick={() => setActive("New post")}>New Post </Button>
      </div>



      <div>
        {active === "New post" && <div
          style={{
            width: "75%",
            margin: "20px",
            textAlign: "left",
            border: "solid 5px darkred",
            padding: "20px",
          }}> <NewPost />
          <div style={{
            padding: "20px",
            position: "relative",
            left: "90%"
          }}>
            <Button variant="contained" onClick={() => setActive("Threads")}> Cancel </Button>
          </div>

        </div>}
        {active === "Threads" && <PostsAccordion />}

      </div>

    </div >
  )
}