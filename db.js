const users = [
	{
		id: '1',
		name: 'Ben',
		email: 'ben@example.com',
		age: 27
	},
	{
		id: '2',
		name: 'Sarah',
		email: 'sarah@example.com'
	},
	{
		id: '3',
		name: 'Mike',
		email: 'mike@example.com'
	}
];

const posts = [
	{
		id: '10',
		title: 'GraphQL 101',
		body: 'This is how to use GraphQL...',
		published: true,
		author: '1'
	},
	{
		id: '11',
		title: 'GraphQL 201',
		body: 'This is an advanced GraphQL post...',
		published: false,
		author: '1'
	},
	{
		id: '12',
		title: 'Programming Music',
		body: '',
		published: true,
		author: '2'
	}
];

const comments = [
	{
		id: '102',
		text: 'This worked well for me. Thanks',
		author: '3',
		post: '10'
	},
	{
		id: '103',
		text: 'Glad you enjoed it',
		author: '1',
		post: '10'
	},
	{
		id: '104',
		text: 'Did not work',
		author: '2',
		post: '11'
	},
	{
		id: '105',
		text: 'Nevermind I figured it out.',
		author: '2',
		post: '11'
	}
];

const db = {
  users,
  posts,
  comments
}

export default db;