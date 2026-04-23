import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { BookmarkMinus } from 'lucide-react-native';
import { spots } from '../data/spots';
import SpotCard from './SpotCard';
import { COLORS, SPACING } from '../theme';

export default function FavoritesView({ favoriteIds, onSpotPress }) {
  const favoriteSpots = spots.filter(spot => favoriteIds.includes(spot.id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Spots</Text>
      </View>
      
      {favoriteSpots.length === 0 ? (
        <View style={styles.emptyState}>
          <BookmarkMinus size={64} color={COLORS.border} />
          <Text style={styles.emptyTitle}>No favorites yet</Text>
          <Text style={styles.emptySubtitle}>
            Spots you save will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteSpots}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SpotCard spot={item} onPress={onSpotPress} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    marginBottom: SPACING.xs,
  },
  emptySubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
