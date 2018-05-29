import React from 'react';
import {
	Router,
    Drawer,
    Overlay,
    Lightbox,
    Modal,
	Scene,
    Actions
} from 'react-native-router-flux';

import {
	AsyncStorage,
    Alert,
	Platform,
	StatusBar,
    TouchableOpacity,
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';


import colors from './resources/styles/colors';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignupMobile from './pages/SignupMobile';
import LoginOTPReset from './pages/LoginOTPReset';


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

class App extends React.Component {


	_renderRightButton = () => {
        return(
            <View style={{ flexDirection:'row', justifyContent: 'space-around', marginRight:10 }}>
                <TouchableOpacity onPress={() => this._onLogout() } >
                    <Icon name="person" size={28} color='white' style={{ padding: 3}} />
                </TouchableOpacity>
            </View>
        );
    };

    componentWillMount(){
    	
    }

	render() {
		return(
			<View style={styles.container}>
        		<MyStatusBar backgroundColor="#c12035" barStyle="light-content" />
				<Router>
							
							<Scene key='root' hideNavBar={true} navBarButtonColor='#fff'  >
								<Scene key='home' component={Home} initial={true}/>
								<Scene key='login' component={Login} />
								<Scene key='forgotPassword' component={ForgotPassword} />
								<Scene key="signup" component={SignupMobile} />
								<Scene key="loginOTPReset" component={LoginOTPReset} hideNavBar={false} navigationBarStyle={styles.navBar} barButtonIconStyle={styles.barButtonIcon} />
							</Scene>
							
				</Router>
			</View>

		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navTitle: {
		color: colors.bgMain,
		marginTop: 0,
        alignSelf: 'flex-start',
        marginLeft: 0	
	},
	navBar: {
		backgroundColor: colors.bgMain,
		//height: 40
	},
	barButtonIcon: {
		tintColor: 'white'
	},
	statusBar: {
    	height: STATUSBAR_HEIGHT,
  	},
});


export default App;