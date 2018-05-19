let Types = keystone.Field.Types;
var Film = new keystone.List('Film', {
	track: true
})

Film.add({
	name: { type: String, require: true },
	state: { type: Types.Select, options: 'draft, published', default: 'draft' },
	description: { type: String, require: true },
	poster: { type: String, require: true },
	url: { type: String, require: true }
})

Film.register();