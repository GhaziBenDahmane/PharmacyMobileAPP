import React from 'react';
import { ButtonGroup, Button, PricingCard, Card, ThemeProvider } from 'react-native-elements';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


const preds = {
    '01': 811,
    '02': 802,
    '03': 786,
    '04': 791,
    '05': 708,
    '06': 848,
    '07': 835,
    '08': 812,
    '09': 786,
    '10': 767,
    '11': 770,
    '12': 702,
    '13': 827,
    '14': 800,
    '15': 794,
    '16': 770,
    '17': 756,
    '18': 763,
    '19': 700,
    '20': 831,
    '21': 825,
    '22': 811,
    '23': 793,
    '24': 786,
    '25': 800,
    '26': 744,
    '27': 812,
    '28': 786,
    '29': 767,
    '30': 770,
    '31': 813,

}

export default class Expected extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['Today', 'tomorrow']
        const { selectedIndex } = this.state
        var date = (new Date().getDate() + this.state.selectedIndex).toString()
        const x = preds[date].toString();
        return (
            <ThemeProvider>
                <Card
                    title={'Predictions for ' + buttons[this.state.selectedIndex]}>
                    <Button title={x}
                        disabled
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                        }}

                    ></Button>
                </Card>

                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                />
            </ThemeProvider>
        )
    }
}