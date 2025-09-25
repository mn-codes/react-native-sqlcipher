# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-XX

### Added - 16KB Page Size Support for Android 15+
- **Android 15+ Compatibility**: Full support for 16KB page sizes required by Google Play Store starting November 2025
- **SQLCipher 4.9.0 Integration**: Updated to latest SQLCipher version with 16KB page size capabilities
- **Android Gradle Plugin 8.5.1+**: Updated build configuration for 16KB ELF alignment requirements
- **AndroidX SQLite 2.4.0**: Updated dependency versions for Android 15+ compatibility
- **16KB Page Size Parameter**: Added `pageSize: 16384` option to database configuration
- **Google Play Store Compliance**: Ready for upcoming 16KB page size requirements

### Improved
- **Database Persistence**: Fixed critical issue where data wasn't persisting across app restarts
- **Error Handling**: Enhanced database error handling and logging
- **Build Configuration**: Updated Gradle and dependency versions for better compatibility
- **Documentation**: Comprehensive documentation with 16KB setup instructions

### Changed
- **Package Name**: Changed from `react-native-sqlcipher` to `react-native-sqlcipher-16kb` for clarity
- **Minimum React Native Version**: Updated to 0.60.0+ for auto-linking support
- **Android Target SDK**: Updated to API Level 34 (Android 14+)
- **Gradle Version**: Updated to Gradle 8.5+ for 16KB support

### Fixed
- **Database Reopening**: Fixed "file is not a database" errors when reopening databases with custom page sizes
- **Native Library Loading**: Improved SQLCipher native library loading for better reliability
- **Build Compatibility**: Resolved build issues with newer Android Gradle Plugin versions

### Technical Details
- **SQLCipher Version**: 4.9.0 (from 4.5.2)
- **Android Gradle Plugin**: 8.5.1+ (from 3.1.4)  
- **AndroidX SQLite**: 2.4.0 (updated dependency)
- **Gradle Wrapper**: 8.5+ (from 5.6.4)
- **Target SDK**: 34 (Android 14+)

### Based On
This package is forked from [linchCN/react-native-sqlcipher](https://github.com/linchCN/react-native-sqlcipher) v0.0.7 with extensive modifications for Android 15+ 16KB page size support.

### Migration Guide
If migrating from the original `react-native-sqlcipher`:

1. Update package name in your imports
2. Add `pageSize: 16384` to your database configuration
3. Update Android Gradle Plugin to 8.5.1+
4. Update target SDK to 34
5. Update Gradle wrapper to 8.5+

For detailed migration instructions, see the README.md file.