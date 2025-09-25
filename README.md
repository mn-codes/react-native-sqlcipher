# react-native-sqlcipher-16kb

🍴 **Forked from [linchCN/react-native-sqlcipher](https://github.com/linchCN/react-native-sqlcipher)**

SQLCipher plugin for React Native with **Android 15+ 16KB page size support** for Google Play Store compliance.

[![npm version](https://badge.fury.io/js/react-native-sqlcipher-16kb.svg)](https://badge.fury.io/js/react-native-sqlcipher-16kb)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Fork Status](https://img.shields.io/badge/Fork-Active-brightgreen.svg)](https://github.com/linchCN/react-native-sqlcipher)

## 🚀 **What Makes This Fork Special**

This is an enhanced version of the original react-native-sqlcipher with critical updates for **Android 15+ compatibility**:

- 🎯 **16KB Page Size Support** - Ready for Google Play Store requirements starting November 2025
- 🔧 **SQLCipher 4.9.0** - Latest version with 16KB capabilities  
- ⚙️ **Android Gradle Plugin 8.5.1+** - Required for 16KB ELF alignment
- 📱 **AndroidX SQLite 2.4.0** - Updated dependencies for Android 15+
- 🔒 **Enhanced Stability** - Fixed database persistence issues across app restarts
- 🛡️ **Production Ready** - Extensively tested and battle-hardened

## 📋 **Google Play Store 16KB Requirement**

> **Starting November 1st, 2025**, Google Play Store requires all apps targeting Android 15+ to support 16KB page sizes. This fork ensures your SQLCipher databases are compliant.

**Why This Matters:**
- Apps failing 16KB compatibility will be rejected from Google Play Store
- Affects all apps targeting Android 15+ (API level 35+)
- Required for new app submissions and updates
- Critical for maintaining Play Store distribution

## 🛠 **Installation**

### **NPM Installation (Recommended)**
```bash
npm install react-native-sqlcipher-16kb --save
```

### **Direct GitHub Installation**
```bash
# Install from this fork
npm install git+https://github.com/mn-codes/react-native-sqlcipher.git

# Install specific version
npm install git+https://github.com/mn-codes/react-native-sqlcipher.git#v1.0.0
```

### **Auto-linking (React Native 0.60+)**
For iOS:
```bash
cd ios && pod install
```

For Android: Auto-linking handles it automatically!

## 📱 **Platform Requirements**

| Platform | Requirement |
|----------|-------------|
| **React Native** | >= 0.60.0 |
| **Android** | API Level 21+ (Android 5.0+) |
| **iOS** | iOS 10.0+ |
| **Android Gradle Plugin** | >= 8.5.1 (for 16KB support) |
| **Node.js** | >= 12.0.0 |

## 🔧 **Android 15+ Configuration**

### **1. Update Project Build Files**

**android/build.gradle:**
```gradle
buildscript {
    dependencies {
        classpath 'com.android.tools.build:gradle:8.5.1' // Required for 16KB
    }
}
```

**android/app/build.gradle:**
```gradle
android {
    compileSdkVersion 34 // Android 14+ required
    
    defaultConfig {
        minSdkVersion 21
        targetSdkVersion 34
    }
    
    // Enable 16KB page size support
    packagingOptions {
        jniLibs {
            useLegacyPackaging = false
        }
    }
}

dependencies {
    implementation 'net.zetetic:sqlcipher-android:4.9.0'
    implementation 'androidx.sqlite:sqlite:2.4.0'
}
```

**gradle-wrapper.properties:**
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.5-all.zip
```

## 💻 **Usage**

### **Basic Database Setup**
```javascript
import SQLite from 'react-native-sqlcipher-16kb';

const db = SQLite.openDatabase(
  {
    name: 'MyDatabase.db',
    key: 'your-secure-encryption-key',
    location: 'default',
    pageSize: 16384, // 16KB page size for Android 15+ compliance
  },
  () => console.log('✅ Database opened successfully'),
  (error) => console.error('❌ Database error:', error)
);
```

### **Migration from Original Package**
```javascript
// Before (original package)
import SQLite from 'react-native-sqlcipher';

// After (this fork)
import SQLite from 'react-native-sqlcipher-16kb';

// Same API! Just add pageSize for 16KB support
const config = {
  name: 'database.db',
  key: 'encryption-key',
  pageSize: 16384, // NEW: 16KB page size
  location: 'default',
};
```

### **CRUD Operations (Same API)**
```javascript
// Create table
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)',
    [],
    () => console.log('Table created'),
    (error) => console.error('Error:', error)
  );
});

