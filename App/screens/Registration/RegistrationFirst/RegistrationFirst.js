import React, { Component } from 'react';
import {
    View,
    TextInput,
    Image,
    ScrollView,
    SafeAreaView,
    Text,
    ActivityIndicator 
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'axios';

//components
import Button from '../../../components/Button/Button';
import NavBarDefault from '../../../components/NavBarDefault/NavBarDefault';
import AppColor from '../../../src/utils/AppColor';
import AppText from '../../../src/utils/AppText';
import UnderLine from '../../../components/UnderLine/UnderLine';
import UnderLineRed from '../../../components/UnderLineRed/UnderLineRed';

class RegistrationFirst extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            emailError: '',
            passwordError: '',
            industries: '',
            Loading: true,
            dropdownList: [{
                value:''
            }]
        }
    }

    componentDidMount() {
        this.getIndustries();
    }

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('Home');
    }

    getIndustries = async () => {
        axios.get('https://apidev.rcpanz.com.au/api/admin/industries/select')
            .then((response) => {
                // handle success
                const industries = response.data
                this.setState({ industries });
                this.setState({ Loading: false })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    proceedReg = () => {
        const { title, firstName, lastName, email, PhoneNo, organization, industry } = this.state;
        if (!this.ValidateEmail(email)) {
            this.setState({
                emailError: true,
                passwordError: false,
                error: AppText.email_error
            });
        } else {
            const regFirstData = { title, firstName, lastName, email, PhoneNo, organization, industry }
            this.props.navigation.goBack(null);
            this.props.navigation.navigate('RegistrationSecond', regFirstData);
        }
    }

    // check valid email or not
    ValidateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {

        let title = [{
            value: 'Mr.',
        }, {
            value: 'Mrs.',
        }, {
            value: 'Miss',
        }, {
            value: 'Other',
        }];

        const { industries, Loading, dropdownList } = this.state

        if (Loading === false) {
            var dropdown = industries.result.map((element, i) => {
                dropdownList[i] = element.name;
            });
        }
        
        let dataList = [];

        dropdownList.forEach(element => {
            dataList.push(
                {value: element}
            )
        });

        return (
            <>
                <NavBarDefault name={'Registration for a new account'}  onPress={() => this.proceedBack()}/>
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={{ width: 150, height: 100, alignItems: 'center', marginTop: 20, marginBottom: 10 }}
                                    source={require('../../../assets/image/logo.png')}
                                />
                            </View>
                            <View style={{ width: '85%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Dropdown
                                        label='Title'
                                        data={title}
                                        containerStyle={styles.dropdown}
                                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                        onChangeText={(value) => this.setState({ title: value })}
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
                                        placeholder="Email (will be used as user name)"
                                        placeholderTextColor="#000"
                                        onChangeText={(text) => this.setState({ email: text })}
                                        required
                                    />
                                    {this.state.emailError == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <UnderLineRed />
                                                <Text style={styles.errorText}>{this.state.error}</Text>
                                            </View>
                                        )
                                        : (
                                            <View style={styles.lineBackground}>
                                                {/* <UnderLine /> */}
                                            </View>
                                        )}

                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Phone Number"
                                        placeholderTextColor="#000"
                                        keyboardType={'numeric'}
                                        onChangeText={(text) => this.setState({ PhoneNo: text })}
                                    />
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Company/Orgarnization"
                                        placeholderTextColor="#000"
                                        onChangeText={(text) => this.setState({ organization: text })}
                                    />
                                    {
                                        Loading == false
                                            ? (
                                                <Dropdown
                                                    label='Industry'
                                                    data={dataList}
                                                    style={{ color: '#000' }}
                                                    onChangeText={(name) => this.setState({ industry: name })}
                                                />
                                            ) : (
                                                <ActivityIndicator size="large" color="#0000ff" />
                                            )

                                    }

                                </View>
                                <View style={styles.next_btn}>
                                    <Button
                                        onPress={() => this.proceedReg()}
                                        name={"NEXT"}
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
        backgroundColor: '#fff',
    },
    textInputFirstName: {
        height: '100%',
        borderColor: 'gray',
        borderWidth: 0,
        width: '80%',
        marginTop: 10,
        borderBottomWidth: 2,
    },
    textInput: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 0,
        width: '103%',
        marginTop: '8%',
        borderBottomWidth: 2,
    },
    next_btn: {
        marginTop: 20,
        marginBottom: '30%',
        width: '100%'
    },
    lineBackground: {
        width: '103%',
        height: 1,
    },
    errorText: {
        fontSize: 14,
        color: '#FF0000',
        width: '80%'
    },
    dropdown: {
        width: '25%',
        height: '100%',
        borderColor: 'gray',
        borderWidth: 0,
        // width: '10%',
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 2,
    }
}


export default RegistrationFirst;