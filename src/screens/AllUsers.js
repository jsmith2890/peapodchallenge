import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

class AllUsers extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.fetchAllUsers();
  }

  fetchAllUsers = async () => {
    fetch('https://api.github.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({users}));
  };

  render() {
    const {users} = this.state;
    console.log(users);
    return (
      <SafeAreaView styles={styles.container}>
        <Text>hiii</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllUsers;
