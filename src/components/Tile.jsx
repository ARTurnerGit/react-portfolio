import React from "react";
// import picture from "../images/nc-news-backend.png";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const images = require.context("../images", true);

function Tile({ project }) {
  let picture = images("./" + project.img);
  return (
    <Card className="project-tile" key={project.name}>
      <img src={picture} alt="placeholder" />
      <CardContent>
        <Typography>{`${project.name}, ${project.description}`}</Typography>
      </CardContent>
      <CardActions>
        <Button>Application</Button>
        <Button>Repository</Button>
      </CardActions>
    </Card>
  );
}

export default Tile;
