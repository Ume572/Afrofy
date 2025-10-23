


import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ onAnimationComplete }) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const gradientShift = useRef(new Animated.Value(0)).current;
  const textSlideAnim = useRef(new Animated.Value(40)).current;
  const glowAnim = useRef(new Animated.Value(0.4)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;
  const particleAnim = useRef(new Animated.Value(0)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  
  // New animations for Afrofy text
  const letterAnim1 = useRef(new Animated.Value(0)).current;
  const letterAnim2 = useRef(new Animated.Value(0)).current;
  const letterAnim3 = useRef(new Animated.Value(0)).current;
  const letterAnim4 = useRef(new Animated.Value(0)).current;
  const letterAnim5 = useRef(new Animated.Value(0)).current;
  const letterAnim6 = useRef(new Animated.Value(0)).current;
  const textGlowAnim = useRef(new Animated.Value(0)).current;
  const textScaleAnim = useRef(new Animated.Value(0.5)).current;
  
  // Other animations
  const starAnim1 = useRef(new Animated.Value(0)).current;
  const starAnim2 = useRef(new Animated.Value(0)).current;
  const starAnim3 = useRef(new Animated.Value(0)).current;
  const celebrationAnim = useRef(new Animated.Value(0)).current;
  const orbitAnim = useRef(new Animated.Value(0)).current;
  const sparkleAnim = useRef(new Animated.Value(0)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  // Background music icons animations
  const bgMusicIcon1 = useRef(new Animated.Value(0)).current;
  const bgMusicIcon2 = useRef(new Animated.Value(0)).current;
  const bgMusicIcon3 = useRef(new Animated.Value(0)).current;
  const bgMusicIcon4 = useRef(new Animated.Value(0)).current;
  const bgMusicIcon5 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 🌈 Beautiful gradient animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(gradientShift, {
          toValue: 1,
          duration: 8000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(gradientShift, {
          toValue: 0,
          duration: 8000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.sin),
        }),
      ])
    ).start();

    // 💫 Ripple effect
    Animated.loop(
      Animated.timing(rippleAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();

    // ✨ Particle animation
    Animated.loop(
      Animated.timing(particleAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();

    // 🌟 Stars entrance animation
    Animated.stagger(200, [
      Animated.timing(starAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(2)),
      }),
      Animated.timing(starAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(2)),
      }),
      Animated.timing(starAnim3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(2)),
      }),
    ]).start();

    // 🎉 Celebration animation (circular orbit)
    Animated.loop(
      Animated.timing(celebrationAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    // 🪐 Orbiting elements
    Animated.loop(
      Animated.timing(orbitAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    // ✨ Sparkle animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(sparkleAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(sparkleAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // 🌊 Wave animation
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      })
    ).start();

    // 🎵 Background Music Icons Animation
    Animated.stagger(400, [
      Animated.timing(bgMusicIcon1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
      Animated.timing(bgMusicIcon2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
      Animated.timing(bgMusicIcon3, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
      Animated.timing(bgMusicIcon4, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
      Animated.timing(bgMusicIcon5, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.sin),
      }),
    ]).start();

    // 🔴 Main icon pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 1800,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
      ])
    ).start();

    // 💖 Glow effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 0.8,
          duration: 2200,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(glowAnim, {
          toValue: 0.4,
          duration: 2200,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
      ])
    ).start();

    // 🚀 Main animation sequence
    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          easing: Easing.out(Easing.exp),
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          tension: 120,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
      Animated.delay(400),
      
      // Afrofy text animation sequence
      Animated.parallel([
        // Text scale animation
        Animated.spring(textScaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        // Text glow animation
        Animated.timing(textGlowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.out(Easing.exp),
        }),
        // Staggered letter animations
        Animated.stagger(100, [
          Animated.timing(letterAnim1, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
          Animated.timing(letterAnim2, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
          Animated.timing(letterAnim3, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
          Animated.timing(letterAnim4, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
          Animated.timing(letterAnim5, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
          Animated.timing(letterAnim6, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(2)),
          }),
        ]),
      ]),
      
      Animated.timing(textSlideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.2)),
      }),
    ]).start();

    // ⚪ Loading dots animation
    const animateDot = (dot, delay) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
        ])
      ).start();
    };
    
    animateDot(dot1Anim, 0);
    animateDot(dot2Anim, 400);
    animateDot(dot3Anim, 800);

    // ⏳ Transition to next screen
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  // Interpolations
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'],
  });

  const rippleScale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.8],
  });

  const rippleOpacity = rippleAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.6, 0],
  });

  const particleRotate = particleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  // Background Music Icons animations
  const bgIcon1Rotate = bgMusicIcon1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const bgIcon2Rotate = bgMusicIcon2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg'],
  });

  const bgIcon3Rotate = bgMusicIcon3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const bgIcon4Rotate = bgMusicIcon4.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const bgIcon5Rotate = bgMusicIcon5.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '270deg'],
  });

  const bgIconScale = bgMusicIcon1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.8, 0.5],
  });

  const bgIconOpacity = bgMusicIcon1.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.4, 0.2],
  });

  // Letter animations
  const letter1Translate = letterAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const letter2Translate = letterAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 0],
  });

  const letter3Translate = letterAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 0],
  });

  const letter4Translate = letterAnim4.interpolate({
    inputRange: [0, 1],
    outputRange: [60, 0],
  });

  const letter5Translate = letterAnim5.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 0],
  });

  const letter6Translate = letterAnim6.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const letterOpacity = letterAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const textGlowOpacity = textGlowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.6],
  });

  // Star animations
  const star1Scale = starAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const star2Scale = starAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const star3Scale = starAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  // Celebration orbit animation
  const celebrationRotate = celebrationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const celebrationScale = celebrationAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 0.8],
  });

  // Wave animation
  const waveTranslate = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const dot1Scale = dot1Anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1.4]
  });

  const dot2Scale = dot2Anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1.4]
  });

  const dot3Scale = dot3Anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1.4]
  });

  // Create orbiting elements
  const OrbitingElement = ({ radius, angle, delay = 0, size = 8 }) => {
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <Animated.View
        style={[
          styles.orbitingElement,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            transform: [
              { translateX: x },
              { translateY: y },
            ],
          },
        ]}
      />
    );
  };

  // Background Music Icon Component
  const BackgroundMusicIcon = ({ rotate, scale, opacity, top, left, icon }) => (
    <Animated.View 
      style={[
        styles.bgMusicIcon,
        {
          top,
          left,
          transform: [
            { rotate },
            { scale }
          ],
          opacity,
        }
      ]}
    >
      <Text style={styles.bgMusicIconText}>{icon}</Text>
    </Animated.View>
  );

  // Afrofy letters with individual animations
  const AfrofyText = () => (
    <Animated.View 
      style={[
        styles.afrofyContainer,
        {
          transform: [
            { scale: textScaleAnim },
            { translateY: textSlideAnim }
          ],
          opacity: fadeAnim,
        }
      ]}
    >
      {/* Text Glow Effect */}
      <Animated.View 
        style={[
          styles.textGlow,
          {
            opacity: textGlowOpacity,
            transform: [{ scale: pulseAnim }]
          }
        ]} 
      />
      
      <View style={styles.lettersContainer}>
        {/* A */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterA,
            {
              transform: [{ translateX: letter1Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          A
        </Animated.Text>
        
        {/* F */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterF,
            {
              transform: [{ translateX: letter2Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          F
        </Animated.Text>
        
        {/* R */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterR,
            {
              transform: [{ translateX: letter3Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          R
        </Animated.Text>
        
        {/* O */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterO,
            {
              transform: [{ translateX: letter4Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          O
        </Animated.Text>
        
        {/* F */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterF2,
            {
              transform: [{ translateX: letter5Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          F
        </Animated.Text>
        
        {/* Y */}
        <Animated.Text 
          style={[
            styles.letter,
            styles.letterY,
            {
              transform: [{ translateX: letter6Translate }],
              opacity: letterOpacity,
            }
          ]}
        >
          Y
        </Animated.Text>
      </View>
      
      <Animated.View 
        style={[
          styles.underline,
          {
            transform: [{ scaleX: pulseAnim }]
          }
        ]} 
      />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0A0A0A" barStyle="light-content" translucent />

      {/* 🌈 Beautiful Gradient Background */}
      <AnimatedGradient shift={gradientShift} />

      {/* 🎵 Background Floating Music Icons */}
      <BackgroundMusicIcon 
        rotate={bgIcon1Rotate}
        scale={bgIconScale}
        opacity={bgIconOpacity}
        top="15%"
        left="10%"
        icon="♫"
      />
      <BackgroundMusicIcon 
        rotate={bgIcon2Rotate}
        scale={bgIconScale}
        opacity={bgIconOpacity}
        top="25%"
        right="8%"
        icon="♪"
      />
      <BackgroundMusicIcon 
        rotate={bgIcon3Rotate}
        scale={bgIconScale}
        opacity={bgIconOpacity}
        bottom="30%"
        left="12%"
        icon="♬"
      />
      <BackgroundMusicIcon 
        rotate={bgIcon4Rotate}
        scale={bgIconScale}
        opacity={bgIconOpacity}
        bottom="20%"
        right="15%"
        icon="🎵"
      />
      <BackgroundMusicIcon 
        rotate={bgIcon5Rotate}
        scale={bgIconScale}
        opacity={bgIconOpacity}
        top="40%"
        left="20%"
        icon="🎶"
      />

      {/* 🌟 Shooting Stars */}
      <Animated.View 
        style={[
          styles.star1,
          {
            transform: [
              { scale: star1Scale },
              { translateY: waveTranslate }
            ],
            opacity: starAnim1,
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.star2,
          {
            transform: [
              { scale: star2Scale },
              { translateY: waveTranslate }
            ],
            opacity: starAnim2,
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.star3,
          {
            transform: [
              { scale: star3Scale },
              { translateY: waveTranslate }
            ],
            opacity: starAnim3,
          }
        ]} 
      />

      {/* ✨ Floating Particles */}
      <Animated.View 
        style={[
          styles.particle1,
          {
            transform: [
              { rotate: particleRotate },
              { scale: pulseAnim }
            ]
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.particle2,
          {
            transform: [
              { rotate: particleRotate },
              { scale: pulseAnim }
            ]
          }
        ]} 
      />

      {/* 🎉 Celebration Orbiting Circle */}
      <Animated.View 
        style={[
          styles.celebrationOrbit,
          {
            transform: [
              { rotate: celebrationRotate },
              { scale: celebrationScale }
            ]
          }
        ]}
      >
        <OrbitingElement radius={120} angle={0} size={10} />
        <OrbitingElement radius={120} angle={Math.PI / 2} size={8} />
        <OrbitingElement radius={120} angle={Math.PI} size={12} />
        <OrbitingElement radius={120} angle={3 * Math.PI / 2} size={6} />
      </Animated.View>

      {/* ✨ Sparkle Effects */}
      <Animated.View 
        style={[
          styles.sparkle1,
          {
            opacity: sparkleAnim,
            transform: [{ scale: sparkleAnim }]
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.sparkle2,
          {
            opacity: sparkleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.7]
            }),
            transform: [{ scale: sparkleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1.2]
            })}]
          }
        ]} 
      />

      {/* 💫 Main Content */}
      <Animated.View
        style={[
          styles.content,
          { 
            opacity: fadeAnim, 
            transform: [
              { scale: scaleAnim }
            ] 
          },
        ]}
      >
        {/* 🎵 Music Icon with Ripple Effect */}
        <View style={styles.iconWrapper}>
          <Animated.View 
            style={[
              styles.ripple,
              {
                transform: [{ scale: rippleScale }],
                opacity: rippleOpacity
              }
            ]} 
          />
          <Animated.View
            style={[
              styles.iconContainer,
              { 
                transform: [
                  { rotate: rotateInterpolate },
                  { scale: pulseAnim }
                ] 
              },
            ]}
          >
            <View style={styles.iconInner}>
              <Text style={styles.iconText}>♫</Text>
              {/* Inner sparkle */}
              <Animated.View 
                style={[
                  styles.innerSparkle,
                  {
                    opacity: sparkleAnim,
                    transform: [{ rotate: celebrationRotate }]
                  }
                ]} 
              />
            </View>
            <Animated.View 
              style={[
                styles.iconGlow, 
                { 
                  opacity: glowAnim,
                  transform: [{ scale: pulseAnim }]
                }
              ]} 
            />
          </Animated.View>
        </View>

        {/* 🏷️ Beautiful Afrofy Text with Staggered Animation */}
        <AfrofyText />

        {/* 💭 Elegant Tagline */}
        <Animated.View
          style={{
            transform: [{ translateY: textSlideAnim }],
            opacity: fadeAnim,
          }}
        >
          <Text style={styles.tagline}>Where Music Meets Soul</Text>
        </Animated.View>
      </Animated.View>

      {/* 👇 Beautiful Loading Indicator */}
      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          <Animated.View 
            style={[
              styles.dot, 
              { 
                opacity: dot1Anim,
                transform: [{ scale: dot1Scale }]
              }
            ]} 
          />
          <Animated.View 
            style={[
              styles.dot,  
              { 
                opacity: dot2Anim,
                transform: [{ scale: dot2Scale }]
              }
            ]} 
          />
          <Animated.View 
            style={[
              styles.dot, 
              { 
                opacity: dot3Anim,
                transform: [{ scale: dot3Scale }]
              }
            ]} 
          />
        </View>
        <Text style={styles.footerText}>Creating your musical journey...</Text>
      </View>
    </View>
  );
};

// 🌈 Enhanced Animated Gradient with Beautiful Colors
const AnimatedGradient = ({ shift }) => {
  const color1 = shift.interpolate({
    inputRange: [0, 1],
    outputRange: ['#0A0A0A', '#1A0A0A'],
  });
  const color2 = shift.interpolate({
    inputRange: [0, 1],
    outputRange: ['#1A0A0A', '#2A0A0A'],
  });
  const color3 = shift.interpolate({
    inputRange: [0, 1],
    outputRange: ['#2A0A0A', '#0A0A0A'],
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, { opacity: 0.95 }]}>
      <LinearGradient
        colors={[color1.__getValue(), color2.__getValue(), color3.__getValue()]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      
      {/* ✨ Subtle Pattern Overlay */}
      <View style={styles.patternOverlay} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    opacity: 0.03,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    position: 'relative',
  },
  ripple: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FF3B3B',
    opacity: 0.3,
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 15,
  },
  iconInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF3B3B',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B3B',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
  },
  innerSparkle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  iconText: { 
    color: '#FFFFFF', 
    fontSize: 46, 
    fontWeight: '200',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  iconGlow: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(244, 66, 66, 0.3)',
    zIndex: -1,
  },
  // Background Music Icons
  bgMusicIcon: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
  },
  bgMusicIconText: {
    fontSize: 20,
    color: '#FF3B3B',
    opacity: 0.6,
  },
  // Afrofy Text Styles
  afrofyContainer: {
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  textGlow: {
    position: 'absolute',
    width: 300,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    top: '50%',
    left: '50%',
    marginLeft: -180,
    marginTop: -40,
    zIndex: -1,
  },
  lettersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(244, 66, 66, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 15,
    marginHorizontal: 2,
  },
  letterA: {
    color: '#fff',
    fontSize: 58,
  },
  letterF: {
    color: '#FFFFFF',
    fontSize: 56,
  },
  letterR: {
    color: '#fff',
    fontSize: 56,
  },
  letterO: {
    color: '#FF3B3B',
    fontSize: 56,
  },
  letterF2: {
    color: '#FFFFFF',
    fontSize: 56,
  },
  letterY: {
    color: '#fff',
    fontSize: 58,
  },
  underline: {
    width: 120,
    height: 4,
    backgroundColor: '#F44242',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    shadowColor: '#F44242',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  // Stars
  star1: {
    position: 'absolute',
    top: '15%',
    left: '20%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  star2: {
    position: 'absolute',
    top: '25%',
    right: '15%',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  star3: {
    position: 'absolute',
    bottom: '35%',
    left: '10%',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 9,
  },
  particle1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(244, 66, 66, 0.1)',
    top: '20%',
    left: '10%',
  },
  particle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(244, 66, 66, 0.08)',
    bottom: '25%',
    right: '15%',
  },
  // Celebration orbit
  celebrationOrbit: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: 'rgba(244, 66, 66, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitingElement: {
    position: 'absolute',
    backgroundColor: '#F44242',
    shadowColor: '#F44242',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
  },
  // Sparkles
  sparkle1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    top: '40%',
    right: '25%',
  },
  sparkle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(244, 66, 66, 0.15)',
    bottom: '40%',
    left: '20%',
  },
  tagline: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 2,
    fontStyle: 'italic',
    textAlign: 'center',
    textShadowColor: 'rgba(244, 66, 66, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  footer: { 
    position: 'absolute', 
    bottom: 90, 
    alignItems: 'center' 
  },
  dotsContainer: { 
    flexDirection: 'row', 
    marginBottom: 20,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#F44242',
    marginHorizontal: 6,
    shadowColor: '#F44242',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  footerText: { 
    color: 'rgba(255, 255, 255, 0.6)', 
    fontSize: 15, 
    fontWeight: '300',
    letterSpacing: 1,
    textShadowColor: 'rgba(244, 66, 66, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default SplashScreen;



