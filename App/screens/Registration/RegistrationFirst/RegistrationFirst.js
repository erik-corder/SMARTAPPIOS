import React, { Component } from 'react';
import {
    View,
    TextInput,
    Image,
    ScrollView,
    SafeAreaView,
    Text
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

//components
import Button from '../../../components/Button/Button';
import NavBarDefault from '../../../components/NavBarDefault/NavBarDefault';
import AppColor from '../../../src/utils/AppColor';

class RegistrationFirst extends React.Component {

    proceedReg = () => {
        const { title, firstName, lastName, email, PhoneNo, organization, industry } = this.state;
        const regFirstData = { title, firstName, lastName, email, PhoneNo, organization, industry }
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('RegistrationSecond', regFirstData);
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
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={{ width: 150, height: 90, alignItems: 'center', }}
                                    source={require('../../../assets/image/logo.png')}
                                />
                                <View style={styles.smartapp}>
                                    <Text style={{ color: AppColor.white, fontWeight: 'bold', fontSize: 15 }}>SMART APP</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={styles.textInputTitle}
                                    placeholder="Title"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ title: text })}
                                />
                                <TextInput
                                    style={styles.textInputFirstName}
                                    placeholder="First Name"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ firstName: text })}
                                />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Last Name"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ lastName: text })}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Email Address"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ email: text })}
                                    required
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Phone Number"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ PhoneNo: text })}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Orgarnization"
                                    placeholderTextColor="#000"
                                    onChangeText={(text) => this.setState({ organization: text })}
                                />
                                <Dropdown
                                    label='Industry'
                                    data={data}
                                    style={{ color: '#000' }}
                                    onChangeText={(value) => this.setState({ industry: value })}
                                />
                            </View>
                            <View style={styles.next_btn}>
                                <Button
                                    onPress={() => this.proceedReg()}
                                    name={"NEXT"}
                                />
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
    next_btn: {
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


export default RegistrationFirst;