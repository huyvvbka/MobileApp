import 'react-native-gesture-handler';
import React, {useRef, useEffect, useCallback} from 'react';
import {View, StyleSheet, Animated, TextInput} from 'react-native';
import {SvgUri, Circle, G, Svg} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);
function Donut({
  percentage = 100,
  radius = 100,
  strokeWidth = 10,
  duration = 1000,
  color = 'red',
  delay = 0,
  textColor,
  max = 100,
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const halfCircle = radius + strokeWidth;
  const circkeCircumference = 2 * Math.PI * radius;
  const animation = useCallback(
    (toValue) => {
      return Animated.timing(animatedValue, {
        toValue,
        duration,
        delay,
        useNativeDriver: true,
      }).start(() => {
        animation(toValue === 0 ? percentage : 0);
      });
    },
    [animatedValue, delay, duration, percentage],
  );
  useEffect(() => {
    animation(percentage);
    animatedValue.addListener((v) => {
      const maxPercent = (100 * v.value) / max;
      const strokeDashoffset =
        circkeCircumference - (circkeCircumference * maxPercent) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue, animation, circkeCircumference, max, percentage]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circkeCircumference}
            strokeDashoffset={circkeCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            fontWeight: '900',
            textAlign: 'center',
          },
        ]}
      />
    </View>
  );
}

export default Donut;
