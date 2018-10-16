async function execute() {
  const val = Math.random() * 1000;
  await new Promise(resolve => setTimeout(resolve, val));
  return val;
}

module.exports = { execute };
