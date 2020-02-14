import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    CheckBox,
    ScrollView,
    SafeAreaView,
    Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

//components
import Button from '../../../components/Button/Button';
import AppColor from '../../../src/utils/AppColor';


class RegistrationSecond extends React.Component {
    render() {

        let data = [{
            value: 'Software',
        }, {
            value: 'Teaching',
        }, {
            value: 'Soldure',
        }];

        const { params } = this.props.navigation.state;
       
        
        return (
            <SafeAreaView>
                <ScrollView >
                    <View style={styles.container}>
                        <View>
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={{ width: 150, height: 90, alignItems: 'center', }}
                                    source={require('../../../assets/image/logo.png')}
                                />
                                <View style={styles.smartapp}>
                                    <Text style={{ color: AppColor.white, fontWeight: 'bold', fontSize: 15 }}>SMART APP</Text>
                                </View>
                            </View>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Email Address"
                                required
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Phone Number"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Orgarnization"
                            />
                            <Dropdown
                                label='RCP Products In Use'
                                data={data}
                            />
                            <Text style={{ color: '#989898', width: 260 }}>Placse add this for video and document Suggest</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Password"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Confirm Password"
                            />
                            <View style={{ borderColor: 'red', marginTop: 10, flexDirection: 'row' }}>
                                <CheckBox />
                                <Text>By Registring I will accept~{"\n"}
                                    <Text style={{ color: 'red', textDecorationLine: 'underline', }}>Terms & condition</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.reg_btn}>
                            <Button
                                onPress={() => this.proceedReg()}
                                name={"REGISTER"}
                            />
                        </View>
                    </View>
                </ScrollView >
            </SafeAreaView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInputTitle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        width: 50,
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    textInputFirstName: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        width: 200,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        width: 260,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    reg_btn: {
        marginTop: 10,
        marginBottom: 20
    },
    smartapp: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 30,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: AppColor.balck
    }
}


export default RegistrationSecond;