(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1025:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(1084)),i={slug:"introducing-mikroorm-typescript-data-mapper-orm-with-identity-map",title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","oop"]},s={permalink:"/blog/introducing-mikroorm-typescript-data-mapper-orm-with-identity-map",source:"@site/blog/2019-04-08-introducing-mikroorm-typescript-data-mapper-orm-with-identity-map.md",description:"This might be the ORM you\u2019ve been looking for\u2026",date:"2019-04-08T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"oop",permalink:"/blog/tags/oop"}],title:"Introducing MikroORM, TypeScript data-mapper ORM with Identity Map",readingTime:9.3,truncated:!0,prevItem:{title:"Handling Transactions and Concurrency in MikroORM",permalink:"/blog/handling-transactions-and-concurrency-in-mikroorm"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Defining entities",id:"defining-entities",children:[]},{value:"Persisting entities with EntityManager",id:"persisting-entities-with-entitymanager",children:[]},{value:"Fetching entities",id:"fetching-entities",children:[]},{value:"Working with references",id:"working-with-references",children:[]},{value:"Identity Map and Unit of\xa0Work",id:"identity-map-and-unit-of-work",children:[]},{value:"Collections",id:"collections",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This might be the ORM you\u2019ve been looking for\u2026"),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"During my early days at university, I remember how quickly I fell in love with object oriented programming and the concepts of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://hibernate.org/orm/what-is-an-orm/"}),"Object-relational mapping")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/1222392/can-someone-explain-domain-driven-design-ddd-in-plain-english-please/1222488#1222488"}),"Domain Driven Design"),". Back then, I was mainly a PHP programmer (",Object(r.b)("em",{parentName:"p"},"while we did a lot of Java/Hibernate at school"),"), so a natural choice for me was to start using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.doctrine-project.org/"}),"Doctrine"),"."),Object(r.b)("p",null,"A few years ago, when I switched from PHP to Node.js (",Object(r.b)("em",{parentName:"p"},"and later to TypeScript"),"), I was really confused. How come there is nothing similar to Hibernate or Doctrine in the JavaScript world? About a year ago, I finally came across ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://typeorm.io/"}),"TypeORM"),", and when I read this line in the readme I thought I found what I was looking for:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"TypeORM is highly influenced by other ORMs, such as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://hibernate.org/orm/"}),"Hibernate"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.doctrine-project.org/"}),"Doctrine")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.asp.net/entity-framework"}),"Entity Framework"),".")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*gWvTBke0c8BFLGR8u_5zSg.jpeg",alt:null}))),Object(r.b)("p",null,"I started playing with it immediately, but I got disappointed very quickly. No Identity Map that would keep track of all loaded entities. No Unit of Work that would handle transaction isolation. No unified API for references with very strange support for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://typeorm.io/#/relations-faq/how-to-use-relation-id-without-joining-relation"}),"accessing just the identifier without populating the entity"),", MongoDB driver (",Object(r.b)("em",{parentName:"p"},"which I was aiming to use"),") was experimental and I had a lot problems setting it up. After a few days of struggle, I went away from it."),Object(r.b)("p",null,"By that time, I started to think about writing something myself. And that is how ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),Object(r.b)("strong",{parentName:"a"},"MikroORM"))," started!"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*f8phoYPnVRkwuV1wynXz_A.png",alt:null}))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),"MikroORM")," is TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.")),Object(r.b)("p",null,"Currently it supports ",Object(r.b)("strong",{parentName:"p"},"MongoDB"),", ",Object(r.b)("strong",{parentName:"p"},"MySQL, PostgreSQL")," and ",Object(r.b)("strong",{parentName:"p"},"SQLite")," databases, but more can be supported via ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/custom-driver/"}),"custom drivers right now"),". It has first class TypeScript support, while staying back compatible with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/usage-with-js/"}),"Vanilla JavaScript"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"First install the module via ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well. Next you will need to enable support for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/decorators.html"}),"decorators"),Object(r.b)("br",{parentName:"p"}),"\n","in ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via ",Object(r.b)("inlineCode",{parentName:"p"},"experimentalDecorators")," flag. Then call ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your application."),Object(r.b)("p",null,"Last step is to provide forked ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," for each request, so it will have its own unique ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/identity-map/"}),"Identity Map"),". To do so, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager.fork()")," method. Another way, that is more ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.freecodecamp.org/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f"}),"DI")," friendly, is to create new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/identity-map/#request-context"}),"request context")," for each request, which will use some ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md"}),"dark magic")," in the background to always pick the right ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager")," for you."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"# using yarn\n$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite  # for sqlite\n\n# or npm\n$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite  # for sqlite\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "module": "commonjs",\n    "target": "es2017",\n    "moduleResolution": "node",\n    "declaration": true,\n    "strict": true,\n    "strictPropertyInitialization": false,\n    "experimentalDecorators": true\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  clientUrl: '...', // defaults to 'mongodb://127.0.0.1:27017' for mongodb driver\n  type: 'mongo', // one of 'mysql', 'postgresql', 'sqlite', defaults to 'mongo'\n  autoFlush: false, // read more here: https://b4nan.github.io/mikro-orm/unit-of-work/\n});\n\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\napp.use((req, res, next) => {\n  req.em = orm.em.fork(); // save the fork to `req` object\n});\n\napp.get('/books', async (req, res) => {\n  const books = await req.em.find(Book); // use the fork via `req.em`\n});\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\n// by providing request context, creating forked EntityManager will be handled automatically\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(r.b)("h2",{id:"defining-entities"},"Defining entities"),Object(r.b)("p",null,"To ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/defining-entities/"}),"define an entity"),", simply create a class and decorate it. Here is an example of ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," entity defined for MongoDB driver:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"\nimport { ObjectID } from 'mongodb';\nimport { Collection, Entity, IEntity, ManyToMany, ManyToOne, PrimaryKey, Property } from 'mikro-orm';\nimport { Author, BookTag, Publisher } from '.';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title: string;\n\n  @ManyToOne()\n  author: Author;\n\n  @ManyToOne()\n  publisher: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n\nexport interface Book extends IEntity<string> { }\n")),Object(r.b)("p",null,"As you can see, it\u2019s pretty simple and straightforward. Entities are simple JavaScript objects (",Object(r.b)("em",{parentName:"p"},"so called POJO"),"), decorated with ",Object(r.b)("inlineCode",{parentName:"p"},"@Entity")," decorator (",Object(r.b)("em",{parentName:"p"},"for TypeScript"),"), or accompanied with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/usage-with-js/"}),"schema definition object")," (",Object(r.b)("em",{parentName:"p"},"for vanilla JavaScript"),"). No real restrictions are made, you do not have to extend any base class, you are more than welcome to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/entity-constructors/"}),"use entity constructors")," for specifying required parameters to always keep the entity in valid state. The only requirement is to define the primary key property."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*NlsF497deWAYi5FSijW9NQ.jpeg",alt:null}))),Object(r.b)("p",null,"You might be curious about the last line with ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," as an interface. This is called ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces"}),"interface merging")," and it is there to let TypeScript know the entity will have some extra API methods (like ",Object(r.b)("inlineCode",{parentName:"p"},"init()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"isInitialized()"),") available as it will be monkey-patched during discovery process. More about this can be found ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/defining-entities/"}),"in the docs"),"."),Object(r.b)("h2",{id:"persisting-entities-with-entitymanager"},"Persisting entities with EntityManager"),Object(r.b)("p",null,"To save entity state to database, you need to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/entity-manager/"}),"persist it"),". Persist determines whether to use ",Object(r.b)("inlineCode",{parentName:"p"},"insert")," or ",Object(r.b)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. As a result, only changed fields will be updated in database."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/"}),"MikroORM")," comes with support for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/cascading/"}),"cascading persist and remove operations"),". Cascade persist is enabled by default, which means that by persisting an entity, all referenced entities will be automatically persisted too."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persistLater(book1);\norm.em.persistLater(book2);\norm.em.persistLater(book3);\nawait orm.em.flush(); // flush everything to database at once\n")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*x6Oqsg8I4y4Z3FiWtn1ORA.gif",alt:null}))),Object(r.b)("h2",{id:"fetching-entities"},"Fetching entities"),Object(r.b)("p",null,"To fetch entities from database you can use ",Object(r.b)("inlineCode",{parentName:"p"},"find()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findOne()")," methods of ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// find all authors with name matching 'Jon', and populate all of their books\nconst authors = await orm.em.find(Author, { name: /Jon/ }, ['books']); \n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),Object(r.b)("p",null,"More convenient way of fetching entities from database is by using ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository"),", that carries the entity name so you do not have to pass it to every ",Object(r.b)("inlineCode",{parentName:"p"},"find")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findOne")," calls:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { QueryOrder } from 'mikro-orm';\n\nconst booksRepository = orm.em.getRepository(Book);\n\n// with sorting, limit and offset parameters, populating author references\nconst books = await booksRepository.find({ author: '...' }, ['author'], { title: QueryOrder.DESC }, 2, 1);\n\n// or with options object\nconst books = await booksRepository.find({ author: '...' }, { \n  populate: ['author'],\n  limit: 1,\n  offset: 2,\n  sort: { title: QueryOrder.DESC },\n});\n\nconsole.log(books); // Book[]\n")),Object(r.b)("h2",{id:"working-with-references"},"Working with references"),Object(r.b)("p",null,"Entity associations are mapped to entity references. Reference is an entity that has at least the identifier (",Object(r.b)("em",{parentName:"p"},"primary key"),"). This reference is stored in the Identity Map so you will get the same object reference when fetching the same document from database."),Object(r.b)("p",null,"Thanks to this concept, MikroORM offers unified API for accessing entity references, regardless of whether the entity is initialized or not. Even if you do not populate an association, there will be its reference with primary key set. You can call ",Object(r.b)("inlineCode",{parentName:"p"},"await entity.init()")," to initialize the entity. This will trigger database call and populate itself, keeping the same reference to entity object in identity map."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const book = orm.em.findOne(Book, '...');\nconsole.log(book.author); // reference with ID only, instance of Author entity\n\n// this will get the same reference as we already have in `book.author`\nconst author = orm.em.getReference(Author, book.author.id);\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\nconsole.log(author === book.author); // true\n\n// this will trigger db call, we could also use `orm.em.findOne(Author, author.id)` to do the same\nawait author.init(); \nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*PY1hb2ufRhbevdIFt9jR1g.jpeg",alt:null}))),Object(r.b)("h2",{id:"identity-map-and-unit-of-work"},"Identity Map and Unit of\xa0Work"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/"}),"MikroORM")," uses the Identity Map in background to track objects. This means that whenever you fetch entity via ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),", MikroORM will keep a reference to it inside its ",Object(r.b)("inlineCode",{parentName:"p"},"UnitOfWork"),", and will always return the same instance of it, even if you query one entity via different properties. This also means you can compare entities via strict equality operators (",Object(r.b)("inlineCode",{parentName:"p"},"===")," and\xa0",Object(r.b)("inlineCode",{parentName:"p"},"!=="),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst jon2 = await authorRepository.findOne({ email: 'snow@wall.st' });\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\nconsole.log(jon === jon2); // true\n\n// as we always have one instance, books will be populated also here\nconsole.log(jon2.books);\n")),Object(r.b)("p",null,"Another benefit of Identity Map is that this allows us to skip some database calls. When you try to load an already managed entity by its identifier, the one from Identity Map will be returned, without querying the database."),Object(r.b)("p",null,"The power of Unit of Work is in running all queries inside a batch and wrapped inside a transaction (",Object(r.b)("em",{parentName:"p"},"if supported by given driver"),"). This approach is usually more performant as opposed to firing queries from various places."),Object(r.b)("h2",{id:"collections"},"Collections"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"OneToMany")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",Object(r.b)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements iterator so you can use ",Object(r.b)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it."),Object(r.b)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items. Keep in mind that this approach will not check if the collection is initialized, while using ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method will throw error in this case."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// find author and populate his books collection\nconst author = orm.em.findOne(Author, '...', ['books']);\n\nfor (const book of author.books) {\n  console.log(book); // instance of Book\n}\n\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of primary keys of all items\nauthor.books.removeAll();\n")),Object(r.b)("p",null,"More informations about collections can be found ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/collections/"}),"in the docs"),"."),Object(r.b)("h2",{id:"whats-next"},"What\u2019s next?"),Object(r.b)("p",null,"So you read through the whole article, got here and still not satisfied? There are more articles to come (beginning with integration manual for popular frameworks like ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://expressjs.com/"}),"Express")," or ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://nestjs.com/"}),"NestJS"),"), but you can take a look at some advanced features covered in docs right now:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/nested-populate/"}),"Smart nested populate")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/query-conditions/"}),"Smart query conditions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/entity-helper/"}),"Updating entity values with ",Object(r.b)("inlineCode",{parentName:"a"},"IEntity.assign()"))," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/property-validation/"}),"Property validation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/lifecycle-hooks/"}),"Lifecycle hooks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/naming-strategy/"}),"Naming strategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/usage-with-nestjs/"}),"Usage with NestJS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://b4nan.github.io/mikro-orm/usage-with-js/"}),"Usage with JavaScript"))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/800/1*4877k4Hq9dPdtmvg9hnGFA.jpeg",alt:null}))),Object(r.b)("p",null,"To start playing with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),"MikroORM"),", go through ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm#quick-start"}),"quick start")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/"}),"read the docs"),". You can also take a look at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://github.com/mikro-orm/mikro-orm-examples"}),"example integrations with some popular frameworks"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"Like")," ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://b4nan.github.io/mikro-orm/"}),Object(r.b)("em",{parentName:"a"},"MikroORM")),Object(r.b)("em",{parentName:"p"},"? \u2b50\ufe0f")," ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),Object(r.b)("em",{parentName:"a"},"Star it"))," ",Object(r.b)("em",{parentName:"p"},"on GitHub and share this article with your friends."))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This article was originally published on Medium: ",Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"}),"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"))))}b.isMDXComponent=!0},1084:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=b(n),h=o,u=l["".concat(i,".").concat(h)]||l[h]||m[h]||r;return n?a.a.createElement(u,s(s({ref:t},p),{},{components:n})):a.a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);