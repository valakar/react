import React, { Component } from 'react';

class Youtube extends Component {
    constructor() {
        super();
        this.state = {
            videos: null
        };
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_KEY}&q=dark%20souls`)
            .then(res => res.json())
            .then(({ items }) => {
                this.setState({
                    videos: items
                });
            });
    }

    render() {
        const { videos } = this.state;
        console.log(videos);
        return (
            <ul className="Youtube">
                Youtube
                {videos ? (videos.map((video, index) => (
                    <li key={index}>{video.title}</li>
                ))) : null}
            </ul>
        );
    }
}

export default Youtube;
