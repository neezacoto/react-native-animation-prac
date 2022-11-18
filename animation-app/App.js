
import { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default function App() {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, 
      {toValue: 1}).start()
  },[progress])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, {opacity: progress}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue"
  }
});
