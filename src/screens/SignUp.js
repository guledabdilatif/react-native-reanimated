import { Text, View, SafeAreaView, StatusBar, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import tw from 'twrnc';
import Animated,{ FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
        const navigation = useNavigation();
        return (
            <View style={tw`bg-white w-full h-full`}>
                <StatusBar style="light" />
                <ImageBackground source={require('../images/background.png')} style={tw`w-full h-full`} >
                    <View style={tw`flex-row justify-around w-full absolute`}>
                        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} source={require('../images/light.png')} />
                        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} source={require('../images/light.png')} style={tw`h-[40] w-[16]`} />

                    </View>
                    {/* Title and form */}

                    <View style={tw`w-full h-full pb-10 pt-48 justify-around flex`}>
                        {/* Title */}
                        <View style={tw` flex items-center `}>
                            <Animated.Text entering={FadeInUp.duration(1000).springify()} style={tw`text-3xl tracking-wider text-white font-bold mt-24`}>SignUp</Animated.Text>
                        </View>
                        {/* Form */}
                        <View style={tw`pt-40 flex items-center mx-4 space-y-4`}>
                            <Animated.View entering={FadeInDown.duration(200).springify()} style={tw`bg-black/5 p-5 rounded-2xl w-full mb-4`}>
                                <TextInput placeholder="Username" placeholderTextColor={'gray'} />
                            </Animated.View>
                            <Animated.View entering={FadeInDown.duration(400).springify()} style={tw`bg-black/5 p-5 rounded-2xl w-full mb-4`}>
                                <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                            </Animated.View>
                            <Animated.View entering={FadeInDown.duration(600).springify()}  style={tw`bg-black/5 p-5 rounded-2xl w-full mb-4`}>
                                <TextInput placeholder="password" placeholderTextColor={'gray'} />
                            </Animated.View>
                            <Animated.View entering={FadeInDown.duration(800).springify()}  style={tw`w-full`}>
                                <TouchableOpacity style={tw`w-full bg-sky-400 p-5 rounded-2xl mb-3`}>
                                    <Text style={tw`text-xl font-bold text-white text-center`}>Sign-Up</Text>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View entering={FadeInDown.duration(1000).springify()}  style={tw`flex-row justify-center`}>
                                <Text>already have an account? </Text>
                                <TouchableOpacity onPress={()=>navigation.push('Login')}>
                                    <Text style={tw`text-sky-400`}>Login</Text>
                                </TouchableOpacity>
                                
                            </Animated.View>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        )
    
}