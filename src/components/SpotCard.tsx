import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../theme';

export default function SpotCard({ spot, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPress(spot)}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{spot.name}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color={COLORS.star} fill={COLORS.star} />
            <Text style={styles.rating}>{spot.rating}</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <MapPin size={14} color={COLORS.textSecondary} />
          <Text style={styles.distance}>{spot.distance} away</Text>
        </View>

        <View style={styles.tagsContainer}>
          {spot.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  content: {
    padding: SPACING.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
    marginRight: SPACING.sm,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.pill,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  distance: {
    marginLeft: SPACING.xs,
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
  },
  tag: {
    backgroundColor: COLORS.tagBg,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.pill,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.tagText,
    fontWeight: '600',
  },
});
