/* istanbul ignore file */
module.exports = {
  process() {
    return 'module.exports = {};'
  },
  getCacheKey() {
    return 'cssTransform'
  },
}
