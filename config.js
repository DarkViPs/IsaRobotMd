const fs = require('fs')
const chalk = require('chalk')


global.APIs = {
	zenz: 'https://zenzapi.xyz',
}
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['5517991134416']
global.packname = 'Isa Robot'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'conexão'
global.prefa = ['/']
global.sp = '⭔'
global.mess = {
    success: '✓ Successo',
    admin: 'Somente adms!',
    botAdmin: 'Eu preciso ter adm né',
    owner: 'Só meu dono',
    group: 'So em grupos.',
    private: 'Só no privado amg!',
    bot: 'Recursos especiais do usuário do número do bot',
    wait: 'Aguarde...',
}
global.thumb = fs.readFileSync('./media/logo3.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
