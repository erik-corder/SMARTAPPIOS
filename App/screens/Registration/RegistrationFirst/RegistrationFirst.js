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
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            PhoneNo: '',
            organization: '',
            industry: '',
            emailError: false,
            passwordError: false,
            firstNameError: false,
            lastNameError: false,
            PhoneNoError: false,
            organizationError: false,
            industryError: false,
            industries: '',
            Loading: true,
            dropdownList: [{
                value: ''
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
        console.log(title)
        if (title === '') {
            this.setState({
                titleError: true,
                emailError: false,
                passwordError: false,
                firstNameError: false,
                lastNameError: false,
                PhoneNoError: false,
                organizationError: false,
                industryError: false,
                title_error: AppText.title_error
            });
        } else if (firstName === '') {
            this.setState({
                titleError: false,
                emailError: false,
                passwordError: false,
                firstNameError: true,
                lastNameError: false,
                PhoneNoError: false,
                organizationError: false,
                industryError: false,
                firstName_error: AppText.firstName_error
            });
        } else if (lastName === '') {
            this.setState({
                titleError: false,
                emailError: false,
                passwordError: false,
                firstNameError: false,
                lastNameError: true,
                PhoneNoError: false,
                organizationError: false,
                industryError: false,
                lastName_error: AppText.lastName_error
            });
        } if (!this.ValidateEmail(email)) {
            this.setState({
                titleError: true,
                emailError: true,
                passwordError: false,
                firstNameError: false,
                lastNameError: false,
                PhoneNoError: false,
                organizationError: false,
                industryError: false,
                error: AppText.email_error
            });
        } else if (PhoneNo === '') {
            this.setState({
                titleError: false,
                emailError: false,
                passwordError: false,
                firstNameError: false,
                lastNameError: false,
                PhoneNoError: true,
                organizationError: false,
                industryError: false,
                phoneNum_error: AppText.phoneNum_error
            });
        } else if (organization === '') {
            this.setState({
                titleError: false,
                emailError: false,
                passwordError: false,
                firstNameError: false,
                lastNameError: false,
                PhoneNoError: false,
                organizationError: true,
                industryError: false,
                organization_error: AppText.organization_error
            });
        } else if (industry === '') {
            this.setState({
                titleError: false,
                emailError: false,
                passwordError: false,
                firstNameError: false,
                lastNameError: false,
                PhoneNoError: false,
                organizationError: false,
                industryError: true,
                industry_error: AppText.industry_error
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

        let titles = [{
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
                { value: element }
            )
        });

        return (
            <>
                <NavBarDefault name={'Registration for a new account'} onPress={() => this.proceedBack()} />
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
                                        data={titles}
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
                                    {this.state.firstNameError == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <UnderLineRed />
                                                <Text style={styles.errorText}>{this.state.firstName_error}</Text>
                                            </View>
                                        )
                                        : (
                                            <View style={styles.lineBackground}>
                                                {/* <UnderLine /> */}
                                            </View>
                                        )}
                                </View>
                                {this.state.titleError == true
                                    ? (
                                        <View style={styles.lineBackgroundTitle}>
                                            <UnderLineRed />
                                            <Text style={styles.errorText}>{this.state.title_error}</Text>
                                        </View>
                                    )
                                    : (
                                        <View style={styles.lineBackground}>
                                            <UnderLine />
                                        </View>
                                    )}
                                <View>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Last Name"
                                        placeholderTextColor="#000"
                                        onChangeText={(text) => this.setState({ lastName: text })}
                                    />
                                    {this.state.lastNameError == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <UnderLineRed />
                                                <Text style={styles.errorText}>{this.state.lastName_error}</Text>
                                            </View>
                                        )
                                        : (
                                            <View style={styles.lineBackground}>
                                                {/* <UnderLine /> */}
                                            </View>
                                        )}
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
                                    {this.state.phoneNum_error == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <UnderLineRed />
                                                <Text style={styles.errorText}>{this.state.phoneNum_error}</Text>
                                            </View>
                                        )
                                        : (
                                            <View style={styles.lineBackground}>
                                                {/* <UnderLine /> */}
                                            </View>
                                        )}
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Company/Orgarnization"
                                        placeholderTextColor="#000"
                                        onChangeText={(text) => this.setState({ organization: text })}
                                    />
                                    {this.state.organizationError == true
                                        ? (
                                            <View style={styles.lineBackground}>
                                                <UnderLineRed />
                                                <Text style={styles.errorText}>{this.state.organization_error}</Text>
                                            </View>
                                        )
                                        : (
                                            <View style={styles.lineBackground}>
                                                {/* <UnderLine /> */}
                                            </View>
                                        )}
                                    {
                                        Loading == false
                                            ? (
                                                [<Dropdown
                                                    label='Industry'
                                                    data={dataList}
                                                    style={{ color: '#000' }}
                                                    onChangeText={(name) => this.setState({ industry: name })}
                                                />,
                                                this.state.industryError == true
                                                    ? (
                                                        <View style={styles.lineBackground}>
                                                            <UnderLineRed />
                                                            <Text style={styles.errorText}>{this.state.industry_error}</Text>
                                                        </View>
                                                    )
                                                    : (
                                                        <View style={styles.lineBackground}>
                                                            {/* <UnderLine /> */}
                                                        </View>
                                                    )]
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
    lineBackgroundTitle: {
        // width: '25%',
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