
import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TouchableImageCard() {
  const [cartCount, setCartCount] = useState(0);

  const handlePress = (label) => {
    Alert.alert(`تم إضافة الطلب`);
    setCartCount(cartCount + 1);
  };

  const cards = [
    { label: 'اسبريسو', image: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe01.jpg"},
    { label: 'أمريكانو', image: "https://storypick.com/wp-content/uploads/2016/03/americano.jpg" },
    { label: 'لاتيه', image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { label: 'كابتشينو', image: "https://storypick.com/wp-content/uploads/2016/03/CAPPUCCINO-COFFEE.jpg" },
    { label: 'قهوة تركية', image: "https://storypick.com/wp-content/uploads/2016/03/turkish-coffee.jpg" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.menuTitle}>قائمة المشروبات </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cards.map((card, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(card.label)} style={styles.cardWrapper}>


            <ImageBackground
              source={{ uri: card.image }}
              style={styles.imageBox}
              imageStyle={{ borderRadius: 10 }}
            >

              <View style={styles.txt}>
                <Text style={styles.imgeText}>{card.label}</Text>
              </View>
              </ImageBackground>


          </TouchableOpacity>

        ))}
      </ScrollView>



      
            <View style={styles.cartContainer}>
        <Icon name="cart-outline" size={28} color="black" />
        <Text style={styles.cartCount}>{cartCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
// لون الخفية كامللل
  container: {
    paddingTop: 40,
    backgroundColor: "#EDCC9C", //
    flex: 1,
  },

  menuTitle: {  
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#935116",
  },

  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },

  cardWrapper: { // تباعد 
    marginBottom: 30,
  },
  imageBox: {
    width: 200,
    height: 200,
    justifyContent: "flex-end",
  },

  txt: { //  المكتوب لالصورة
    backgroundColor: "#DAA15C",
    paddingVertical: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imgeText: {
    color: "#5A370D", //#704006
    textAlign: 'center',
    fontWeight: 'bold',
  },

  cartContainer: {
    position: 'absolute',
    bottom: 20,
     left: 20,
    flexDirection: 'row',
     alignItems: 'center',
    backgroundColor: "#704006",
    padding: 8,
     borderRadius: 20,
    elevation: 4,
  },


  cartCount: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
  },
});












// use state
// Task 
// scroll view .map 
// listbof task
// ... list of task 
// cheack box 
// task warrper 
//divider
// view cheack box  tochable opicity on press  cosole .log delete 
//view key
//functioon ccccc index :number
///styleName   styles ...listof 

//splice  (index ,1()
// نحط كارت في اليسار او اليمين عشان استخدم use sate 
//نستخدم صور و ويدجيت
// ما فيه ويدجيت في الرياكت 
// سكرول فيو افقي مو عامودي 


  ///////////////////

// ...list of task


// copylist 