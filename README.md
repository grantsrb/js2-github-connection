# _Github Connection_

### _Epicodus: Javascript Week 1_

#### By _[**Satchel Grant**](https://github.com/grantsrb)_

## Description

This webpage allows users to retrieve information on github users' repositories.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Link to github api | username | user data |
| Display name of user | username | formatted name in github account |
| Display user repositories | username | repository names |
| Display user repositories | username | repository descriptions |
| Display user repositories | username | repository dates created |
| Notification if user does not exist | invalid username | notification to webpage display |
| Allow page users to make requests without apiKey | username | userdata |

## Setup/Installation Requirements

* Clone this repository
* In terminal:
  * Navigate to cloned file
  * Enter the command: touch .env
    * Optionally export an apiKey through the .env file
      * Generate an apiKey from github.com
      * On the first line of the .env file, add this line of code: exports.apiKey = "your_api_key";
      * Replace your_api_key with your github apiKey
  * Enter the command: sh gulpInitialize.sh
  * Press enter when terminal prompts you for input
  * When the gulp initialization if finished enter the terminal command: gulp serve

## Support and contact details

Satchel Grant: _grantsrb@gmail.com_

## Technologies Used

_Javascript,
Node.js,
Gulp,
Bower,
Sass_

### License

This webpage is licensed under the GPL license.

Copyright &copy; 2016 **_Satchel Grant_**
