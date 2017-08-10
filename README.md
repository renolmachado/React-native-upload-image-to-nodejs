# React native upload image to nodejs

```ruby
git clone https://github.com/renolmachado/React-native-upload-image-to-nodejs.git
```
Open terminal in: ...React-native-upload-image-to-nodejs\react-native solution>

And execute 

```ruby
yarn
```

Delete folder "Android" and run:

```ruby
react-native upgrade
```

Indicate yes (y) for all asks

Now run:
```ruby
react-native link
```
Add the followers permissions to AndroidManifest.xml in "Android/app/src"

  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <uses-permission android:name="android.permission.CAMERA" />


Uploading image to a nodejs server 
