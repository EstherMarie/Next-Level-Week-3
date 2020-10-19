const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
	// inserir dados na tabela
	// await saveOrphanage(db, {
	// 	id: 1,
	// 	lat: "-22.890227",
	// 	lng: "-43.3045401",
	// 	name: "Lar da Felicidade",
	// 	about:
	// 		"Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
	// 	images: [
	// 		"https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",
	// 		"https://images.unsplash.com/photo-1440288736878-766bd5839edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	// 	],
	// 	instructions:
	// 		"Venha se sentir à vontade e traga muito amor e paciência para dar.",
	// 	opening_hours: "Horário de visitas das 8h às 18h.",
	// 	open_on_weekends: "1"
	// });

	// // consultar dados na tabela
	const selectedOrphanages = await db.all('SELECT * FROM orphanages');
	console.log(selectedOrphanages);

	// // consultar somente um orfanato pelo id
	const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
	console.log(orphanage);

	// deletar dado da tabela
	// console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
	
});