// Insert data
db.transaction((tx) => {
  tx.executeSql(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['John Doe', 'john@example.com'],
    () => console.log('User added'),
    (error) => console.error('Insert error:', error)
  );
});

// Query data
db.transaction((tx) => {
  tx.executeSql(
    'SELECT * FROM users',
    [],
    (tx, results) => {
      for (let i = 0; i < results.rows.length; i++) {
        console.log('User:', results.rows.item(i));
      }
    }
  );
});
```

## 🔍 **Verify 16KB Support**

Test your database configuration:
```javascript
db.transaction((tx) => {
  tx.executeSql(
    'PRAGMA cipher_page_size',
    [],
    (tx, results) => {
      if (results.rows.length > 0) {
        const pageSize = results.rows.item(0).cipher_page_size;
        console.log(`📄 Page size: ${pageSize} bytes`);
        // Should show 16384 for 16KB pages
      }
    }
  );
});
```

## 🆚 **Comparison with Original**

| Feature | Original | This Fork |
|---------|----------|-----------|
| **SQLCipher Version** | 4.5.2 | **4.9.0** ✅ |
| **16KB Page Size** | ❌ No | **✅ Yes** |
| **Android Gradle Plugin** | 3.1.4 | **8.5.1+** ✅ |
| **Android 15+ Ready** | ❌ No | **✅ Yes** |
| **Database Persistence** | Issues | **✅ Fixed** |
| **Google Play Compliance** | ❌ No | **✅ Ready** |
| **API Compatibility** | ✅ | **✅ Same** |

## 🐛 **Troubleshooting**

### **Common Build Issues**
```bash
# Clean and rebuild
cd android && ./gradlew clean
cd .. && npx react-native run-android

# Clear React Native cache
npx react-native start --reset-cache
```

### **Database Issues**
- **Data not persisting**: Ensure consistent encryption key across sessions
- **Build errors**: Update to Android Gradle Plugin 8.5.1+
- **Import errors**: Clear node_modules and reinstall

## 🔄 **Migration Guide**

### **From Original react-native-sqlcipher:**
1. Uninstall original: `npm uninstall react-native-sqlcipher`
2. Install this fork: `npm install react-native-sqlcipher-16kb`
3. Update imports in your code
4. Add `pageSize: 16384` to database configuration
5. Update Android build files (see configuration above)
6. Test thoroughly

### **Backwards Compatibility**
- ✅ Same API as original package
- ✅ Existing database files work fine
- ✅ No breaking changes to your code
- ✅ Just enhanced with 16KB support

## 📚 **Documentation**

- 📖 **API Reference**: Same as [original package](https://github.com/linchCN/react-native-sqlcipher)
- 🔧 **16KB Configuration**: See Android setup section above
- 🐛 **Issues**: [Report here](https://github.com/mn-codes/react-native-sqlcipher/issues)
- 💬 **Discussions**: [Ask questions](https://github.com/mn-codes/react-native-sqlcipher/discussions)

## 🤝 **Contributing**

Contributions are welcome! This fork maintains compatibility with the original while adding 16KB support.

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 **Credits & Attribution**

This fork builds upon excellent work by:

- **[linchCN/react-native-sqlcipher](https://github.com/linchCN/react-native-sqlcipher)** - Original React Native SQLCipher integration
- **[andpor/react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)** - Foundation SQLite package
- **[SQLCipher by Zetetic](https://www.zetetic.net/sqlcipher/)** - The underlying encryption technology

## 📄 **License**

MIT License - Same as original package. See [LICENSE](LICENSE) file for details.

## 🔮 **Roadmap**

- [x] **v1.0.0**: Android 15+ compatibility with 16KB support
- [ ] **v1.1.0**: Enhanced 16KB page size implementation
- [ ] **v1.2.0**: Performance optimizations for large databases
- [ ] **v2.0.0**: iOS 16KB support (if needed by Apple)

---

**🚀 Ready for Google Play Store compliance and Android 15+ compatibility!**

*Made with ❤️ for the React Native community*