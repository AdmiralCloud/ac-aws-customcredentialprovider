const { fromInstanceMetadata, fromProcess } = require("@aws-sdk/credential-providers")

const customCredentialProvider = ({ localDevelopment, debug, performance }) => {
  const start = new Date().getTime()
  return async () => {
    let credentials = null

    if (!localDevelopment) {
      try {
        // Try getting credentials from the instance metadata service
        if (debug) console.log('CredentialProvider | fromInstanceMetadata')
        credentials = await fromInstanceMetadata()();
      } 
      catch (e) {
        if (debug) console.log('CredentialProvider | fromInstanceMetadata | %s', e?.message)
      }
      if (performance) console.log('CredentialProvider | fromInstanceMetadata | Took %sms', new Date().getTime() - start)
    }

    if (!credentials) {
      try {
        // Try getting credentials from the process using the default provider chain
        if (debug) console.log('CredentialProvider | fromProcess')
        credentials = await fromProcess()();
      } 
      catch (e) {
        if (debug) console.log('CredentialProvider | fromProcess | %s', e?.message)
      }
      if (performance) console.log('CredentialProvider | fromProcess | Took %sms', new Date().getTime() - start)
    }

    return credentials;
  }
}

module.exports = customCredentialProvider