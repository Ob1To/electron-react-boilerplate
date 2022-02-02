#!/bin/sh

# Provide iTunes email and password. The password needs to be app-specific password. Google it.
USERNAME=''
PASSWORD=''
APP_PATH="release/build/mas-universal/pCloud Pass-4.5.0-universal.pkg"

# Bundle versions, bundle id, apple id, team id may be subject to change. The values here were used for testing purposes and you may need to change them.
# Although the manual page specifies that the --asc-public-id parameter is required, it can be substitued for --team-id.
xcrun altool --upload-package "$APP_PATH" --type macos --team-id KSTWHH4JHP --apple-id 794522934 --bundle-id "com.pcloud.pcloud.macos" --bundle-version "4.5.0" --bundle-short-version-string "4.5.0" -u "$USERNAME" -p "$PASSWORD"














