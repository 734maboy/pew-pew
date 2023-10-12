import instance from '../../axios';

export function getCar(params) {
	// Возвращает Promise, не результат запроса
	return instance.get('/car/get');
}

export function deleteCar(id) {
	// Возвращает Promise, не результат запроса
	return instance.post('/car/delete', {
		id: id,
	});
}

export function createCar(params) {
	// Возвращает Promise, не результат запроса
	return instance.post('/car/create', {...params});
}
