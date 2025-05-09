import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function CardProduto({ nome, preco, imagem, caloria }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.nome}>{nome}</Text>
        <View style={styles.caloriaContainer}>
          <Image
            source={require('../assets/flame.png')}
            style={styles.caloriaIcon}
          />
          <Text style={styles.caloria}>{caloria} Calories</Text>
        </View>
        <Text style={styles.preco}>${preco.toFixed(2)}</Text>
      </View>

      <Image
        source={imagem}
        style={styles.imagem}
        resizeMode="contain"
      />
    </View>

  );
}
