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
import NavBarDefault from '../../../components/NavBarDefault/NavBarDefault';


class RegistrationSecond extends React.Component {

    constructor(){
        super();
        this.state ={
            checked: true
        }
    }


    proceedReg(){
        const {country, state, distribution, product, password,confirm_password, checked} = this.state;
        console.log([country, state, distribution, product, password,confirm_password, checked]);
        const reg_data_two = {country, state, distribution, product, password,confirm_password, checked};
        const { params } = this.props.navigation.state;
        const reg_data = {...reg_data_two, ...params}
        console.log(reg_data);
    }

    render() {

        let data = [{
            value: 'Software',
        }, {
            value: 'Teaching',
        }, {
            value: 'Soldure',
        }];       

        return (
            <>
                <NavBarDefault name={'Registration'} />
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <View style={{ width: '85%' }}>
                                <View style={{ alignItems: 'center', }}>
                                    <Image
                                        style={{ width: 150, height: 100, alignItems: 'center', marginTop: 20, marginBottom: 10 }}
                                        source={require('../../../assets/image/logo.png')}
                                    />
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Country"
                                    required
                                    onChangeText={(text) => this.setState({ country: text })}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="State"
                                    onChangeText={(text) => this.setState({ state: text })}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Distribution"
                                    onChangeText={(text) => this.setState({ distribution: text })}
                                />
                                <Dropdown
                                    label='RCP Products In Use'
                                    data={data}
                                    onChangeText={(value) => this.setState({ product: value })}
                                />
                                <Text style={{ color: '#989898', width: 260 }}>Placse add this for video and document Suggest</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Password"
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ confirm_password: text })}
                                />
                                <View style={{ borderColor: 'red', marginTop: 10, flexDirection: 'row' }}>
                                    <CheckBox
                                        checked={this.state.checked}
                                        onPress={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text>By Registring I will accept~{"\n"}
                                        <Text style={{ color: 'red', textDecorationLine: 'underline', }}>Terms & condition</Text>
                                    </Text>
                                </View>
                                <View style={styles.reg_btn}>
                                    <Button
                                        onPress={() => this.proceedReg()}
                                        name={"REGISTER"}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView >
                </SafeAreaView>
            </>
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
    textInput: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 0,
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 2,
    },
    reg_btn: {
        marginTop: 10,
        marginBottom: '30%'
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