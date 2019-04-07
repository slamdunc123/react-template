import React, { Component }from 'react';

import axios from 'axios';

// partials
import Button from '../partials/Button';

import PageData from '../data/PageData';
import PageDataObj from '../data/PageDataObj';

export default class Data extends Component {
    constructor(){
        super();
        this.state = {
            userData: [

            ]
        }
    }

    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/albums';
        axios.get(url)
            .then(response => {
                this.setState({
                    userData: response.data
                })
                
            })
            .catch(error => {
                console.log(error);
            })
    
    }

    render(){
        return(
            <div>
                <h1>Data Page</h1>
                {/* <PageData /> */}
                <PageDataObj />
               <table>
                    <thead>
                        <tr>
                            <th>user id</th>
                            <th>user title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.map(user =>
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                        </tr>
                        )}
                    </tbody>
               </table>
                {/* {console.log(this.state.userData)} */}
            </div>
        )
    }
}