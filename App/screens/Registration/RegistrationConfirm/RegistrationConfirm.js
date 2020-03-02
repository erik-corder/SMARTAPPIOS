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

//components
import Button from '../../../components/Button/Button';
import NavBarDefault from '../../../components/NavBarDefault/NavBarDefault';
import AppColor from '../../../src/utils/AppColor';
import AppText from '../../../src/utils/AppText';

class RegistrationComfirm extends React.Component {
    constructor(props) {
        super();
    }

    proceedLog = () => {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('Login');
    }

    proceedBack() {
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('RegistrationSecond');
    }

    render() {

        return (
            <>
                <NavBarDefault name={'Registration Confirmation'} onPress={() => this.proceedBack()} />
                <SafeAreaView>
                    <ScrollView >
                        <View style={styles.container}>
                            <View style={{ alignItems: 'center', height: '40%', flex: 1 }}>
                                <Image
                                    style={{ width: 150, height: 100, alignItems: 'center', marginTop: 20, marginBottom: 10 }}
                                    source={require('../../../assets/image/logo.png')}
                                />
                            </View>
                            <View style={styles.textContiner}>
                                <Text style={{ color: AppColor.balck, textAlign: 'center', fontSize: 15 }}>Thank You for your registration, one of our team members will review your details and will grant access with in 12-24 hours.</Text>
                            </View>
                            <View style={styles.textContiner}>
                                <Text style={{ color: AppColor.balck, textAlign: 'center', fontSize: 15 }}>Please check your inbox provided during the sign up process. If you haven’t received an email please check spam/junk mail folder in your mail box.</Text>
                            </View>
                            <View style={{ width: '45%' }}>
                                <View style={styles.next_btn}>
                                    <Button
                                        onPress={() => this.proceedLog()}
                                        name={"LOGIN"}
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
    },
    next_btn: {
        marginTop: 20,
        marginBottom: '30%',
        width: '100%',
        marginBottom: '50%'
    },
    textContiner: {
        flex: 2,
        width: '85%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25%'
    },
}


export default RegistrationComfirm;