module.exports = (target, options, context) => {
    if (target.headers) {
        if (Object.keys(target.headers).includes('Location'))
            return;
    }

    return [{ message: 'Location header not found' }]
}