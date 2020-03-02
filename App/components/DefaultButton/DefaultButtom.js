/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

//color
import AppColor from '../../src/utils/AppColor';

class DefaultButton extends React.Component {

    constructor() {
        super();
    }

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        return (
                <TouchableOpacity style={styles.background} onPress={() => this.route()}>
                    <Text style={styles.button}>
                        {this.props.name}
                    </Text>
                </TouchableOpacity>
        );
    }
}

const styles = {
    background: {
        backgroundColor: AppColor.white,
        height: 50,
        borderRadius: 10,
        borderColor: AppColor.red,
        borderWidth: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        color: AppColor.red,
        textAlign: 'center',
        // fontFamily: AppFonts.semiBold,
        textAlignVertical: 'center',
        // height: '100%',
    }
}

export default DefaultButton;
