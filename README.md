# FirstReactNative

## 구입처

[한빛미디어](https://www.hanbit.co.kr/store/books/look.php?p_code=B8811528616)

## settings (for Mac)

### install watchman

- 파일 시스템 변경 감지 도구  
- 파일의 변화를 감지하고 파일의 변화가 조건을 만족시키면 특정 동작을 실행

```
$ brew install watchman

$ watchman --version
```

### install Node.js

- nvm(Node Version Manager)을 추천
- https://github.com/nvm-sh/nvm

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

$ sudo vi ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

$ nvm --version

$ nvm install --lts

$ node --version
```

## for iPhone

### install python

### settings xcode

- xcode 실행 후 Preferences - Location에서 Command Line Tools의 가장 최신 버전 선택

### install cocoapods

- ios 개발에 사용되는 라이브러리를 관리해주는 도구

```
$ brew install cocoapods

$ pod --version
```

### run simulator

- 가상 기기에서 테스트를 진행하기 위한 iOS 시뮬레이터를 실행

`Xcode - Open Develop Tool - Simulator`

시뮬레이터가 실행되면 File - Open Device 에서 원하는 기기를 실행

## for Android

### install JDK

- 안드로이트 개발 언어인 자바 개발 도구(Java Development Kit)
- https://github.com/AdoptOpenJDK/homebrew-openjdk

```
$ brew cask install adoptopenjdk/openjdk/adoptopenjdk8
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8

$ java -version
$ javac -version
```

### install Android Studio

- 안드로이드를 개발하기 위한 공식 IDE(Integrated Development Environment)
- [Down](https://developer.android.com/studio?hl=ko)

#### SDK Components Setup

- Android SDK
- Android SDK Plattform
- Performance (Intel HAXM)
- Android Virtual Device

#### SDK Manager - Platforms

- Android SDK Platform 29
- `Inter x86 Atom_64 System Image` 또는 `Google APIs Inter x86 Atom System Image`
- Android SDK Build - Tools 29.0.2

```
# .zshrc에 추가

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

```
$ adb --verseion
Android Debug Bridge version 1.0.41
Version 31.0.0-7110759
Installed as /User/xxx/Library/Android/sdk/platform-tools/adb
```

### 리액트 네이티브 프로젝트 만들기

#### 1.Expo

```
$ npm install --global expo-cli

$ expo init my-first-expo

$ cd my-first-expo

$ npm start
```

> 생성된 프로젝트는 자동으로 새로운 git init이 되어 있음

#### 2.리액트 네이티브 CLI

- Expo와 반대로 RN cli에서는 필요한 기능이 있을 경우 모듈을 직접 만들어 사용할 수 있음
- Expo에 비해 배포가 불편하고, RN 입문자에겐 어렵게 느껴질 수 있음

```
$ npx react-native init MyFirstCLI

$ cd MyFirstCLI

$ npm run ios  // npx react-native run-ios

$ npm run android  // npx react-native run-android
```

## 프로젝트 구조

```
my-first-expo
├── assets
├── src
│    ├── ...
│    ├── App.js
├── App.js
├── package.json
```

> RN cli에서 현재 에러가 발생중이고, 해결할 시간이 없어서 expo로 진행

