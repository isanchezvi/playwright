Getting Started
To get started with this project, clone the repository and install the necessary dependencies.

Configuration
The configuration for the sandbox environment is stored in a config.json file. This file contains the following properties:

sandbox: This object contains the base URL (urlStart) and the sandbox number (sandboxNumber). The sandbox number can be any number from 001 to 999. The full URL is constructed by prefixing the base URL with https:// and suffixing it with the sandbox number. For example, if your sandbox number is 003 and your base URL is bkfb-, the full URL will be https://bkfb-003.

urls: This object contains the relative paths for the home and clubby pages. These paths are appended to the full URL to access the respective pages.

credentials: This object contains the username and password for the sandbox environment.

Here's an example of a config.json file:

{
    "sandbox": {
        "urlStart": "https://bkfb-",
        "sandboxNumber": "003"
    },
    "urls": {
      "home": ".dx.commercecloud.salesforce.com/s/sss/home",
      "clubby": ".dx.commercecloud.salesforce.com/s/sss/login.html"
    },
    "credentials": {
      "username": "user",
      "password": "pass"
    }
}
