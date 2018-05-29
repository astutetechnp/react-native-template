import React,{ Component } from 'react';

import {
	AsyncStorage,
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	CheckBox,
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


import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import TextButton from '../components/TextButton';
import colors from '../resources/styles/colors'

import api from '../utilities/api';
const Screen = Dimensions.get('window');

export default class LoginOTPReset extends Component {
	constructor(props){
		super(props);
		this.state = {
			checked : false,
			mobile:'',
			password: ''
		};	
	}

	signup() {

	}

	forgotPassword() {
		Actions.forgotPassword();
	}
	
	signin() {
		//API call
		if(this.state.mobile != '' && this.state.password != ''){
			
		} else {
			Alert.alert("Oops!!","Mobile number or Password is empty.");
		}
		
		
	}

	render() {
		
		return(
			<View style={ styles.container }>
									
						<View style={styles.loginBox}>

						<Container>
							<Label text='New Password' styles={{textLabel: styles.label}}/>


							<TextInput
								style={styles.textInput}
								underlineColorAndroid="transparent"
								secureTextEntry={true}
								returnKeyType="next"
								keyboardType="numeric"
								autoCorrect={false}
								onChangeText= {(text)=>{
									this.setState({
										mobile: text
									});
								}}
								value={this.state.email} />

						</Container>
						<Container>
							<Label text='Confirm Password' styles={{textLabel: styles.label}}/>
								<TextInput
									style={styles.textInput}
									underlineColorAndroid="transparent"
									secureTextEntry={true}
									returnKeyType="go"
									onChangeText= {(text)=>{
										this.setState({
											password: text
										});
									}}
									value={this.state.password}/>
								
						</Container>

						<Container>
								<Button
									label="RESET"
									styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
									onPress={this.signin.bind(this)}/>
						</Container>
						
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
		backgroundColor: colors.bgMain
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
		color: '#fff',
		fontSize: 15,
	},
	tcLabel: {
		color:'#fff',
		fontWeight: 'normal',
		fontSize: 11,
		lineHeight: 18
	},

	alignRight: {
		alignSelf: 'flex-end',
	},

	fLink: {
		fontSize: 20
	},

	textInput: {
		height: 40,
		fontSize: 20,
		borderBottomColor: '#fff',
		borderBottomWidth: 0.5,
		color:'#fff',
		marginBottom: 10,
		textAlignVertical:'bottom',
		paddingLeft:0
	},
	loginBox: {
		flexDirection: 'column',
		width: Screen.width - 60,
		alignSelf : 'center',
		paddingTop:10
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
		borderRadius:5
	},
	fadeButton: {
		backgroundColor: '#333',
		padding: 10
	},
	footerLink: {
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	 
	iconStyle: {
		position: 'absolute',
	    padding: 10,
	    backgroundColor: '#4A8EC8',
	    height: 40,
	    width: 50,
	    resizeMode: 'center',
	    alignItems: 'center',
	},
	iconTextStyle: {
		position: 'absolute',
	    padding: 10,
	    backgroundColor: '#4A8EC8',
	    height: 40,
	    width: 50,
	    alignItems: 'center',
	    color:'#fff'
	},
	rememberMe: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	}

});