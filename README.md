# spectral-ruleset

A Spectral ruleset

- Avoid multipleOf
- Pattern should match type (aka no ^example pattern)
- Prefer pattern over mulitpleOf
- SHOULD pluralize array names
- MUST not use null for boolean properties
- MUST use same semantics for null and absent properties
- SHOULD not use null for empty arrays
- SHOULD represent enumerations as strings
- SHOULD define dates properties compliant with RFC 3339
- SHOULD define time durations and intervals properties conform to ISO 8601

https://github.com/baloise-incubator/spectral-ruleset

...

https://github.com/Nexmo/api-specification/blob/7e16f17b2678e5477bef7f0bc2d084d75db87e91/.spectral.yml

...

https://github.com/stoplightio/spectral/discussions/1398

...

`true` not `True`, etc.

...

Avoid composition (allOf, oneOf, etc.) at top-level schema

...

Avoid online enums

...

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
