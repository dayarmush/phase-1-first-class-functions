func = a => a * 2
function receivesAFunction(func) {
    return func();
};

returnsANamedFunction = function() {
    return namedFunc = () => console.log('Hello')
};

function returnsAnAnonymousFunction() {
    return () => 'HI'
}