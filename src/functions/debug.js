module.exports = (target, options, context) => {
    return [{ message: `'${JSON.stringify(target)}|${JSON.stringify(options)}|${JSON.stringify(context)}|'` }]
    const keys = Object.keys(target);
    if (!keys.some(e => validSuccessDeletedResponses.includes(e)))
        return [{ message: `${JSON.stringify(keys)} does not contain one of ${JSON.stringify(validSuccessDeletedResponses)}` }];
    return;
    return [{ message: `target: '${JSON.stringify(target)}'` }]
}