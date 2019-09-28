import React, { Component } from 'react';

import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';

//import api from '../../../backend/server/axios'

export default class main extends Component {
    constructor(props){
        super(props);
            this.state = {
            feed: [],
        };
    }

    componentDidMount() {
        loadRequest = () => {
            fetch('http://192.168.56.1:4545/',{
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((json) => {
               this.setState({feed: json})
            }).done();
        }
        loadRequest();
    };

  render() {
    return (
        <View>
        <ScrollView>
            <View>
                <FlatList
                    data={this.state.feed}
                    keyExtractor={post => post.id}
                    renderItem={({ item }) => (
                        <View>
                            <View>
                                <Text style={{color: '#000', fontSize: 50}}>{item.nome} </Text>
                                <Text>{item.email}</Text>
                                <Text>{item.id}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
        </View>
    )
  }
}
