import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Heart } from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme';

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => onTabChange('home')}
        activeOpacity={0.7}
      >
        <Home 
          size={24} 
          color={activeTab === 'home' ? COLORS.primary : COLORS.textSecondary}
          strokeWidth={activeTab === 'home' ? 2.5 : 2}
        />
        <Text style={[
          styles.navText, 
          activeTab === 'home' && styles.navTextActive
        ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => onTabChange('favorites')}
        activeOpacity={0.7}
      >
        <Heart 
          size={24} 
          color={activeTab === 'favorites' ? COLORS.primary : COLORS.textSecondary}
          strokeWidth={activeTab === 'favorites' ? 2.5 : 2}
        />
        <Text style={[
          styles.navText, 
          activeTab === 'favorites' && styles.navTextActive
        ]}>
          Favorites
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    paddingVertical: SPACING.sm,
    paddingBottom: SPACING.xl, // Safe area padding
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    justifyContent: 'space-around',
    ...SHADOWS.medium,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  navTextActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
