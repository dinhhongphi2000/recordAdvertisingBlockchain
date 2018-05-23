let Types = keystone.Field.Types;
var Film = new keystone.List('Film', {
	track: true
})

Film.add({
	name: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published', default: 'draft' },
	description: { type: String, required: true, initial: true },
	poster: { type: String, required: true, initial: true },
	url: { type: String, required: true, initial: true }
})
Film.defaultColumns = 'name, state, description'
Film.register();