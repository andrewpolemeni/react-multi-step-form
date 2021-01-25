import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form with API
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <center>
                    <AppBar title="Multi-Step Form Demo" />
                    <p>Congratulations your form was submitted successfully!</p>
                </center>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 55
    }
}

export default Confirm;
