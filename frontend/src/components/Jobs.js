import React from "react";
import {Card } from "react-bootstrap";
import { Link } from "react-router-dom"

function Jobs({ job }) {
  return (
    <Card className="my-3 p-3 round">
      <Card.Body>
        <Link to={`/job/${job.Id}`}>
          <Card.Title as="div">
            <h3>{job.JobTitle}</h3>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
            <div className = "my-4">
                {job.Companydescription}
            </div>
        </Card.Text>
        <Card.Text as='div'>
            <div className = "my-2">
                {job.Location}
            </div>
        </Card.Text>
      </Card.Body>
    </Card> 
  );
}

export default Jobs;
