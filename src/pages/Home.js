import React,{ Component } from 'react';

import {
	AsyncStorage,
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	ImageBackground,
	ScrollView,
	TouchableHighlight,
	AlertIOS, Alert,
	Dimensions,
	KeyboardAvoidingView
} from 'react-native';

import {
	Actions
} from 'react-native-router-flux';

const USER_ID = '@userId';
const USER_NAME = '@userName';
const USER_PHOTO = '@userPhoto';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import colors from '../resources/styles/colors'

import api from '../utilities/api';
const Screen = Dimensions.get('window');

export default class Home extends Component {
	
	signup() {
		Actions.signup();
	}
	
	login() {
		Actions.login();
	}

	render() {
		
		return(
			<View style={ styles.container }>
									
						<View style={styles.header}>

						<Container>
							<View style={styles.bizName}>
								<Image 
								style={styles.logoImage}
								source={require('../images/ipay-white.png')}
								resizeMode='contain'
								/>
							</View>
				
						</Container>
						<View style={styles.loginBox}>
						<Container>
								<Button
									label="SIGN UP"
									styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
									onPress={this.signup.bind(this)}/>
						</Container>
						<Container>
								<Button
									label="LOGIN"
									styles={{button: styles.primaryButton1, label: styles.buttonWhiteText}}
									onPress={this.login.bind(this)}/>
						</Container>
						</View>
						</View>
	
			</View>
			
		);
	}
}



const styles = StyleSheet.create({
	scroll: {
		//backgroundColor: 'transparent',
		padding: 30,
		flexDirection: 'column'
	},
	container: {
		flex: 1,
		backgroundColor: '#005CB1'
	},
	backgroundImage: {
		flex: 1,
		flexDirection:'row',
		justifyContent: 'space-between'
	},
	logoImage :{
		width: 120,
		alignSelf: 'center',
	},
	header: {
		paddingTop: 60,
		alignSelf:'center',
	},
	logo: {
		alignSelf: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontSize: 30,
		fontWeight: 'bold'
	},
	bizName: {
		flexDirection:'row',
		justifyContent:'center',
	},
	whiteText: {
		color:'#fff',
		fontSize:30
	},
	blackText:{
		color:'#333',
		fontSize:30
	},

	inputLabel: {
		fontSize: 10
	},
	label: {
		color: '#333',
		fontSize: 12
	},
	alignRight: {
		alignSelf: 'flex-end'
	},
	textInput: {
		height: 40,
		fontSize: 15,
		//backgroundColor: 'rgba(255,255,255,0.6)',
		paddingLeft: 10,
		borderWidth: 1, 
		borderColor: 'rgba(255,255,255,0.5)',
		color:'#fff'
	},
	loginBox: {
		paddingTop:60,
		flexDirection: 'column',
		width: Screen.width - 60,
		alignSelf : 'flex-end'
	},
	buttonWhiteText: {
		fontSize: 15,
		color: '#FFF',
	},
	buttonBlackText: {
		fontSize: 15,
		color: '#333',
	},
	buttonRedText:{
		fontSize: 13,
		color: '#f8f8f8'
	},
	primaryButton: {
		backgroundColor: colors.bgBtn,
		padding: 15,
		borderRadius: 5,
		marginTop: 5
	},
	primaryButton1: {
		backgroundColor: colors.bgBtn1,
		padding: 15,
		borderRadius: 5,
		marginTop: 5
	},
	fadeButton: {
		backgroundColor: '#333',
		padding: 10
	},
	footer: {
		marginBottom: 20
	}

});