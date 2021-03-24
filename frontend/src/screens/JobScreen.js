import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import jobs from "../jobs";

function JobScreen({ match }) {
  const job = jobs.find((p) => p.Id == match.params.Id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{job.JobTitle}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <div> Company: {job.CompanyName}</div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div> Location: {job.Location}</div>
          </ListGroup.Item>
        </ListGroup>
      </Row>

      <Row>
        <Card className="my-3 p-3 round">
        <div dangerouslySetInnerHTML={{ __html: job.JobDescription }} />
        </Card>
      </Row>
    </div>
  );
}

export default JobScreen;
