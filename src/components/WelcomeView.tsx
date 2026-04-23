import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
// Note: You might want to remove SHADOWS from theme or update them to be dark green
import { BORDER_RADIUS, SHADOWS, SPACING } from '../theme';

interface WelcomeViewProps {
  onContinue: () => void;
}

export default function WelcomeView({ onContinue }: WelcomeViewProps) {
  return (
    <View style={styles.container}>
      {/* 1. MUST CHANGE Status Bar to dark-content over light images */}
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ImageBackground
        // Ensure this image is saved as bg1.png in assets/images/
        source={require('../assets/images/bgphoto.jpg')} 
        style={styles.background}
        // "contain" keeps the whole icon visible; "cover" would zoom in too much
        resizeMode="cover" 
      >
        {/* Removed darkOverlay: The image is already light */}

        <SafeAreaView style={styles.content}>
          
          {/* Top Section */}
          <View style={styles.topSection}>
            {/* Color updated to a dark, readable olive */}
            <Text style={styles.hookText}>
              Tired of looking for a{"\n"}quiet corner?
            </Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            {/* Color updated to match the olive green of the icon */}
            <Text style={styles.subText}>Discover the best spots near you.</Text>
            
            <TouchableOpacity 
              style={styles.button} 
              onPress={onContinue}
              activeOpacity={0.8}
            >
              {/* Button text updated to olive green */}
              <Text style={styles.buttonText}>Spots</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Setting background to match image for smooth edges
    backgroundColor: '#E9EAE3', 
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: 50, // Pushes text further from icon
  },
  topSection: {
    marginTop: 60,
    alignItems: 'center',
  },
  hookText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4A533F', // Dark Olive
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: -0.5,
    // Removed shadows: they look muddy on light backgrounds
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: '#6F7A5E', // Medium Olive (matching icon)
    marginBottom: 24,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.9,
  },
  button: {
    backgroundColor: '#FFFFFF', // Pure White for clean contrast
    width: '100%',
    paddingVertical: 18,
    borderRadius: BORDER_RADIUS.pill,
    alignItems: 'center',
    // Minimal shadow for subtle lift
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F7A5E', // Olive Green
    letterSpacing: 1,
  },
});