import React from "react"
import { View, StyleSheet,Text } from 'react-native'

import { AppNavigation } from "./src/navigation/AppNavigation"



export default function App() {



  return < AppNavigation />

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})