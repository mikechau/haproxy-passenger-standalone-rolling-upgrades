# Ansible Custom Filter Plugins

## joins.py

This is a filter plugin for handling a list of hashes.

`joins_by_key`:

```yaml

some_list_with_keys:
  - id: id1
    name: user1

  - id: id2
    name: iser2
```

You want a string of `id`, that looks like: `id1,id2`.

```
"{{ some_list_with_keys | joins_by_key('id') }}"

=> "id1,id2"
```

## LICENSE
MIT
