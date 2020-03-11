import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import SearchBar from '../components/SearchBar';

class AllUsers extends Component {
  state = {
    users: [],
    page: 0,
    loading: false,
    error: null,
    refreshing: false,
  };

  componentDidMount() {
    this.fetchAllUsers();
  }

  fetchAllUsers = () => {
    const {page} = this.state;
    this.setState({loading: true});
    fetch(`https://api.github.com/users?since=${page}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          users: page === 0 ? data : [...this.state.users, ...data],
          loading: false,
          refreshing: false,
        }),
      );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 0,
        refreshing: true,
      },
      () => {
        this.fetchAllUsers();
      },
    );
  };

  handleLoadMore = () => {
    //buggy calls three times everytime
    //working on fix
    this.setState(
      {
        page: this.state.page + 10,
      },
      () => {
        this.fetchAllUsers();
      },
    );
  };
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    const {users} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <SearchBar />
        <FlatList
          data={users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push('UserShow', {username: item.login})
              }>
              <ListItem
                roundAvatar
                title={item.login}
                leftAvatar={{source: {uri: item.avatar_url}}}
                containerStyle={{borderBottomWidth: 0}}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.login}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});

export default AllUsers;
