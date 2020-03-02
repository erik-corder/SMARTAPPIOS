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
    StyleSheet,
    Dimensions
} from 'react-native';
import Pdf from 'react-native-pdf';


//components
// import Button from '../../components/Button/Button';
// import appText from '../../src/utils/AppText';
// import appColor from '../../src/utils/AppColor';
// import appLogo from '../../src/utils/Assets';
// import axios from "axios";
import NavBarDfault from '../../components/NavBarDefault/NavBarDefault';


class SingleCatalog extends React.Component {

    proceedBack(){
        this.props.navigation.goBack(null);
        this.props.navigation.navigate('Catalogs');
      }

    render() {
        const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

        return (
            <>
                <NavBarDfault name={'Document 1'}  onPress={() => this.proceedBack()} />
                <View style={styles.container}>
                    <Pdf
                        source={source}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page, numberOfPages) => {
                            console.log(`current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        onPressLink={(uri) => {
                            console.log(`Link presse: ${uri}`)
                        }}
                        style={styles.pdf}
                    // enableAntialiasing= {true}
                    />
                </View>
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
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}

export default SingleCatalog;