# Replay Info API Wrapper
Official Replay Info API JS Wrapper

## Introduction
This is a wrapper for the official [Replay Info API](https://fortnite-replay.info/) which allows you to get information about fortnite replays and their stats.

## Installation
```bash
npm install fortnite-replay-info
```

## Usage
```javascript
const replayInfo = require('fortnite-replay-info');
const client = new replayInfo.Client("Your API Key (PUT RANDOM STRING, not used yet)");
client.getLifetimeCosmetics().then(console.log);
```

## API
The api routes can be found on [our Discord Server](https://discord.gg/MnvPjqYB5Z).

## License
This project is licensed under the MIT license.

## Contributing
This project is open source and is hosted on [GitHub](https://github.com/Fortnite-Replay-Info/jswrapper) 

You can contact us on Discord if you want to work on features or push a pull request.

## Credits
The project is lead by Xnocken and is also developped by Artlfmj and pxladin

## Changelog
Version 1.2.0
- Changed Cosmetic methods to 3 methods
- Added new methods for getting the lifetime cosmetics
- Added typings
- Added Safezones

Version 1.1.0
- Added support for Player Endpoints

Version 1.0.0
- Initial release

## Bugs
If you find any bugs, please report them on [our Discord Server](https://discord.gg/MnvPjqYB5Z).