let Types = keystone.Field.Types;
var Advertisement = new keystone.List('Advertisement', {
	track: true
});

Advertisement.add({
	name: { type: String, require: true },
	description: { type: String, require: true },
	state: { type: Types.Select, options: 'draft, published', default: 'draft' },
	duration: { type: Number, require: true },
	producer: { type: String, require: true },
	url: { type: String, require: true }
})
Advertisement.defaultColumns = 'name, state, duration, producer'
Advertisement.register();