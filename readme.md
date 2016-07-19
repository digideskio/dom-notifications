# dom-notifications

```js
var notifications = require('notifications')()

document.body.appendChild(notifications.element())

notifications.add({message: 'You are now logged in'}) // defaults to `info`
notifications.add({message: 'This is a warning', type: 'warning'})
notifications.error('Oh noes: File not found')
```

```
var domNotifications = require('dom-notifications')
var notifications = domNotifications(options)
```


## options
```
{
  repo: null, // Can be set to a GitHub url: 'http://github.com/finnp/notifications'
  icons: {
    error: 'octicon octicon-flame',
    warning: 'octicon octicon-alert',
    info: 'octicon octicon-info',
    success: 'octicon octicon-check',
    close: 'octicon octicon-x'

}
```

Setting the `options.repo` to a GitHub repository will add an `Create an issue for this error`
button to the error notifications.


## `notifications.element()`

Creates the root element for the component. Call this ones to append it to
the DOM.

## `notifications.add(notification)`

Add and show a notification. `notification` should be an object with a `message`
property and optionally one of the types `'error', 'warning', 'info', 'success'`
(defaults to `'info'`).

If `notification` is a string it will use this as a message and default to 'info'.

## `notifications.info(message)`
Shortcut for `.add({type: 'info', message: message})`

## `notifications.error(message)`
Shortcut for `.add({type: 'error', message: message})`

## `notifications.warning(message)`
Shortcut for `.add({type: 'warning', message: message})`

## `notifications.success(message)`
Shortcut for `.add({type: 'success', message: message})`


The styles for the notifications were adapted from [ember-cli-notifications](https://github.com/stonecircle/ember-cli-notifications)
and [atom](https://github.com/atom/notifications).