import React,{ Component } from 'react';

import {
	StyleSheet,
	Text,
	TouchableHighlight,
} from 'react-native';

const TextButton = (props) => {

	function getContent(){
		if(props.children) {
			return props.children;
		}
		return <Text style={props.styles.label} >{props.label}</Text>
	}

	return (
		<TouchableHighlight
			underlayColor="transparent"
			onPress={props.onPress}
			style={[
				props.noDefaultStyles ? '' : styles.button,
				props.styles ? props.styles.button : ''
			]}
		>
			{ getContent() }
		</TouchableHighlight>
	);	
}

const styles = StyleSheet.create({
	button: {
		padding: 0
	}
});

export default TextButton;
