
import React from 'react';
import {
  Alert,
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import { Button, ThemeProvider, Card, ListItem, Input, Overlay } from 'react-native-elements';
import { SearchableFlatList } from "react-native-searchable-list";
import demoList from './data2'
var selectedItem = undefined;
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Replacements',
  };
  static pressedItem = undefined;
  constructor(props) {
    super(props);
    this.state = {
      data: demoList,
      searchTerm: "",
      searchAttribute: "name",
      ignoreCase: true,
      isVisible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          placeholder={"Search Here"}
        />

        <SearchableFlatList
          data={this.state.data}
          searchTerm={this.state.searchTerm}
          searchAttribute={this.state.searchAttribute}
          ignoreCase={true}
          renderItem={({ item }) => {
            selectedItem = item;
            return <ListItem
              title={item.name}
              leftIcon={{ name: 'done' }}
              onPress={() => {
                this.setState({ isVisible: true })
              }}
            />
          }
          }

          keyExtractor={item => item.name}
        />
        {
          this.state.isVisible && (
            <Overlay isVisible
              width={300}
              height="auto"
            >
              <ScrollView>
                {
                  this.state.data.filter(x => x.category == selectedItem.category && x.name != selectedItem.name).slice(0, 5).map((item, i) => (
                    <ListItem
                      key={i}
                      title={item.name}
                      leftIcon={{ name: 'whatshot' }}
                    />
                  ))
                }
              </ScrollView>
              <Button
                title='close'
                onPress={() => this.setState({ isVisible: false })}
              />

            </Overlay>
          )
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    borderColor: "#3c75d1",
    borderBottomWidth: 3
  }
})