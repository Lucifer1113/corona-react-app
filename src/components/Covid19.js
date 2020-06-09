import React, { Component } from "react";
import '../Styles/Covid19.css';
import axios from 'axios';

import {Table} from 'react-bootstrap';

class Covid19 extends Component {

    constructor(props){
        super(props);
        this.state={
            global: {},
            countries: []
        };
    }

    componentDidMount(){
        
        let url = 'https://api.covid19api.com/summary'
        axios.get(url)
        .then(data=>{
            this.setState({global: data.data.Global, countries: data.data.Countries})
        })
        .catch(err=>console.log(err) )
    }

    render() {
        const {countries, global} = this.state;
    return (
      <div className="body">
        <h2>Covid19 global updates</h2>
        <div className='data'>
            <div className='sub-data'><span>New Confirmed: {global.NewConfirmed}</span></div>
            <div className='sub-data'><span>New Deaths: {global.NewDeaths}</span></div>
            <div className='sub-data'><span>New Recovered: {global.NewRecovered}</span></div>
            <div className='sub-data'><span>Total Confirmed: {global.TotalConfirmed}</span></div>
            <div className='sub-data'><span>Total Deaths: {global.TotalDeaths}</span></div>
            <div className='sub-data'><span>Total Recovered: {global.TotalRecovered}</span></div>
        </div>
        <div className='container'>
            <Table  bordered hover responsive> 
                <thead>
                <tr>
                    <th>Country</th>
                    <th>New Confirmed</th>
                    <th>Total Confirmed</th>
                    <th>New Deaths</th>
                    <th>Total Deaths</th>
                    <th>New Recovered</th>
                    <th>Total Recovered</th>
                </tr>
                </thead>
                <tbody>
                    {countries.map(singleCountry=> (
                    <tr key={singleCountry.CountryCode}>
                        <td>{singleCountry.Country}</td>
                        <td>4567</td>
                        <td>345678</td>
                        <td>4567</td>
                        <td>23456</td>
                        <td>{singleCountry.NewRecovered}</td>
                        <td>{singleCountry.TotalRecovered}</td>
                    </tr>
                    ))}
                </tbody>
                
            </Table>
        </div>
      </div>
    );
  }
}

export default Covid19;
