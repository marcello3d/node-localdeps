var fs = require('fs')
var path = require('path')
var child_process = require('child_process')

var packageJsonPath = 'package.json'
var packageJson = JSON.parse(fs.readFileSync(packageJsonPath))

var localDeps = packageJson.localDependencies
if (localDeps && Object.keys(localDeps).length) {
    if (!fs.existsSync('node_modules')) {
        fs.mkdirSync('node_modules')
    }
    Object.keys(localDeps).forEach(function(packageName) {
        var packagePath = localDeps[packageName]
        var dest = path.join('node_modules',packageName)
        var src = path.join('..', packagePath)
        if (!fs.existsSync(dest)) {
            console.log("Linking " + dest + " -> " + src)
            fs.symlinkSync(src, dest, 'dir')
        }
        console.log("npm install on " + dest)
        child_process.spawn('npm', ['install'], { stdio:'inherit', cwd:path.join(process.cwd(), dest) })
    })
}