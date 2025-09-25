module.exports = {
	dependency: {
		platforms: {
			ios: {
				sourceDir: './platforms/ios',
				project: './platforms/ios/Sqlcipher.xcodeproj'
			},
			android: {
				sourceDir: './platforms/android'
			}
		}
	}
}
