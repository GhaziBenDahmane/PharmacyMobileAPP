import React from 'react';
import {
  ScrollView,
} from 'react-native';
import { Button, ThemeProvider, Card, ListItem } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Medicaments sold together',
  };

  render() {
    const list = [
      {
        title: 'EFFERALGAN SIROP 90ML , PHYSIOMER HYPERTONIQUE SPRAY , MAXILASE FL/125 ML ADWY',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , PHYSIOMER HYPERTONIQUE SPRAY',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , EFFERALGAN SIROP 90ML',
        icon: 'child-care'
      },
      {
        title: 'PHYSIOMER HYPERTONIQUE SPRAY , MAXILASE FL/125 ML ADWY',
        icon: 'child-care'
      },
      {
        title: 'EFFERALGAN SIROP 90ML , MAXILASE FL/125 ML ADWY',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , MAXILASE FL/125 ML ADWY',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , MAXILASE FL/125 ML ADWY , EFFERALGAN SIROP 90ML',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , PHYSIOMER HYPERTONIQUE SPRAY , MAXILASE FL/125 ML ADWY',
        icon: 'child-care'
      },
      {
        title: 'PHYSIOMER HYPERTONIQUE SPRAY , EFFERALGAN SIROP 90ML',
        icon: 'child-care'
      },
      {
        title: 'DOLIPRANE 1000MG B/8CP , PHYSIOMER HYPERTONIQUE SPRAY , EFFERALGAN SIROP 90ML',
        icon: 'child-care'
      }
    ]
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))
        }
      </ScrollView>
    );
  }
}
