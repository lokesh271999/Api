
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
export default class Getpagantion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      loading: false,
      initial: true,
    };
    this.page = 1;
  }
  componentDidMount() {
    this._getUsers();
  }
  updateUI = () => {
    if (this.page > 1) {
      users = [...this.state.users, ...users];
    }
    if (this.page == 0) {
      users = [...users];
    }
    this.setState({ users: users, initial: false });
  };
  _getUsersApi = async () => {
        const apiURL=`http://wisdomapp.in/api/v1/content/?page=1`
    fetch(apiURL).then((res)=>res.json())
    .then((resJson)=>{
      this.setState({
        users:resJson.results
      })
    })
    }
  _getUsers = async () => {
    this.page = this.page + 1;
    const data = await this._getUsersApi();
    console.log("125",users);
    this.updateUI(data);
  };
  renderItem = ({ item, }) => {
    console.log("lok",item.video_id)
    return (
             <View>
       <View>
       <YoutubePlayer
        height={220}
        videoId={item.video_id}
      />
      <View style={{flexDirection:'row'}}>
      <View style={{width:50,height:50,backgroundColor:'red',borderRadius:30}}>
      
      </View>
      <Text style={{color:'white',marginLeft:30,marginTop:10}}>{item.title}</Text>
      </View>
      <Text style={{color:'white',marginLeft:80,marginBottom:10}}>{item.channel.creator.name}</Text>
       </View>
      </View>
    );
  };
  render() {
     
    return (
      <View style={styles.container}>
      
        <FlatList
              data={this.state.users}
              renderItem={this.renderItem}
              onRefresh={() => this.onRefresh(false)}
              refreshing={this.state.isFetching}
              onEndReached={this._getUsers}
            />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
