import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';
import React from 'react';
import { LinkButton, LinkText } from '@/UI';
import { BlurView } from 'expo-blur';

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const temporaryVideoFix = () => {
    return Platform.OS === 'web' ? (
      <View style={[styles.content, { marginBottom: 50 }]}>
        <Text
          style={[
            Assets.styles.sectionTitle,
            {
              marginHorizontal: 15,
              textAlign: 'center',
              marginBottom: isMobile ? 10 : 20,
            },
          ]}
        >
          {t('partner.watch_partner_meeting')}
        </Text>
        <VideoPlayer videoUrl={Assets.links.partnerVideo} />
      </View>
    ) : (
      <View style={{ marginBottom: 50 }}></View>
    );
  };

  return (
    <ScreenTemplate>
      <ScrollView
        style={Assets.styles.scrollContainer}
        contentContainerStyle={Assets.styles.scrollContentContainer}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={Assets.styles.section}>
          <Text style={Assets.styles.sectionTitle}>{t('partner.partner_info.javaZone_2025_partner')}</Text>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.partner_registration_opens')}</Text>

          <Text style={[Assets.styles.text, { marginBottom: 20 }]}>
            {t('partner.partner_info.questions_email')}{' '}
            <LinkText title={t('javaZone.partners_mail')} href={Assets.links.partnerMail} />
          </Text>

          <LinkButton
            href={Assets.links.partnerRegistration}
            title={t('partner.partner_info.register_cta')}
            targetBlank={true}
          />
        </View>

        <View style={Assets.styles.section}>
          <Text style={Assets.styles.sectionTitle}>{t('partner.partner_info.partner_packages')}</Text>
          <View style={[styles.partnerContentInfo, isMobile && styles.partnerContentInfoMobile]}>
            <BlurView
              tint="light"
              intensity={20}
              style={[
                { ...styles.partnerContentItem, ...styles.partnerContentItemUniversal },
                isMobile && styles.partnerContentItemMobile,
              ]}
            >
              <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.standard_package')}</Text>
              <View>
                <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_1')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_2')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_3')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_4')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_5')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_6')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_7')}</Text>
              </View>
            </BlurView>

            <BlurView
              tint="light"
              intensity={20}
              style={[
                { ...styles.partnerContentItem, ...styles.partnerContentItemUniversal },
                isMobile && styles.partnerContentItemMobile,
              ]}
            >
              <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.restaurant_stand')}</Text>
              <View>
                <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_1')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_2')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_3')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_4')}</Text>
              </View>
            </BlurView>

            <BlurView
              tint="light"
              intensity={20}
              style={[
                { ...styles.partnerContentItem, ...styles.partnerContentItemUniversal },
                isMobile && styles.partnerContentItemMobile,
              ]}
            >
              <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.concept_stand')}</Text>
              <View>
                <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_1')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_2')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_3')}</Text>
              </View>
            </BlurView>

            <BlurView
              tint="light"
              intensity={20}
              style={[
                { ...styles.partnerContentItem, ...styles.partnerContentItemUniversal },
                isMobile && styles.partnerContentItemMobile,
              ]}
            >
              <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.partner_tickets')}</Text>
              <Text style={Assets.styles.intro}>
                {t('partner.partner_info.price')}: 9 220,- NOK ex VAT incl ticket fee
              </Text>
              <Text style={[Assets.styles.text]}>{t('partner.partner_info.partner_tickets_detail_1')}</Text>
              <View>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.round_robin_distribution')}</Text>
                <Text style={Assets.styles.listText}>- {t('partner.partner_info.first_come_first_served')}</Text>
              </View>
            </BlurView>

            <BlurView
              tint="light"
              intensity={20}
              style={[
                { ...styles.partnerContentItem, ...styles.partnerContentItemUniversal },
                isMobile && styles.partnerContentItemMobile,
              ]}
            >
              <Text style={[Assets.styles.sectionSubTitle, { maxWidth: '100%' }]}>
                {t('partner.partner_info.extended_package')}
              </Text>
              <View>
                <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</Text>
              </View>
              <Text style={Assets.styles.text}>{t('partner.partner_info.same_as_standard')}</Text>
            </BlurView>
          </View>
        </View>

        {temporaryVideoFix()}
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  partnerHeadingInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  partnerContentInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  partnerContentInfoMobile: {
    flexDirection: 'column',
  },
  partnerContentItemUniversal: {
    marginVertical: 10,
    marginRight: Platform.OS === 'web' && Dimensions.get('window').width > 768 ? 'auto' : 0,
    borderRadius: 5,
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown,
    shadowOpacity: 0.1,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
  },
  partnerContentItem: {
    alignItems: 'flex-start',
    flexBasis: 'auto',
    padding: 30,
    width: Dimensions.get('window').width >= 768 ? '45%' : '100%',
  },
  partnerContentItemMobile: {
    flexBasis: 'auto',
    padding: 10,
  },
  content: {
    marginTop: 10,
    width: '100%',
  },
  partnerVideoHeading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
  },
});

export default Partner;
