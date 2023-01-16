# Current Behavior
I'm trying to implement an Auth Flow on react native with react-navigation as it's done in the doc (https://reactnavigation.org/docs/auth-flow). But when the state change in order to show the HomeNavigator I get the following error (only on Android, it's work on iOS) :
```
The specified child already has a parent. You must call removeView() on the child's parent first.
```

![Screenshot_20211006-185431_ErrorAuthFlowReactNavigation](https://user-images.githubusercontent.com/42834229/136250425-1f4dbe40-7533-4969-b53e-3b5b26da72c0.jpg)

I figured out that the probleme come with @react-navigation/drawer (that need react-native-reanimated), but I didn't use these lib for now in the project (still an issues, I will need these soon).

# Expected Behavior
Just show the screen like it's done on iOS

# Environment
| package                                | version |
| -------------------------------------- | ------- |
| @react-navigation/native               | 6.0.4
| @react-navigation/drawer               | 6.1.6
| @react-navigation/native-stack         | 6.2.2
| react-native-safe-area-context         | 3.3.2
| react-native-screens                   | 3.8.0
| react-native-gesture-handler           | 1.10.3
| react-native-reanimated                |  2.3.0-beta.2 (the only version thats work with RN 0.66.0
| react-native                           | 0.66.0
| node                                   | 14.17.6
| npm or yarn                            | yarn
