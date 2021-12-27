# spectral-ruleset

A Spectral ruleset

- MUST not use default example (^example pattern) in `pattern`
- MUST not use `null` for boolean properties
- MUST only require properties that exist
- MUST include `Location` header in `201` Created response #par
- MUST use standard HTTP status codes
  - should-use-well-understood-http-status-codes
- MUST use URL-friendly resource identifiers: [a-zA-Z0-9:._-/]*
  - pri-resource-names-should-url-friendly-oas2002:
- SHOULD avoid `multipleOf` #par
- SHOULD prefer pattern over mulitpleOf #par
  - pri-should-avoid-multiple-of-oas0002
TODO:

- MUST use proper keyword casing (`true` not `True`, etc.)
- SHOULD not use `null` for empty arrays
- MUST explicitly name composed concepts
  - MUST avoid composition (allOf, oneOf, etc.) at top-level schema
  - MUST avoid inline enums
- MUST use same semantics for null and absent properties
- MUST use correctly structured Urls (info.contact.url, info.license.url, etc.)

MUST use HTTP methods correctly:

- MUST consider HTTP and IETF standards before alternatives #par
  - MUST fulfill common method properties
  - MUST not use PUT for update #par
  - MUST use most specific HTTP status codes
  - SHOULD consider to design POST and PATCH idempotent
  - MAY consider to support ETag together with If-Match/If-None-Match header
  - MUST use code 207 for batch or bulk requests
  - MUST use code 429 with headers for rate limits
- MUST specify success and error responses
- MUST use common hypertext controls
- MUST document cachable GET, HEAD, and POST endpoints
- MAY consider to support Idempotency-Key header
- SHOULD use secondary key for idempotent POST design
- MUST define collection format of header and query parameters
- MUST use REST maturity level 2
- MAY use REST maturity level 3 - HATEOAS

