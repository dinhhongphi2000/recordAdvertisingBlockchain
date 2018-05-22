let Types = keystone.Field.Types;
var Logging = new keystone.List('Logging',{
  track: {
    createdAt: true, updatedAt: true, createdBy: 'system'
  }
})

Logging.add({
  userAgent: { type: String, required: true, initial : false},
  ip: { type: String, required: true, initial : false },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'published' },
  duration: { type: Number, required: true, initial : false},
  advertisementId: { type: Types.Relationship, required: true, initial : false, ref : 'Advertisement'}
})
Logging.defaultColumns = 'ip, state, time, advertisementId'
Logging.register();