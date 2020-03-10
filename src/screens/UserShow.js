import React, {Component} from 'react';
import {Text, View} from 'react-native';
import UserDetails from '../components/UserDetails';
import RepoList from '../components/RepoList';

class ShowUser extends Component {
  state = {
    user: {},
    userRepos: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const {username} = this.props.route.params;
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([user, userRepos]) =>
        this.setState({
          user,
          userRepos,
        }),
      );
  };

  render() {
    const {user, userRepos} = this.state;

    return (
      <View>
        <UserDetails user={user} />
        <RepoList repos={userRepos} />
      </View>
    );
  }
}

export default ShowUser;
