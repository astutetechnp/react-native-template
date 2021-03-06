import React,{ Component } from 'react';

import {
	AsyncStorage,
	StyleSheet,
	Animated,
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
import Modal from "react-native-modal";

import colors from '../resources/styles/colors';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import TextButton from '../components/TextButton';
import OTP from '../pages/OTP';


import api from '../utilities/api';
const Screen = Dimensions.get('window');

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email : '',
			password: '',
			mobile: '',
			otp: '',
			showOTP: false
		};	
	}


	cancel(){
		Actions.pop();
	}
	
	submit() {
		//API call
		if(this.state.email != '' && this.state.mobile != ''){
			this.setState({
				showOTP: true
			});
			
		} else {
			Alert.alert("Oops!!","Email and Mobile both are empty.");
		}
		
		
	}

	submitOTP() {
		if(this.state.otp != ''){

		} else {
			Alert.alert("Oops!!","OTP is blank");
		}
	}

	resendOTP() {
		
	}

	render() {
		
		return(
			<View style={ styles.container }>

						<Modal 
							isVisible={this.state.showOTP}
							onBackdropPress={() => this.setState({ showOTP: false })}
							onSwipe={() => this.setState({ showOTP: false })}
							hideModalContentWhileAnimating={true}
							style={{ justifyContent:'center', alignItems:'center'}}
  							swipeDirection="left">
  							<Container>
						          <View style={{
							          width: Screen.width - 60,
							          backgroundColor: 'white',
							          borderRadius: 5,
							          padding: 10,
							          paddingTop: 20
							        }}>
						            <Text style={{ fontWeight:'bold', color:'#000', fontSize:15}}>Enter One Time Password (OTP)</Text>
						            <TextInput
											style={styles.textInputOTP}
											placeholder="Enter OTP"
											placeholderTextColor='#ccc'
											underlineColorAndroid="transparent"
											returnKeyType="go"
											onChangeText= {(text)=>{
												this.setState({
													otp: text
												});
											}}
											value={this.state.otp}/>
						            <Button
											label="SUBMIT"
											styles={{button: styles.submitOTPBtn, label: styles.buttonWhiteText}}
											onPress={this.submitOTP.bind(this)}/>
									<Button
											label="Resend OTP"
											styles={{button: styles.resendOTPBtn, label: styles.buttonWhiteText}}
											onPress={this.resendOTP.bind(this)}/>
						          </View>
				          </Container>
				        </Modal>

						<Container>
							<View style={styles.bizName}>
								<Image 
								style={styles.logoImage}
								source={require('../images/ipay-white.png')}
								resizeMode='contain'
								/>
							</View>
				
						</Container>
						<Container>
							<View style={{ padding: 20, paddingBottom:5 }}>
								<Text style={{ fontWeight:'bold', color:'#fff', textAlign:'center', lineHeight: 30}}>Forgot your Password?</Text>
								<Text style={{ fontWeight:'normal', color:'#fff', textAlign:'center', fontSize:12, lineHeight:18}}>Enter your e-mail or mobile number below to reset your password.</Text>
							</View>
						</Container>

						<View style={styles.loginBox}>
						<Container>
							
								<Image source={require('../images/email.png')} style={styles.iconStyle} />
								<TextInput
									style={styles.textInput}
									placeholder="Email  (Optional)"
									placeholderTextColor='#fff'
									underlineColorAndroid="transparent"
									returnKeyType="go"
									onChangeText= {(text)=>{
										this.setState({
											email: text
										});
									}}
									value={this.state.email}/>
								
						</Container>
						<Container>
							<Text style={styles.iconTextStyle}>
								+65
							</Text>
							<TextInput
								style={styles.textInput}
								placeholder= "Mobile No"
								placeholderTextColor='#fff'
								underlineColorAndroid="transparent"
								keyboardType="numeric"
								returnKeyType="next"
								autoCorrect={false}
								onChangeText= {(text)=>{
									this.setState({
										mobile: text
									});
								}}
								value={this.state.mobile} />

						</Container>
										

						<View style={styles.footerLink}>
							
							<Button
									label="SUBMIT"
									styles={{button: styles.primaryButton1, label: styles.buttonWhiteText}}
									onPress={this.submit.bind(this)}/>
							
							<Button
									label="CANCEL"
									styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
									onPress={this.cancel.bind(this)}/>
							
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
		fontSize: 13,
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
		fontSize: 13,
		//backgroundColor: 'rgba(255,255,255,0.6)',
		paddingLeft: 60,
		borderWidth: 1, 
		borderColor: colors.textBoxBorderColor,
		color:'#fff',
	},

	textInputOTP: {
		height: 40,
		fontSize: 14,
		//backgroundColor: 'rgba(255,255,255,0.6)',
		borderWidth: 1, 
		borderColor: '#666',
		color:'#333',
		marginTop:10,
		marginBottom:10,
	},

	loginBox: {
		flexDirection: 'column',
		width: Screen.width - 60,
		alignSelf : 'center',
		marginBottom: 5,
		marginTop:5,
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
	submitOTPBtn:{
		backgroundColor: colors.bgBtn,
		padding: 15,
		borderRadius:5,

	},
	resendOTPBtn:{
		marginTop:10,
		marginBottom:10,
		backgroundColor: colors.bgMain,
		padding: 15,
		borderRadius:5,
		width: (Screen.width - 60)/2,
		alignSelf: 'center'
	},
	primaryButton: {
		backgroundColor: colors.bgBtn,
		padding: 15,
		borderRadius:5,
		width: (Screen.width -70)/2
	},
	primaryButton1: {
		backgroundColor: colors.bgBtn1,
		padding: 15,
		borderRadius: 5,
		width: (Screen.width -70)/2
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