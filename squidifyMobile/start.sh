#!/bin/sh

# Make sure yarn packages up to date
yarn install

# Run prebuild checks
# . prebuild.sh "$2"

if [ $? -ne 0 ]
then
  exit 1
fi

suffix=$GCCOrangePrintSuffix
androidSuffix=$GCCOrangePrintSuffixAndroid

# Check for Release/Debug

buildType=''
simulator=''
config=''

if [ -z "$2" ]
then
  config='dev'
else
  config="$2"
fi

if [ -z "$3" ]
then
  simulator='iPhone XS'
else
  simulator="$3"
fi

if [ -z "$4" ]
then
  buildType='Debug'
else
  buildType="$4"
fi

if [ "$1" = 'ios' ]
then
  configuration="$buildType$suffix"

  echo 'Using configuration: '$configuration

  react-native run-ios --scheme GCCOrangePrint --configuration "$configuration" --simulator "$simulator"
else
  buildVariant="$config$buildType"

  echo 'Using build variant: '$buildVariant
  echo 'Android suffix: '$androidSuffix

  react-native run-android --variant "$buildVariant" --appIdSuffix "$androidSuffix"
fi