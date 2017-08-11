# Configuring React native project
```ruby
$ git clone https://github.com/renolmachado/React-native-upload-image-to-nodejs.git
```
Open terminal in: ...React-native-upload-image-to-nodejs\react-native solution>

And execute 

```ruby
$ yarn
```

Open AndroidStudio and load "Android" (...React-native-upload-image-to-nodejs\react-native solution\Android) project
Fix Gradle files steps: 

 - "Open File"
 - "Sync Now/Try Again"
 - "Update Build Tools version and sync project"

### Corroborate that Gradle has been compiled

Close AndroidStudio

Now delete **"build"** folders in:
 - ...React-native-upload-image-to-nodejs\react-native solution\Android
 - ...React-native-upload-image-to-nodejs\react-native solution\Android\app

In the file **"api/upload.js"** configure your IP and Port where the server is running

Open a new Terminal and run:

```ruby
$ react-native run-android
```
If an error has occurred, close the terminal and try again. :)

# Configuring Nodejs server

Open terminal in: ...React-native-upload-image-to-nodejs\node-server solution

And execute 

```sh
$ yarn
$ mkdir public
$ node index.js
```



