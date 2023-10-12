
import instance from '../../axios';

export function getAnimal(params) {
	// Возвращает Promise, не результат запроса
	return instance.get('/animal/get');
}

export function deleteAnimal(id) {
	// Возвращает Promise, не результат запроса
	return instance.post('/animal/delete', {
		id: id,
	});
}

export function createAnimal(params) {
	// Возвращает Promise, не результат запроса
	return instance.post('/animal/create', {...params});
}
