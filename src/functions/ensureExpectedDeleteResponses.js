module.exports = (target, options, context) => {
    const keys = Object.keys(target);
    const validSuccessDeletedResponses = ["200", "201", "202", "204"]
    if (!keys.some(e => validSuccessDeletedResponses.includes(e)))
        return [{ message: `${JSON.stringify(keys)} does not contain one of ${JSON.stringify(validSuccessDeletedResponses)}` }];
    return;
}