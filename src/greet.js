function greet(name) {
  name = name || 'World';
  return `Hello ${name}`;
}

// Assigning to exports will not modify module, must use module.exports
// See: https://nodejs.org/api/modules.html#modules_modules_commonjs_modules
module.exports = greet;
