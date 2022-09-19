import React,{Component} from "react";
import {View,Text,Image,TextInput,StyleSheet,FlatList,Button,SearchBar, TouchableOpacity} from 'react-native'
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: [],
      search:''
    }
  }
   componentDidMount(){
   this.getData()
 }
 
 getData=()=>{
   const apiURL="https://dummyjson.com/products/category/smartphones"
    fetch(apiURL).then((res)=>res.json())
    .then((resJson)=>{
      console.log("resJosn==>",resJson)
      this.setState({
        products: resJson.products
      })
      console.log(resJson)
    })
    .catch(error => console.log(error))
 }
  
 renderList=({ item }: any)=>{
  return(
    <View>
    <View>
    </View>
     <TouchableOpacity>
    <View style={{flexDirection:'row',marginTop:10,backgroundColor:'blue'}}>
    <Image source={{uri:item.thumbnail}} style={{ margin:8,width: 75, height: 75 }} />
      <View style={{marginLeft:10,marginVertical:10}}>
      <Text style={{color:'white'}}>{item.title}</Text>
      <Text style={{color:'white'}}>{item.rating}</Text>
      </View>
      </View>
      </TouchableOpacity>
        </View>
    )
  }
 render(){
    return(
      <View> 
       <FlatList
       data={this.state.products}
       renderItem={this.renderList}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  })
