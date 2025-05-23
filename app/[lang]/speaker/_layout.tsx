import React from "react";
import { Stack } from "expo-router/stack";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet, View } from "react-native";
import { Assets } from "@/Assets";
import { LanguagePicker } from "@/components";

const SpeakerLayout = () => {

    const nativeScreenOptions = {
        headerShown: true,
        headerTransparent: true,
        headerBackground: () => <BlurView tint="light" intensity={80} experimentalBlurMethod={'dimezisBlurView'} style={[StyleSheet.absoluteFill]} />,
        headerTitle: '',
        headerBackButtonMenuEnabled: true,
        headerTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
        headerRight: () => (
            <View style={{marginRight: -15, marginTop: 5}}>
                <LanguagePicker />
            </View>
        ),
    }
    const webScreenOptions = {
        headerShown: false,
    }

    return (
        <Stack initialRouteName="index" screenOptions={Platform.OS === 'web' ? webScreenOptions : nativeScreenOptions}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="kids"/>
            <Stack.Screen name="reimbursement"/>
            <Stack.Screen name="tips"/>
        </Stack>
    )
}

export default SpeakerLayout;