def joins_by_key(items, key):
  values = []
  for item in items:
    values.append(item[key])

  return ','.join(values)

class FilterModule(object):
  ''' utility filters for operating on list of hashes '''

  def filters(self):
    return {
      'joins_by_key': joins_by_key
    }

