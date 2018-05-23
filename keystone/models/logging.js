let Types = keystone.Field.Types;
var Logging = new keystone.List('Logging',{
  track: {
    createdAt: true, updatedAt: true, createdBy: 'system'
  }
})

Logging.add({
  userAgent: { type: String, required: true, initial : true},
  ip: { type: String, required: true, initial : true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'published' },
  duration: { type: Number, required: true, initial : true},
  time: { type: Date, default: Date.now, required: true, initial : true },
  advertisementId: { type: Types.Relationship, required: true, initial : true, ref : 'Advertisement'}
})
Logging.defaultColumns = 'ip, state, time, advertisementId'
Logging.register();