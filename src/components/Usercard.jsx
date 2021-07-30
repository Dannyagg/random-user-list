/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this._fetchUsercard();
    }

    _fetchUsercard = async () => {
        const response = await fetch('https://randomuser.me/api/?results=4').then((response) => response.json());
        this.setState({
            users: response.results
        });

        console.log(response)
    }

    render() {
        return (
            <>
                <h3>Random Picks </h3>
                {this.state.users.map(users =>
                    <div class='frame'>
                        <img alt='user-image' src={users.picture.large}></img> <br />

                        Name: {users.name.title}   {users.name.first}   {users.name.last} <br />
                        Gender: {users.gender} <br />
                        Age: {users.dob.age} <br />
                        Location: {users.location.country}, {users.location.state} <br />
                        Email: {users.email}

                    </div>)}


            </>
        );

    }
}
export default UserInfo;