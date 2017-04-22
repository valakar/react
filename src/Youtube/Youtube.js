import React, { Component } from 'react';

class Youtube extends Component {
    constructor() {
        super();
        this.state = {
            users: null
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({users});
            });
    }

    render() {
        const { users } = this.state;
        console.log(users);
        return (
            <ul className="Youtube">
                Youtube
                {users ? (users.map(user => (
                    <li key={user.id}>{user.login}</li>
                ))) : null}
            </ul>
        );
    }
}

export default Youtube;