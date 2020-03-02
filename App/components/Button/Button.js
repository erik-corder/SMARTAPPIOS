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
    ActivityIndicator
} from 'react-native';

//color
import AppColor from '../../src/utils/AppColor';

class Button extends React.Component {

    constructor() {
        super();
        this.state={
            touched : false
        }
    }

    route = () => {
        const { onPress } = this.props;
        onPress();
        this.setState({touched: true});
        setTimeout(()=>{ 
            this.setState({touched: false});
         }, 4000);
    }

    render() {
        return (
            <TouchableOpacity style={styles.background} onPress={() => this.route()}>
                <Text style={styles.button}>
                    {this.props.name}
                </Text>
                {
                    this.state.touched == true
                    ?(
                        <ActivityIndicator size="small" color="white" />
                    ):(
                        <></>
                    )
                }
               
            </TouchableOpacity>
        );
    }
}

const styles = {
    background: {
        backgroundColor: AppColor.red,
        height: 50,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        color: AppColor.white,
        textAlign: 'center',
        // fontFamily: AppFonts.semiBold,
        textAlignVertical: 'center',
        // height: '100%',
    }
}

export default Button;
