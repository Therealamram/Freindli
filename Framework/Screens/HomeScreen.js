// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const storiesData = [

  'Friends',  'Groups',  'Pages',  'Events',  'Events',  'Marketplace',
    
  
];



const postsData = [
  {
    name: 'pepper pots', details: 'Chef at Emirate Foods • 5 mins ago', text: 'Here’s a delicious and healthy salad recipe to try out this weekend! 🥗🍅', likes: 684, comments: 245, shares: 102
  },
  {
    name: 'Bruce banner', details: 'Food Blogger • 15 mins ago', text: 'Made this creamy avocado toast for brunch today. So simple, so good! 🥑🍞', likes: 512, comments: 132, shares: 67
  },
  {
    name: 'Wade Wilson', details: 'Nutritionist • 30 mins ago', text: 'Hydration is key! Don’t forget to drink your water and eat your greens 🌿💧', likes: 389, comments: 98, shares: 40
  }
];

const HomeScreen = () => {
  const renderStory = (item, index) => (
    <View key={index} style={styles.storyItem}>
      <Image source={item.image } style={styles.storyImage} />
      <Text style={styles.storyText}>{item}</Text>
    </View>
  );

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.profileName}>{item.name} <Text style={styles.following}>• Following</Text></Text>
          <Text style={styles.profileDetails}>{item.details}</Text>
        </View>
      </View>

      <Text style={styles.postText}>{item.text}</Text>

      <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.postImage} />

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="heart-o" size={20} color="black" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="comment-o" size={20} color="black" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="share" size={20} color="black" />
          <Text style={styles.actionText}>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#999" />
          <TouchableOpacity>
            <FontAwesome name="envelope-o" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          ListHeaderComponent={
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
              {storiesData.map(renderStory)}
            </ScrollView>
          }
          data={postsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderPost}
          contentContainerStyle={{ paddingBottom: 80 }}
        />

  
        <View style={styles.bottomNav}>
          <TouchableOpacity>
            <FontAwesome name="home" size={24} color="black" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="users" size={24} color="black" />
            <Text style={styles.navText}>Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="plus-circle" size={24} color="black" />
            <Text style={styles.navText}>Create</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="bell-o" size={24} color="black" />
            <Text style={styles.navText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between'
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 10,
    height: 40,
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,

  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 2
  },
  storyText: {
    marginTop: 5,
    fontSize: 12
  },
  postContainer: {
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1
  },
  profileName: {
    fontWeight: 'bold'
  },
  following: {
    color: 'blue'
  },
  profileDetails: {
    fontSize: 12,
    color: '#555'
  },
  postText: {
    marginVertical: 8,
    fontSize: 14
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionText: {
    marginLeft: 5
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  navText: {
    fontSize: 12,
    textAlign: 'center'
  }
});

export default HomeScreen;
