import React, { Component } from 'react';
import {View} from 'react-native';

export default class FetchRequest extends Component {
  _fetch() {
    fetch('weburl', {
      method: 'POST',
      headers: {
        'param':'re',
        'param2': 're2',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }
}
