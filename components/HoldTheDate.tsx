import { SvgImage } from '@/UI/index';
import { Assets } from '@/Assets';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null); // Track which button is pressed
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();

  const years = [ // todo: use t, not array
    { label: '2024', link: Assets.links.program24 },
    { label: '2023', link: Assets.links.program23 },
    { label: '2022', link: Assets.links.program22 },
    { label: '2019', link: Assets.links.program19 },
    { label: '2018', link: Assets.links.program18 },
  ];

  return (
    <View style={styles.content}>
      <SvgImage SVG={Assets.images.Logo} height={50} />

      <Text style={[styles.heading, {marginTop: 20}]}>{t('javaZone_2025')}</Text>
      {subPageHeader && <Text style={styles.subPageHeading}>{subPageHeader}</Text>}
      <Text style={styles.subHeading}>{t('in_progress')}</Text>

      <View style={[styles.titleContainer, { marginTop: 20 }]}>
        <Text style={[styles.title, styles.titleLeft]}>{t('conference_title')}</Text>
        <Text style={[styles.title, styles.titleRight]}>{t('conference_date')}</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.titleLeft]}>{t('location_title')}</Text>
        <Text style={[styles.title, styles.titleRight]}>{t('location')}</Text>
      </View>

      <View style={styles.listContainer}>
        {years.map((year, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.listItem, pressedIndex === index && styles.pressed]} // Highlight only the pressed button
            onPressIn={() => setPressedIndex(index)} // Set the pressed index
            onPressOut={() => setPressedIndex(null)} // Reset when the press is released
          >
            <LinearGradient
              start={{ x: 0.1, y: 0.4 }}
              style={{ padding: 3, borderRadius: 3, opacity: 20 }}
              colors={[Assets.colors.jz2025ThemeColors.cyberYellow, Assets.colors.jz2025ThemeColors.orangeYellow]}
            >
              <Link style={styles.text} href={year.link}>
                {year.label}
              </Link>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontFamily: 'Cinzel_400Regular', fontSize: 18, marginTop: 20 }}>Test 1</Text>
      <Text style={{ fontFamily: 'Cinzel_700Bold', fontSize: 18 }}>Test 2</Text>
      <Text style={{ fontFamily: 'Cinzel_800ExtraBold', fontSize: 18 }}>Test 3</Text>

      <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 18, marginTop: 20 }}>Test 4</Text>
      <Text style={{ fontFamily: 'PlayfairDisplay_700Bold', fontSize: 18 }}>Test 5</Text>
      <Text style={{ fontFamily: 'PlayfairDisplay_800ExtraBold', fontSize: 18 }}>Test 6</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: Platform.OS == 'web' ? 38 : 36,
    fontWeight: 'bold',
    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_400Regular'
  },
  subHeading: {
    fontSize: Platform.OS == 'web' ? 32 : 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_700Bold'
  },
  subPageHeading: {
    fontSize: Platform.OS == 'web' ? 28 : 26,
    fontWeight: '500',
    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_600SemiBold'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: Dimensions.get('window').width >= 768 ? 400 : 380,
  },
  title: {
    fontSize: Platform.OS == 'web' ? 20 : 18,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    color: Assets.colors.brand.charcoal,
    fontWeight: '500',
    width: Platform.OS === 'web' ? '50%' : '30%',
    marginLeft: Platform.OS === 'web' ? 0 : 5,
    fontFamily: 'PlayfairDisplay_700Bold'
  },
  titleRight: {
    alignSelf: 'flex-end',
    color: Assets.colors.brand.charcoal,
    marginLeft: Platform.OS === 'web' ? 5 : 1,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  callout: {
    color: Assets.colors.logo.brightYellow,
    marginTop: 15,
    marginBottom: 5,
    fontStyle: 'italic',
    fontSize: 18,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    marginTop: 5,
  },
  listItem: {
    padding: 5,
    //backgroundColor: Assets.colors.gradient.dark, // Normal state color
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  pressed: {
    backgroundColor: Assets.colors.gradient.brown, // Hover state color (when pressed)
  },
  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS == 'web' ? 18 : 16,
  },
});

export default HoldTheDate;
