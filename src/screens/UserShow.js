import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import UserDetails from '../components/UserDetails';
import RepoList from '../components/RepoList';

class ShowUser extends Component {
  state = {
    user: {},
    userRepos: [],
    fetchedData: false,
    isLoading: true,
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
      .then(([user, userRepos]) => {
        if (user.login) {
          this.setState({
            user,
            userRepos,
            fetchedData: true,
            isLoading: false,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const {user, userRepos, fetchedData, isLoading} = this.state;
    console.log(this.state);
    return (
      <View>
        {isLoading ? (
          <View style={[styles.horizontal, styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading please wait...</Text>
          </View>
        ) : (
          <View>
            {fetchedData ? (
              <View>
                <UserDetails user={user} />
                <RepoList repos={userRepos} username={user.login} />
              </View>
            ) : (
              <View>
                <Text>No User Found Go Back And Try Again</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 400,
  },
});

export default ShowUser;
