//function wrapper () -> returns an object {}
//function(exports, module, require, __filename, __dirname) {
console.log(arguments);
exports.a = 42
module.exports.b = 43

//returns module.exports
//} (module.exports, )

/*
[Arguments] {
  '0': {},
  '1':
   { [Function: require]
     resolve: { [Function: resolve] paths: [Function: paths] },
     main:
      Module {
        id: '.',

        exports: {},
        parent: null,
        filename:
         '/Volumes/pulse/100/Pluralsight/nodejs-getting-started/node/[5]-Modules and Concurrency/mods/2_arguments.js',
        loaded: false,
        children: [],
        paths: [Array] },
     extensions:
      [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
     cache:
      [Object: null prototype] {
        '/Volumes/pulse/100/Pluralsight/nodejs-getting-started/node/[5]-Modules and Concurrency/mods/2_arguments.js': [Module] } },
  .....
*/
