module.exports = (target, options, context) => {
    if (target.headers) {
        if (Object.keys(target.headers).includes('Location'))
            return;
    }

    return [{ message: `'${JSON.stringify(target)}'` }]
    const keys = Object.keys(target);
    if (!keys.some(e => validSuccessDeletedResponses.includes(e)))
        return [{ message: `${JSON.stringify(keys)} does not contain one of ${JSON.stringify(validSuccessDeletedResponses)}` }];
    return;
    return [{ message: `target: '${JSON.stringify(target)}'` }]
}