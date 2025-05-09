import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import CardProduto from './components/CardProduto';

const menu = [
  {
    nome: "Beff Burger",
    caloria: 70,
    preco: 12.00,
    imagem: require('./assets/cheeseburger.png')
  }, 
  {
    nome: "Pancakes",
    caloria: 60,
    preco: 15.00,
    imagem: require('./assets/pancakes.png')
  }, 
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: StatusBar.currentHeight || 20 }}>
      <ScrollView>
        {menu.map((item, index) => (
          <CardProduto
            key={index}
            nome={item.nome}
            caloria={item.caloria}
            preco={item.preco}
            imagem={item.imagem}            
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
