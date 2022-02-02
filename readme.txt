Building
The mas target architecture is set to "universal". This builds a universal binary for x86_64 and arm64 architectures.
To build run "npm run package".
The build output will be in the release/build folder.

Code signing
electron-builder seems to want to sign two times. Once with a developer ID certificate and one with a certificate depending on the "target" and "type" entries in the package.json.
It will search for "Apple Development" certificates in the keychain for any combination of "target" and "type" except for "target=mas" and "type=distribution" in which case
it will search for "Apple Distribution" certificates. Also, for mas/distribution the builder will also create a .pkg file and sign it using a third certificate: "3rd Party Mac Developer Installer".
So you will also need that certificate in the keychain.
You should disable developer ID signing. To do that, set the "identity" field in the package.json to null. The "identity" field only controls the developer ID signing. The second signing
is controlled by the CSC_NAME environment variable. It needs to contain the identity name of the certificate with which to sign the app. If not set, the builder will automatically choose
a certificate prefixed with "Apple Development" or "Apple Distribution" depending on the target/type combination. It is unknown how you can change the package signing certificate.

Uploading
The Transporter app got stuck every time we attempted to upload through it. It can be used for validation though.
To upload we created the upload.sh script. Read the comments inside it before using it.