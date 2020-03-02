/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

//components
import appColor from '../../src/utils/AppColor';



class NavBarDefault extends React.Component {

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        return (
            <View style={styles.navbar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.route()}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 10 }}
                            source={require('../../assets/image/arrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10, fontSize: 20, marginTop: '-1%' }}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    navbar: {
        height: 55,
        backgroundColor: appColor.white,
        elevation: 3,
        justifyContent: 'center',
    }
}

export default NavBarDefault;
