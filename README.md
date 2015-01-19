# Dummy-6to5-karma-coverage

> Dummy 6to5 project to test karma coverage on it with isparta oleg

### Dev Dependencies

```js
{
  "isparta": "^0",
  "karma": "^0.12.24",
  "karma-chrome-launcher": "^0.1.5",
  // MANDATORY TO PLUG ISPARTA
  "karma-coverage": "douglasduteil/karma-coverage#next",
  "karma-jasmine": "^0.1.5",
  "karma-jspm": "^1.0.1"
}
```

### Initial setup

```bash
npm install -g karma-cli jspm
npm install
jspm install
```

### Running the tests

```sh
# Normal testing
npm test
# Testing with coverage :)
npm run coverage
```
