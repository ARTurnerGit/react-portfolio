import React from "react";
import Tiles from "./Tiles";
import { Typography, Paper, Card, CardContent } from "@material-ui/core";

function Portfolio() {
  return (
    <Paper id="portfolio" elevation={5}>
      <Card className="portfolio-container">
        <CardContent>
          <Typography variant="h2">
            <span className="portfolio-span">P</span>ortfolio
          </Typography>
          <div className="tile-container">
            <Tiles />
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Portfolio;
