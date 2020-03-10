import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import UserList from '../components/UserList';
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
    return (
      <SafeAreaView styles={styles.container}>
        <UserList users={users} />
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
