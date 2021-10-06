import React from 'react';
import {connect} from 'react-redux';
import {Button, View} from 'react-native';

const LoginScreen = connect()((props: any) => {
  const onLogin = () => {
    props.dispatch({type: 'ACTION_USER_LOGIN'});
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 60}}>
        <Button onPress={onLogin} title="Login" />
      </View>
    </View>
  );
});

export default LoginScreen;
