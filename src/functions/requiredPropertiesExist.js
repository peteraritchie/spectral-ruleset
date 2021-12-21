module.exports = (schema, options, paths) => {
    if (!schema.required || !schema.properties) { return }
    const props = Object.keys(schema.properties);
    for (const element of schema.required) {
        if (!props.includes(element)) {
            return [{ message: `The required property '${element}' that does not exist.` }]
        }
    }
}