const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db  => {
    // incerir dados na tabela
    // await saveOrphanage(db,{
    //     lat: "-27.2191478",
    //     lng: "-49.6598619",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    //     whatsapp: "000001",
    //     images: [

    //         "https://images.unsplash.com/           photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     opening_on_weekends: "0"

    // })

    //  consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // sonsultar somente um orphanage, pelo ID

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage);

    // deletar dado da tabela

    console.log(await db.run('DELETE FROM orphanages WHERE id ="4"'))


})