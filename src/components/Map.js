import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
        const mapStyles = {
            width: 1100,
            height: 800,
        };
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDh4Xla4IbvbjAwmxgNgNVPG4G7hSD6M-M'
})(Maps);