import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
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
                <React.Fragment id="form" style='center'>
                    <AppBar title="Multi-Step Form Demo" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email }
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city }
                        />
                        <ListItem
                            primaryText="bio"
                            secondaryText={ bio }
                        />
                    </List>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Success"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 55
    }
}

export default Success;
