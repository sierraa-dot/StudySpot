import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import HomeView from './src/components/HomeView';
import FavoritesView from './src/components/FavoritesView';
import SpotDetailView from './src/components/SpotDetailView';
import BottomNav from './src/components/BottomNav';
import WelcomeView from './src/components/WelcomeView';
import { COLORS } from './src/theme';

export default function App() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const handleSpotPress = (spot) => {
    setSelectedSpot(spot);
  };

  const handleBack = () => {
    setSelectedSpot(null);
  };

  const toggleFavorite = (spotId) => {
    setFavoriteIds(prev => {
      if (prev.includes(spotId)) {
        return prev.filter(id => id !== spotId);
      } else {
        return [...prev, spotId];
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* Main Content Area */}
      <View style={styles.content}>
        {selectedSpot ? (
          <SpotDetailView 
            spot={selectedSpot} 
            onBack={handleBack}
            isFavorite={favoriteIds.includes(selectedSpot.id)}
            onToggleFavorite={toggleFavorite}
          />
        ) : (
          <>
            {activeTab === 'welcome' && (
              <WelcomeView onContinue={() => setActiveTab('home')} />
            )}
            
            {activeTab === 'home' && (
              <HomeView onSpotPress={handleSpotPress} />
            )}
            
            {activeTab === 'favorites' && (
              <FavoritesView 
                favoriteIds={favoriteIds} 
                onSpotPress={handleSpotPress} 
              />
            )}
          </>
        )}
      </View>

      {/* Bottom Navigation only renders if not in detail view */}
      {(!selectedSpot && activeTab !== 'welcome') && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
});
