Localdeps
=========

Symbolic links local dependencies to your project

Usage / Examples
----------------

To use, add 3 things to your package.json:
1. add a `localDependencies` section (e.g. `"localDependencies":{ "foo":"../shared/foo/" }`)
2. add `"scripts": { "preinstall":"localdeps" }`
3. add `"localdeps":"0.1.x"` to your `dependencies` section

Example:
```js
{
    "name": "foo",
    "version": "0.1.0",
    ...
    "scripts":{
        "preinstall":"localdeps"
    },
    "dependencies":{
        "localdeps":"0.1.0",
        "bar":"0.2.0"
    },

    "localDependencies": {
        "bar":"../bar"
    }
    ...
}

License
-------
Open source software under the [zlib license](LICENSE).