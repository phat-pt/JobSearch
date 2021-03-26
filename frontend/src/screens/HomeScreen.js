import React from 'react'
import { Row, Col } from 'react-bootstrap'
import jobs from '../jobs'
import Jobs from "../components/Jobs";



function HomeScreen() {
    return (
        <div>
            <h1> Lastest Jobs </h1>
                {jobs.map(job => (
                    <Row>
                        <Jobs job ={job} />
                    </Row> 
                ))}
        </div>
    ) 
}

export default HomeScreen
