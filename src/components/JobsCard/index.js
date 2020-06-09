import React, { Component } from 'react';
import jobIcon01 from '../../img/job01.png';
import api from '../../services/api';
import './index.css';
import io from 'socket.io-client';


export default class JobsCard extends Component {
    state = {
        jobs: []
    }

    async loadData() {
        const response = await api.get('/jobs');
        this.setState({ jobs: response.data });
    }

    registerSocket(){
        const socket = io('https://fullstackbkend.herokuapp.com/');
        socket.on('newjob', newjob=>{
            this.setState({jobs : [newjob,...this.state.jobs]})
            this.loadData();
        });
    }

    componentDidMount() {
        this.registerSocket();
        this.loadData();
    }

    render() {
        return (

            <div className='main-container'>
                {
                    this.state.jobs.map(job => (
                        <div className='jobs-container'>
                            <img src={jobIcon01} alt='' />
                            <div className='jobsCard-desc'>
                                <span>{job.description}</span>
                                <p>{job.company}</p>
                                <p>{job.company_address}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}