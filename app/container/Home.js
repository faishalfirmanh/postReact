import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import movieredux from '../movieredux';
import {connect } from 'react-redux'
import Movieraw from '../components/Movieraw'

 class Home extends Component {
    constructor(props){
        super(props)
        // this.state ={
        //     movies : [],
        // }
    }

    async componentDidMount(){
        const {addMovies} = this.props
        const response = await fetch("https://www.omdbapi.com/?apikey=8a00c4a5&s=Batman");
        const data = await response.json();
        //this.setState({movies: data.Search});
        addMovies(data.Search)
    }
  render() {
    const {movies} = this.props
    return (
      <View style={styles.container}>
        <Text>DD</Text>
        <FlatList
            data={movies}
            renderItem={({item : movie}) =><Movieraw movie={movie}/>}
            keyExtractor={(movie) => movie.imdbID}
        />
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
    }
})

function mapStateToProps(state){
    return {
        movies: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        addMovies: (movies) => dispatch({ //memiliki tipe dan payload 
            type: 'ADD_MOVIES',
            payload :{movies}
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
//connect terdapat 2 parameter 
//1,map state -> prop function 
//2. 