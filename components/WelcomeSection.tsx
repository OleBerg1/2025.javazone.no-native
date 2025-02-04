import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <View style={[styles.titleContainer, { marginTop: 20, flexDirection: 'column' }]}>
      <Text style={styles.welcomeText}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={styles.welcomeText}>September 3-4</Text>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 55,
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 'auto',
  },
  title: {
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
  },
  welcomeText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 30 : 25,
    textAlign: 'center',
  }
});
