# AC AWS Custom Credential Provider
By default, AWS checks a lot of different providers in a order given by AWS. This could b slow (up to 10 seconds) as every credential provider has a timeout of 1s.

This module only uses 2 credential providers:
+ fromInstanceMetadata
+ fromProcess

On local machines you can disbale fromInstanceMetadata completely, speeding up process even more.

# Usage
```
yarn add ac-aws-customcredentialprovider

const customCredentialProvider = require("ac-aws-customcredentialprovider")


 const awsConfig = {
    region: 'eu-central-1',
    credentials: customCredentialProvider({ localDevelopment: false, debug: false })
}
const client = new SOME-AWS-CLIENT(awsConfig)
```

Set localDevelopment = true to disable fromInstanceMetadata check,

## Links
- [Website](https://www.admiralcloud.com/)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2023, AdmiralCloud AG, Mark Poepping