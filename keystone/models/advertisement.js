let Types = keystone.Field.Types;
var Advertisement = new keystone.List('Advertisement', {
	track: true
});

Advertisement.add({
	name: { type: String, required: true, initial: true },
	description: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published', default: 'draft' },
	duration: { type: Number, required: true, initial: true },
	producer: { type: String, required: true, initial: true },
	url: { type: String, required: true, initial: true }
})

Advertisement.defaultColumns = 'name, state, duration, producer'
Advertisement.register();