db.users.drop();
db.links.drop();

db.users.insert({ 
    name : { first: "John", last: "Doe" },
    age: 30,
    email: 'johndoe@gmail.com',
    passwordHash: 'some_password_hash'
});
db.users.insert({
    name: { first: "Jane", last: "Wilson" },
    age: 25,
    email: 'janewilson@gmail.com',
    passwordHash: 'another_password_hash'
});
db.users.insert({
    name: { first: "Bob", last: "Smith" },
    age: 31,
    email: 'bob.smith@gmail.com',
    passwordHash: 'last_password_hash'
});

var u1 = db.users.findOne({ 'name.first': 'John' }),
    u2 = db.users.findOne({ 'name.first': 'Jane' }),
    u3 = db.users.findOne({ 'name.first': 'Bob' });

db.links.insert({
    title: 'Nettuts+',
    url: 'http://net.tutsplus.com',
    comment: 'Great site for web dev tutorials',
    tags: ['tutorials', 'dev', 'code'],
    favourites: 100,
    userId: u1._id
});
db.links.insert({
    title: 'Psdtuts+',
    url: 'http://psd.tutsplus.com',
    comment: 'Photoshop tutorials like none other',
    tags: ['photoshop', 'tutorials'],
    favourites: 507,
    userId: u2._id
});
db.links.insert({
    title: 'Tuts+ Premium', 
    url: 'http://tutsplus.com',
    comment: 'The best screencast courses ever.',
    tags: ['screencasts', 'tutorials'],
    favourites: 149,
    userId: u1._id
});
db.links.insert({
    title: 'Envato',
    url: 'http://envato.com',
    comment: 'Greatest company in Australia',
    tags: ['business', 'australia'],
    favourites: 279,
    userId: u2._id
});
db.links.insert({
    title: 'MongoDB.org',
    url: 'http://mongodb.org',
    comment: 'Really cool NoSQL database',
    tags: ['database', 'development'],
    favourites: 79,
    userId: u3._id
});
db.links.insert({
    title: 'Audible Audio Books',
    url: 'http://www.audible.com',
    comment: 'Good audio books',
    tags: ['books', 'audio'],
    favourites: 100,
    userId: u2._id
});
db.links.insert({ 
    title: 'Wikipedia',
    url: 'http://wikipedia.org',
    comment: 'The source of all knowledge',
    tags: ['information', 'encyclopaedia', 'online', 'wikis'],
    favourites: 187,
    userId: u3._id
});
db.links.insert({
    title: 'Mobiletuts+',
    url: 'http://mobile.tutsplus.com',
    comment: 'Great tutorials for developing on mobile devices',
    tags: ['mobile', 'development'],
    favourites: 84,
    userId: u2._id
});
db.links.insert({
    title: 'Amazon.com',
    url: 'http://www.amazon.com',
    comment: 'Where to buy things',
    tags: ['selling', 'buying'],
    favourites: 329,
    userId: u1._id
});
db.links.insert({
    title: 'ThemeForest',
    url: 'http://themeforest.net',
    comments: 'Where to buy the best website themes',
    tags: ['marketplace', 'themes'],
    favourites: 654,
    userId: u1._id,
});
db.links.insert({
    title: 'CodeCanyon',
    url: 'http://codecanyon.net',
    comments: 'A marketplace for code',
    tags: ['marketplace', 'code'],
    favourites: 217,
    userId: u2._id
});
db.links.insert({
    title: 'GraphicRiver',
    url: 'http://graphicriver.net',
    comments: 'A marketplace for graphics',
    tags: ['marketplace', 'graphics'],
    favourites: 543,
    userId: u3._id
});
