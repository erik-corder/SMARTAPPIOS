import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    CheckBox,
    ScrollView,
    SafeAreaView,
    Image,
    ActivityIndicator,
    Alert
} from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';

//components
import Button from '../../../components/Button/Button';
import AppColor from '../../../src/utils/AppColor';
import NavBarDefault from '../../../components/NavBarDefault/NavBarDefault';
import AppText from '../../../src/utils/AppText';
import UnderLineRed from '../../../components/UnderLineRed/UnderLineRed';
import UnderLine from '../../../components/UnderLine/UnderLine';


class RegistrationSecond extends React.Component {

    constructor() {
        super();
        this.state = {
            checked: true,
            Loading: true,
            countries: {},
            products: {},
            dropdownList: [],
            productList: [],
            selectedItems: [],
            registerStatus: {},
            resgistrationError: false,

        }
    }



    componentDidMount() {
        this.getCountries();
        this.getProducts();
    }

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('RegistrationFirst');
    }

    getCountries = async () => {
        axios.get('https://apidev.rcpanz.com.au/api/admin/country/select')
            .then((response) => {
                // handle success
                const countries = response.data;
                this.setState({ countries });
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

    getProducts = async () => {
        axios.get('http://apidev.rcpanz.com.au/api/admin/products/select')
            .then((response) => {
                // handle success
                const products = response.data;
                this.setState({ products });
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


    proceedReg() {
        const { country, state, distribution, password, password_confirmation, checked } = this.state;
        // console.log([country, state, distribution, product, password, confirm_password, checked]);
        const reg_data_two = { country, state, distribution, password, password_confirmation, checked };
        const { params } = this.props.navigation.state;
        const { selectedItems } = this.state;
        const reg_data = { ...reg_data_two, ...params }
        console.log(selectedItems)
        console.log(reg_data);

        if (password === '' || (password !== password_confirmation)) {
            this.setState({
                passwordError: true,
                error: AppText.password_error
            });
        }

        axios.post('https://apidev.rcpanz.com.au/api/customer/register', {

            first_name: "Harshana",
            last_name: "Roshan",
            email: "kanishka125@gmail.com",
            password: "123456",
            password_confirmation: "123456",
            industry_id: 11,
            products: [13, 14],
            title: "Mr.",
            phone_no: "0778246945",
            organization: "Easybooking",
            state: "Rambukkana",
            country_id: 1

        })
            .then((response) => {
                this.setState({ registerStatus: response.data })
                if (this.state.registerStatus.error === null) {
                    this.props.navigation.goBack(null);
                    this.props.navigation.navigate('RegistrationConfirm');
                } else {
                    Alert.alert(
                        'Alert Title',
                        "The email has already been taken.",
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]
                    );
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {

        let data = [{
            value: 'Software',
        }, {
            value: 'Teaching',
        }, {
            value: 'Soldure',
        }];

        const { countries, Loading, productList, products, dropdownList, passwordError, resgistrationError, registerStatus } = this.state

        if (Loading === false) {
            var dropdown = countries.result.map((element, i) => {
                dropdownList[i] = element.name;
            });
        }

        let countryList = [];

        dropdownList.forEach(element => {
            countryList.push(
                { value: element }
            )
        });

        return (
            <>
                <NavBarDefault name={'Registration for a new account'} onPress={() => this.proceedBack()} />
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
                                {
                                    Loading == false
                                        ? (
                                            <Dropdown
                                                label='Country'
                                                data={countryList}
                                                containerStyle={styles.dropdown}
                                                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                                onChangeText={(value) => this.setState({ title: value })}
                                            />
                                        ) : (
                                            <ActivityIndicator size="large" color="#0000ff" />
                                        )
                                }

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
                                {
                                    Loading === false
                                        ? (
                                            <MultiSelect
                                                hideTags
                                                items={products.result}
                                                uniqueKey="id"
                                                ref={(component) => { this.multiSelect = component }}
                                                onSelectedItemsChange={this.onSelectedItemsChange}
                                                selectedItems={this.state.selectedItems}
                                                selectText="RCP products in use"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor="#CCC"
                                                selectedItemIconColor="#CCC"
                                                itemTextColor="#000"
                                                displayKey="name"
                                                searchInputStyle={{ color: '#CCC' }}
                                                submitButtonColor="#CCC"
                                                submitButtonText="Submit"
                                            />
                                        ) : (
                                            <ActivityIndicator size="small" color="#0000ff" />
                                        )
                                }

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
                                    onChangeText={(text) => this.setState({ password_confirmation: text })}
                                />
                                {passwordError == true
                                    ? (
                                        <View style={styles.lineBackground}>
                                            <UnderLineRed />
                                            <Text style={styles.errorText}>{this.state.error}</Text>
                                        </View>
                                    )
                                    : (
                                        <View style={styles.lineBackground}>
                                            <UnderLine />
                                        </View>
                                    )}
                                <View style={{ borderColor: 'red', marginTop: 10, flexDirection: 'row' }}>
                                    <CheckBox
                                        checked={this.state.checked}
                                        onPress={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text>I agree to the
                                        <Text style={{ color: 'red', textDecorationLine: 'underline', }}>Terms & condition</Text>
                                        of this Application.
                                    </Text>
                                </View>
                                <View style={{ borderColor: 'red', marginTop: 10, flexDirection: 'row' }}>
                                    <CheckBox
                                        checked={this.state.checked}
                                    // onPress={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text>Any personal information you provide to us when registering to use this application will be collected in accordance with our
                                        <Text style={{ color: 'red', textDecorationLine: 'underline', }}>Privacy Policy</Text>
                                    </Text>
                                </View>
                                <View style={{ borderColor: 'red', marginTop: 10, flexDirection: 'row' }}>
                                    <CheckBox
                                        checked={this.state.checked}
                                    // onPress={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text>I wish to receive marketing communications from Newell Australia Pty Limited and I understand I can opt-out of receiving such marketing communications at any time using the unsubscribe facility provided in the marketing communication or by contacting Newell Australia Pty Limited.
                                    </Text>
                                </View>
                                <View style={styles.reg_btn}>
                                    <Button
                                        onPress={() => this.proceedReg()}
                                        name={"REGISTER"}
                                    />
                                </View>
                                {/* {
                                    resgistrationError == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <Text style={styles.errorText}>{registerStatus.error}</Text>
                                            </View>
                                        ) : (
                                            <></>
                                   )
                                } */}
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
    },
    dropdown: {
        borderColor: 'gray',
        borderWidth: 0,
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    errorText: {
        fontSize: 14,
        color: '#FF0000',
        width: '80%'
    },
}


export default RegistrationSecond;