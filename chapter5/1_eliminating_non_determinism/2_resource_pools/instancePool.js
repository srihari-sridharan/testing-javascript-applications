const { init } = require("./countModule");

const instancePool = {};

const getInstance = workerId => {
  if (!instancePool[workerId]) {
    instancePool[workerId] = init(`test_state_${workerId}.txt`);
  }

  return instancePool[workerId];
};

module.exports = { getInstance };
