import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Stylesheet, TouchableOpacity, Image } from 'react-native';






class App extends Component {
  state = {

    players: [
      { name: " Admin ", runner: true },
      { name: " Player 1 ", runner: true },
      { name: " Player 2 ", runner: false },
      { name: " Player 3", runner: false },
      { name: " Player 4 ", runner: true },
      { name: " Player 5 ", runner: false },
      { name: " Player 6", runner: false },
      { name: " Player 7", runner: false },
      { name: " Player 8", runner: false },
      { name: " Player 9", runner: true },
      { name: " Player 10", runner: false },
      { name: " Player 11", runner: false },
      { name: " Player 12", runner: true },
    ],



    totalRunners: 0,
    totalChasers: 0

  }

  togglePlayer = (index) => {
    let newArray = [...this.state.players];
    if (newArray[index].runner) {
      newArray[index].runner = false

    } else {
      newArray[index].runner = true

    }
    let totalRunners = 0
    let totalChasers = 0
    newArray.forEach(player => { if (player.runner) totalRunners = totalRunners + 1; else totalChasers = totalChasers + 1 })
    this.setState({
      players: newArray,
      totalChasers: totalChasers,
      totalRunners: totalRunners,


    })
  }
  render() {
    const textStyle = {
      color: '000000',
      fontSize: 20,
      fontWeight: 'bold'


    }
    const playerRows = this.state.players.map((player, index) => (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Text key={index} style={textStyle}>{player.name}</Text>

        {player.runner &&

          <TouchableOpacity onPress={() => this.togglePlayer(index)} style={{ position: 'absolute', right: 0, top: 6 }} >

            <Text style={{ textAlign: 'right', color: '#E9C46A', fontWeight: 'bold', fontSize: 17,}}>Runner</Text>
          </TouchableOpacity>

        }
        {!player.runner &&

          <TouchableOpacity onPress={() => this.togglePlayer(index)} style={{ position: 'absolute', right: 0, top: 6, backgroundColor: 'white' }}   >

            <Text style={{ textAlign: 'right', fontweight: 'bold', fontSize: 18   }} >Chaser </Text>

          </TouchableOpacity>

        }
      </View>
    ))
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#0C1821'
        }}>
        <Text style={{textStyle,  fontFamily: 'Iowan Old Style', color: 'white', fontSize: 24, padding: 30 }}   >Allocate your players:</Text>
        <ScrollView style={{
          maxHeight: 180,
          backgroundColor: 'white',
          width: '49%',
          padding: 9

        }}>
          {playerRows}
        </ScrollView>
        <Text style={{textStyle, color: 'white', fontSize: 20, padding: 15 }}>Total runners: {this.state.totalRunners}</Text>
        <Text style={{textStyle, color: 'white', fontSize: 20}}>Total chasers: {this.state.totalChasers}</Text>






        <TouchableOpacity>
          <Text style={{ textAlign: 'centre', backgroundColor: '#E76F51', width: 150, fontweight: 'bold', fontSize: 20, color: 'white' }}>    Start Game </Text>

        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ textAlign: 'centre', backgroundColor: '#A1A8B1', width: 150, fontSize: 20, color: 'white' }}>   Cancel Game  </Text>
        </TouchableOpacity>









      </View>




    )
  }
}
export default App;