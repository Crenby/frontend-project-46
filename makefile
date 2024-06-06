lint:
	npx eslint .

json:
	gendiff --format 'json' __fixtures__/file3.json __fixtures__/file4.json

stylish:
	gendiff --format 'stylish' __fixtures__/file3.json __fixtures__/file4.json

plain:
	gendiff --format 'plain' __fixtures__/file3.json __fixtures__/file4.json

error:
	gendiff --format 'qwerttyu' __fixtures__/file3.json __fixtures__/file4.json