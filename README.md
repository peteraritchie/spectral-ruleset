# spectral-ruleset

A Spectral ruleset

- Pattern should not be default example  (^example pattern)
- MUST not use null for boolean properties
- MUST only require properties that exist

TODO:
- MUST use proper keyword casing (`true` not `True`, etc.)
- MUST avoid composition (allOf, oneOf, etc.) at top-level schema
- MUST avoid inline enums

MUST use HTTP methods correctly:
- MUST consider HTTP and IETF standards before alternatives #par
- MUST use URL-friendly resource identifiers: [a-zA-Z0-9:._-/]*
- MUST fulfill common method properties
- MUST not use PUT for update #par
- MUST include Location header in 201 Created response #par
- MUST specify success and error responses
- MUST use standard HTTP status codes
- MUST use most specific HTTP status codes
- SHOULD consider to design POST and PATCH idempotent
- MUST use common hypertext controls
- MUST document cachable GET, HEAD, and POST endpoints
- MAY consider to support Idempotency-Key header
- SHOULD use secondary key for idempotent POST design
- MAY consider to support ETag together with If-Match/If-None-Match  header
- MUST use code 207 for batch or bulk requests
- MUST use code 429 with headers for rate limits
- MUST define collection format of header and query parameters
- MUST use REST maturity level 2
- MAY use REST maturity level 3 - HATEOAS

- Avoid multipleOf #par
- Prefer pattern over mulitpleOf #par
- Pattern should match type (aka no ^example pattern) #par
- MUST secure endpoints with OAuth 2.0
- MUST reference general and domain-specific types #par
- MUST follow naming convention for resource names #par
- MUST follow naming convention for property names #par
- MUST define and assign permissions (scopes)
- MUST follow naming convention for permissions (scopes)
- SHOULD pluralize array names #English
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
- MUST not expose icrementing keys as resource identifiers #par
- MUST use same semantics for null and absent properties
- SHOULD not use null for empty arrays
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


https://github.com/baloise-incubator/spectral-ruleset

...

https://github.com/Nexmo/api-specification/blob/7e16f17b2678e5477bef7f0bc2d084d75db87e91/.spectral.yml

...

https://github.com/stoplightio/spectral/discussions/1398

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
