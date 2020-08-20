Object.setPrototypeOf(); // !!!!! Не использовать, сильно сказывается на производительности !!!!!

const strToInt1 = +'564' // Преобразовываем строку в число
const strToInt2 = parseInt('564') // Преобразовываем строку в число


const domElement = document.querySelector('.card') // Возвращаем первый элемент DOM-дерева с классом .card
const domElement = document.querySelectorAll('.card') // Возвращаем все элементы DOM-дерева с классом .card

let chapter = document.querySelector('.chapter')
chapter.closest('.book') // Возвращаем ближайшего предка с классом .book



/************  Д Е С Т Р У К Т У Р И З А Ц И Я  ***************/

const person = {
	firstName: 'Peter',
	lastName: 'Smith',
	age: 27
}
const { firstName, lastName } = person; // Создаём 2 переменные (firstName И lastName) со значениями из массива ('Peter' и 'Smith')
console.log(firstName, lastName); // Вернёт Peter Smith

const person = {
	name: {
		first: 'Peter',
		last: 'Smith'
	},
	age: 27
}
const { name: { first, last } } = person; // Создаём 2 переменные (first И last) со значениями из массива ('Peter' и 'Smith')
console.log(first, last); // Вернёт Peter Smith

const person = {
	name: {
		first: 'Peter',
		last: 'Smith'
	},
	age: 27
}
const { name: { first: firstName, last: LastName } } = person; // Создаём 2 переменные (firstName И lastName) со значениями из массива ('Peter' и 'Smith')
console.log(firstName, lastName); // Вернёт Peter Smith


/*** Деструктуризация массива ***/

const dict = {
	duck: 'quack',
	dog: 'wuff',
	mouse: 'squeak',
	hamster: 'squeak'
}

const res = Object.entries(dict) /* Преобразовываем объект в многомерный массив */
	.filter(([, value]) => value === 'squeak') /* Выбираем элементы со значением 'squeak' */
	.map(([key]) => key); // Возвращаем массив с ключами элементов со значением 'squeak'
	

// Объединяем объекты

const defaults = {
	host: 'localhost',
	dbName: 'blog',
	user: 'admin'
}
const opts = {
	user: 'John',
	password: 'utopia'
}
const res = Object.assign({}, defaults, opts); // Создаст новый объект {} с данними из defaults + opts (user будет из opts)

// Можно ещё и так (для объекта):
const res = { ...defaults, ...opts };











