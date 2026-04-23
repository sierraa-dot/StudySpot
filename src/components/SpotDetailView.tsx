import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { ChevronLeft, Heart, MapPin, Star } from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme';

export default function SpotDetailView({ spot, onBack, isFavorite, onToggleFavorite }) {
  if (!spot) return null;

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ChevronLeft size={28} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Placeholder for Image (Using a color block for minimalist feel) */}
        <View style={styles.imagePlaceholder}>
          <Image
            source={spot.image}
            style={styles.spotImage}
            resizeMode="cover"
          />
          {/*<Text style={styles.imageText}>{spot.name[0]}</Text>*/}
        </View>

        <View style={styles.headerInfo}>
          <Text style={styles.title}>{spot.name}</Text>
          <View style={styles.ratingBadge}>
            <Star size={18} color={COLORS.star} fill={COLORS.star} />
            <Text style={styles.ratingText}>{spot.rating}</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <MapPin size={18} color={COLORS.primary} />
          <Text style={styles.distanceText}>{spot.distance} away</Text>
        </View>

        <View style={styles.tagsContainer}>
          {spot.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{spot.description}</Text>
        </View>
      </ScrollView>

      {/* Floating Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={() => onToggleFavorite(spot.id)}
          activeOpacity={0.8}
        >
          <Heart
            size={24}
            color={isFavorite ? COLORS.surface : COLORS.primary}
            fill={isFavorite ? COLORS.surface : 'transparent'}
          />
          <Text style={[styles.favoriteText, isFavorite && styles.favoriteTextActive]}>
            {isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  backButton: {
    padding: SPACING.xs,
    marginLeft: -SPACING.xs,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  scrollContent: {
    paddingBottom: 100, // Space for bottom bar
  },
  imagePlaceholder: {
    height: 220,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
    ...SHADOWS.small,
  },
  spotImage: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS.lg,
  },
  imageText: {
    fontSize: 80,
    fontWeight: '800',
    color: COLORS.primary,
    opacity: 0.3,
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.text,
    flex: 1,
    marginRight: SPACING.sm,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.pill,
    ...SHADOWS.small,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  distanceText: {
    marginLeft: SPACING.sm,
    fontSize: 16,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  tag: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tagText: {
    fontSize: 14,
    color: COLORS.text,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textSecondary,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    paddingBottom: SPACING.xl, // Safe area
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    ...SHADOWS.medium,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryLight,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  favoriteButtonActive: {
    backgroundColor: COLORS.primary,
  },
  favoriteText: {
    marginLeft: SPACING.sm,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },
  favoriteTextActive: {
    color: COLORS.surface,
  },
});