- MUST secure endpoints with OAuth 2.0
- MUST reference general and domain-specific types #par
- MUST follow naming convention for resource names #par
- MUST follow naming convention for property names #par
- MUST define and assign permissions (scopes)
- MUST follow naming convention for permissions (scopes)
- [SHOULD pluralize array names](https://github.com/baloise-incubator/spectral-ruleset#currently-supported-rules-from-the-zalando-restful-api-guidelines) #English
- MUST pluralize resource names #English
- MUST stick to conventional query parameters
- SHOULD represent enumerations as strings
- MUST treat Open API specification as NOT open for extension by default #par
- SHOULD limit number of sub-resource levels
- MUST use standard date and time formats
- SHOULD define dates properties compliant with RFC 3339
- SHOULD define time durations and intervals properties conform to ISO 8601
- MUST use standard data formats
- SHOULD use standardized property formats
- MUST use common field names and semantics
- SHOULD encode embedded binary data in base64url
- MUST not expose incrementing keys as resource identifiers #par
- MUST support pagination
- SHOULD use pagination links where applicable
- SHOULD prefer cursor-based pagination, avoid offset-based pagination
- MUST support problem JSON
- MUST document implicit filtering
- SHOULD support partial responses via filtering
- SHOULD use simple hypertext controls for pagination and self-references
- SHOULD design APIs conservatively
- MUST use media type versioning
- MUST use semantic versioning
- SHOULD not use /api as base path
- MUST use normalized paths without empty path segments and trailing slashes
- MUST avoid actions — think about resources #English
- MUST keep URLs verb-free #English
- MUST identify resources and sub-resources via path segments
- SHOULD reduce bandwidth needs and improve responsiveness
- SHOULD add Deprecation and Sunset header to responses
- MUST treat events as part of the service interface
- MUST ensure event schema conforms to Open API schema object


[https://github.com/baloise-incubator/spectral-ruleset](https://github.com/baloise-incubator/spectral-ruleset)

...

[https://github.com/Nexmo/api-specification/blob/7e16f17b2678e5477bef7f0bc2d084d75db87e91/.spectral.yml](https://github.com/Nexmo/api-specification/blob/7e16f17b2678e5477bef7f0bc2d084d75db87e91/.spectral.yml)

...

[https://github.com/stoplightio/spectral/discussions/1398](https://github.com/stoplightio/spectral/discussions/1398)

...

...

...

...

...

```yaml
  # pri-pattern-should-not-be-example-schema:
  #   description: 'pattern should not be `^example-[0-9a-z+]$`'
  #   severity: error
  #   recommended: true
  #   type: 'style'
  #   given:
  #     $.components..schemas[?(@.pattern && @.pattern=='^example-[0-9a-z]+$')]
  #   then:
  #     function: falsy

  # pri-pattern-should-not-be-example:
  #   description: 'pattern should not be `^example-[0-9a-z+]$`'
  #   severity: error
  #   recommended: true
  #   type: 'style'
  #   given:
  #     $..properties[?(@.pattern=='^example-[0-9a-z]+$')]
  #   then:
  #     function: falsy
```

...

https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/responseheader/response-header-string-pattern

## References

[Spectral Custom Functions](https://github.com/stoplightio/spectral/blob/develop/docs/guides/5-custom-functions.md)

## [openapisecurity](https://apisecurity.io/encyclopedia/content/oasv2/oasconformance/structure/structure)

Format - Structure

- Body parameter defines a property not applicable to body parameters
- Body parameter must have the 'schema' property defined
- Circular reference is not allowed
- External references at the path item level are not supported
- File parameter has no 'in: formData' property defined
- Header is an array, the 'items' property must be defined
- Header is not an array, the 'items' property must not be defined
- Mandatory property is missing
- Mandatory tag category not applied to the API
- Non-body parameter must not define the 'schema' property
- OAuth2 security scheme defines a property not applicable to the defined OAuth2 flow
- OAuth2 security scheme does not define a property that the defined OAuth2 flow requires
- Parameter cannot be a JSON reference that points outside '#/parameters'
- Parameter is an array, the 'items' property must be defined
- Parameter is not an array, the 'items' property must not be defined
- Path parameter must have the property 'required' set to 'true'
- Paths in your API definition are not exposed
- Property defining a maximum is not greater than the corresponding property defining the minimum
- Property must be unique throughout the OpenAPI definition
- Property must have a positive integer value
- Property must have an integer value
- Property value has different type than what the OpenAPI Specification requires for this property
- Property value is not an enum that the OpenAPI Specification allows for this property
- Required dependent property of an existing property is missing
- Response cannot be a JSON reference that points outside '#/responses'
- Responses object must contain at least one HTTP response code or a default response
- Schema cannot be a JSON reference that points outside '#/definitions'
- Schema is an array, the 'items' property must be defined
- Schema is not an array, the 'items' property must not be defined
- Security field of the operation references a security scheme not defined in '#/securityDefinitions'
- Security field references a security scheme not defined in '#/securityDefinitions'
- Security scheme defines a property not applicable to it
- Security scheme does not define a required property
- Target of the JSON reference of the parameter does not exist
- Target of the JSON reference of the response does not exist in the API
- Target of the JSON reference of the schema does not exist
- Value 'multi' for the property 'collectionFormat' is only allowed for query parameters
- Value of the numeric property is too big for the type of the property

Format - Semantics

- 'BasePath' property does not match the pattern constraining 'basePath' values
- 'Host' property does not match the pattern constraining host values
- 'OperationId' is not unique throughout the OpenAPI definition
- 'Url' or 'email' property does not match the pattern constraining url or email values
- Default value for the array item is not consistent with the item's type
- Default value for the header is not consistent with the header's type
- Default value for the parameter is not consistent with the parameter's type
- Default value for the schema property is not consistent with the property's type
- Enum value for the header is not consistent with the header's type
- Enum value for the items of an array is not consistent with the items type
- Enum value for the parameter is not consistent with the parameter's type
- Enum value for the schema is not consistent with the schema's type
- Example is not consistent with 'mediaType' defined in the operation's 'produces' property
- File parameter is used in an operation where the 'consumes' property does not allow it
- Header parameters have the same name
- HTTP status codes in responses must be between 100 and 599
- Operation defines both a body parameter and a 'formData' parameter
- Operation defines multiple body parameters
- Parameters have the same name + in combination
- Path parameter in the path has no corresponding path template
- Path template for the path is empty
- Path template has no corresponding path parameter definition
- Paths are equivalent
- Pattern conflicts with allowed string length
- Pattern is not a valid PCRE regular expression
- Property 'allowEmptyValue' is only allowed for query parameters
- Property is not defined in the OpenAPI Specification
- Required property is missing
- Schema discriminator property must be a string
- Schema discriminator property must match a property with the same name
- Schema does not define a required property
- Schema property is not unique throughout 'properties', 'allOf', and 'additionalProperties' fields
- Security requirement is not an OAuth2 requirement and must not define OAuth2 scopes
- Value of the schema discriminator must be a required property

Format - Best Practices

- 'External Documentation' URL of the operation is not a proper URL
- 'External Documentation' URL of the schema is not a proper URL
- 'External Documentation' URL of the tag is not a proper URL
- At least one host should be defined
- Contact object email is not a proper email address
- Contact object URL is not a proper URL
- Default value unnecessarily declared for a required parameter type
- External Documentation object URL is not a proper URL
- Header format is not applicable to the header's type
- Header parameter with the name 'Accept' is ignored
- Header parameter with the name 'Authorization' is ignored
- Header parameter with the name 'Content-Type' is ignored
- Header property is not applicable to the header's type
- Header with the name 'Content-Type' is ignored
- If operation has only one HTTP response defined, the HTTP status code should be for a success
- Item format is not applicable to the type the array items
- License object URL is not a proper URL
- MIME type has an improper value
- No properties allowed alongside a JSON reference
- Operation summary should be less than 120 characters
- Parameter format is not applicable to the parameter's type
- Parameter property is not applicable to the parameter's type
- Path has no operation defined
- Prefix is not a known prefix
- Property constraining header values is defined even though the header's values are defined in an enum
- Property constraining parameter values is defined even though the parameter's values are defined in an enum
- Property constraining the item values is defined even though the item's values are defined in an enum
- Property defined for an array item is not applicable to the array item type
- Reusable parameter definition is not used in the OpenAPI definition
- Reusable response definition is not used in the OpenAPI definition
- Reusable schema definition is not used in the OpenAPI definition
- Reusable security scheme definition is not used in the OpenAPI definition
- Schema defines 'additionalProperties' as a boolean value
- Schema format is not applicable to the schema's type
- Schema keyword is not applicable to the defined data type
- Schema keyword used alongside enum
- Schemes should be defined
- Value of a schema example is not consistent with the schema
- Value of the 'x-42c-sample' extension is not consistent with the header
- Value of the 'x-42c-sample' extension is not consistent with the items
- Value of the 'x-42c-sample' extension is not consistent with the parameter
- Value of the 'x-42c-sample' extension is not consistent with the schema

[Data Validation](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/datavalidation) - [Parameters](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/parameters/parameters)

[Data Validation](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/datavalidation) - [Paths](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/paths/paths)

[Data Validation](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/datavalidation) - [Schema](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/schema/schema)

[Data Validation](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/datavalidation) - [Response Headers](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/responseheader/responseheader)

- String header has no pattern defined (response-header-string-pattern)
  - pri-string-headers-must-have-pattern-defined-oas2004

[Data Validation](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/datavalidation) - [Response Definition](https://apisecurity.io/encyclopedia/content/oasv2/datavalidation/responsedefinition/responsedefinition)

[Security](https://apisecurity.io/encyclopedia/content/oasv2/security/security) - [Authentication](https://apisecurity.io/encyclopedia/content/oasv2/security/authentication/authentication)

[Security](https://apisecurity.io/encyclopedia/content/oasv2/security/security) - [Authorization](https://apisecurity.io/encyclopedia/content/oasv2/security/authorization/authorization)

[Security](https://apisecurity.io/encyclopedia/content/oasv2/security/security) - [Transport](https://apisecurity.io/encyclopedia/content/oasv2/security/transport/transport)
