

/*/

Isa Robot: Um bot Multi Device para whatsapp criado por dark.
O bot contém um "painel" interno capaz de realizar consultas de telefone, cpf, nome, rg entre outras..
Para vc ter o acesso para consultar dados compre seu login e senha com o dark.
Caso use a base deixe os meus creditos.

Parceiros que ajudaram no Projeto:

Markos: +55 94 9142-3691

/*/

//Sistema de login no painel para realizar consultas:

const username = ``
const password = ``
const porta = ``
const apidk = `narjjN2B` 

//narjjN2B


//Compre seu login e senha com o dark: wa.me/+5517991134416

//Não mecha caso o dark não pedir.
const axios = require('axios')
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

//Configurando o id do grupo para roubar os membros:

idgroup2 = `5521997123716-1610484750@g.us`
//




//database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = isa = async (isa, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = '/'
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Usuario"
        const botNumber = await isa.decodeJid(isa.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)


        //Configurnado seu Acesso (Não Mecha em Nada)
const tipo = `.json`
const tipoa = `ace`
const tipob = `sso`
const acess2 = `${tipoa}${tipob}${tipo}`
dkkkap = await axios.get(`https://pastebin.com/raw/${apidk}`)
dktoken = `${dkkkap.data.a}`
const acess3 = await axios.get(`https://paineltokens.herokuapp.com/${username}/${password}.json`)
const acess = `${acess3.data.a}`

//
	
        // Grupo
        const groupMetadata = m.isGroup ? await isa.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        
      



let sender = m.isGroup ? m.participant : m.key.remoteJid
let prem2 = await fetchJson(`https://paineltokens.herokuapp.com/prem.json`)
const isPremium2 = prem2.includes(sender)
const premm2 = isPremium2 ? 's' : 'n' 
let suportapi =  await fetchJson(`https://paineltokens.herokuapp.com/${porta}.json`)
let apidarkbuscas = `${suportapi.msg}`



//
	
        // Publico e priv
        if (!isa.public) {
            if (!m.key.fromMe) return
        }

        // msgs
        if (m.message) {
          //  isa.sendReadReceipt(m.chat, m.sender, [m.key.id])
            const data = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(data)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Privado', m.chat))
        }
	
	// att database
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
            //console.log('Atualizando Database...')
        }, 60 * 1000)

        // comandos e msgs
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: isa.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, isa.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        isa.ev.emit('messages.upsert', msg)
        }
	    

       switch(command) {


            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Opções: 1. Mutar\n2. Desmutar\n3. Arquivar\n4. Desarquivar\n5. Ler\n6. Desler\n7. delete'
                if (args[0] === 'mutar') {
                    isa.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'desmutar') {
                    isa.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'arquivar') {
                    isa.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'desarquivar') {
                    isa.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'ler') {
                    isa.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'desler') {
                    isa.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    isa.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

 
            case 'entrar': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Mande um link de um gp!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await isa.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'sair': {
                if (!isCreator) throw mess.owner
                await isa.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'clonargrupo':
///
				const dadosDoGrupo = await isa.groupMetadata(m.chat)
				let ids=[];
				for(let i of dadosDoGrupo.participants){
					ids.push(i.m.chat);
				
				const NovoGrupo = await isa.groupCreate(dadosDoGrupo.subject, ids);
				const perfil = await isa.getProfilePicture(m.chat);
				await isa.updateProfilePicture(NovoGrupo.gid, perfil);
				for(let i of NovoGrupo.participants){
					let t = Object.keys(i)[0];
					if(i[t] && i[t].code && i[t].code === "403"){
						isa.sendMessage(t.replace("c.us", "s.whatsapp.net"), {
							groupJid: NovoGrupo.gid,
							inviteCode: i[t].invite_code,
							inviteExpiration: i[t].invite_code_exp,
							groupName: dadosDoGrupo.subject
						}, MessageType.groupInviteMessage);
					}
				}
            }
			break
            case 'tempban': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                let users4 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await isa.groupParticipantsUpdate(m.chat, [users4], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
           m.reply(`Pronto, em 5 minutos eu ja adiciono essa pessoa de volta ao grupo, isso se ela não tiver privado...`)
                await sleep(300000)
           await isa.groupParticipantsUpdate(m.chat, [users4], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'reviver': {
		if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'desbloquear': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await isa.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Texto ?'
                await isa.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await isa.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setftbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Envie uma imagem com a legenda ${prefix + command}`
                if (!/image/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
                if (/webp/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                await isa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setftgp': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Envie uma imagem com a legenda ${prefix + command}`
                if (!/image/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
                if (/webp/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                await isa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'setidgp':
                    idgpp = `${q}`
                    m.reply(`Pronto, ja coletei os membros desse grupo, só digitar /confg add agora.`)
                    break
                    case 'idget':
                        if (!text) throw 'Mande um link de um gp!'
                        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                       
                        let result = args[0].split('https://chat.whatsapp.com/')[1]
                        await isa.groupAcceptInvite(result).then(res2 => {
                            var geitdd = res2.replace(`""`, ``);
                            m.reply(geitdd)
                        })
                            break

              
            case 'marcar': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Atenção!* 〙✪══
 
 ➲ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                isa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break


                case 'clonn': {
                    if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin

                    for (let mem of participants) {

                        const group = await isa.groupCreate(`${groupName}`, [`${mem.id.split('@')[0]}@s.whatsapp.net`])
                        console.log ("Grupo clonado" + group.gid)
                        isa.sendMessage(group.id, { text: 'Bem Vindos!' })
               
                    }
                 
                    }
                    break


                case 'hidetag': {
            if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            isa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

               case 'gp': case 'grup': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'fechar'){
                    await isa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'abrir'){
                    await isa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'Abrir Grupo', buttonText: { displayText: 'abrir' }, type: 1 },
                        { buttonId: 'Fechar Grupo', buttonText: { displayText: 'fechar' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `Mode Group`, isa.user.name, m)

             }
            }
            break
            case 'modoedit': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'abrir'){
                await isa.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Agora todos os membros podem editar o grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'fechar'){
                await isa.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Agora somente adms podem editar o grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'Ativar Edição', buttonText: { displayText: 'abrir' }, type: 1 },
                        { buttonId: 'Desativar Edição', buttonText: { displayText: 'fechar' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `Mode Edit Info`, isa.user.name, m)

            }
            }
            break
            case 'linkgp': case 'linkgc': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                let response = await isa.groupInviteCode(m.chat)
                isa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink do grupo: ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await isa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await isa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'MSG tersebut bukan dikirim oleh bot!'
                isa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgp': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Texto?\n\nExemplo: ${prefix + command} dark`
                let getGroups = await isa.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Ok, em ${anu.length * 1.5} segundos eu irei enviar "${text}" para ${anu.length} Conversas em grupo`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: '💻 Canal do Meu Dono',
                            url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
                        }
                    }, {
                        callButton: {
                            displayText: 'Numero do Meu Dono',
                            phoneNumber: '+55 17 99113-4416'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '🔍 Consultas',
                            id: 'consul'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: '💸 Planos',
                            id: 'preços'
                        }  
                    }, {
                        quickReplyButton: {
                            displayText: '⚙️ Outros Comandos',
                            id: 'menu2'
                        }
                            }]
                      fatihgans = fs.readFileSync('./media/logo.jpg')
                      let txt = `「 Transmissão 」\n\n${text}`
                      isa.send5ButImg(i, txt, isa.user.name, fatihgans, btn)
                    }
                m.reply(`Msg enviada com sucesso para ${anu.length} grupos`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExemplo de Uso: ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`A transmissão sera enviada em ${anu.length * 1.5} segundos para ${anu.length} Chats`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                urlButton: {
                    displayText: '💻 Canal do Meu Dono',
                    url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
                }
            }, {
                callButton: {
                    displayText: 'Numero do Meu Dono',
                    phoneNumber: '+55 17 99113-4416'
                }
            }, {
                quickReplyButton: {
                    displayText: '🔍 Consultas',
                    id: 'consul'
                }
            }, {
                quickReplyButton: {
                    displayText: '💸 Planos',
                    id: 'preços'
                }  
            }, {
                quickReplyButton: {
                    displayText: '⚙️ Outros Comandos',
                    id: 'menu2'
                }
                    }]
                      fatihgans = fs.readFileSync('./media/logo.jpg')
                      let txt = `「 Transmissão 」\n\n${text}`
                      isa.send5ButImg(yoi, txt, isa.user.name, fatihgans, btn)
		}
		m.reply('Enviado!')
            }
            break
            case 'infomsg': {
                 if (!isCreator) throw mess.owner
                if (!m.quoted) m.reply('Marque uma msg')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'A mensagem não foi enviada por mim!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Mensagem enviada em:* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Essa mensagem foi:* ${read ? 'Lida' : 'Enviada'}\n\n`
                }
                isa.sendTextWithMentions(m.chat, teks, m)
            }
            break

            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 isa.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'grupos': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *Lista de Grupos q eu estou*\n\nTotal: ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await isa.groupMetadata(i)
                     teks += `⬡ *Nome:* ${metadata.subject}\n⬡ *Dono:* @${metadata.owner.split('@')[0]}\n⬡ *ID:* ${metadata.id}\n⬡ *Fez:* ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Membros:* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 isa.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'onlines': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    isa.sendText(m.chat, 'Lista de Onlines:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'fig': case 'f': case 'figu': case 'figurinha': {
            if (!quoted) throw `Envie uma imagem ou video com a legenda ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await isa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await isa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Envie um video ou uma imagem com a legenda ${prefix + command}\nVideos no maximo 9 segundos`
                }
            }
            break
            case 'codificar': {
            if (!m.quoted.text && !text) throw `Marque uma msg com ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'decodificar': {
            if (!m.quoted.text && !text) throw `Marque uma msg com ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emoji': {
	        if (!text) throw `Exemplo: ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await isa.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break

        case 'tel4':
            case 'telefone4':
                if (premm2 != 'n') {
   // if(!Puxada) throw (`⚠ - Puxadas foram desativadas pelo meu dono ou estou em manutenção.`);
   if(!isPremium2)  return m.reply (`👑 ESSE COMANDO SÓ PODE SER USADO SE FOR VIP\n\n💰 PARA COMPRAR VIP DIGITE:\n\n/preços`)
   if (!text)  return m.reply (`Digite um telefone! | Exemplo: /tel4 11997792648`)
   var query = text
				.split('+').join('')
				.split('-').join('')
				.split(' ').join('')
				.split('(').join('')
				.split(')').join('');
				if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nO número deve conter 11 dígitos!\nUso: /telefone4 16996273400');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /telefone4 11997792648');
                m.reply(`Estou consultando, caso não retorne nada é pq eu não encontrei.`)
                rs = await fetchJson(`https://darkbuscas.herokuapp.com/tel4/${q}/${acess}`) //Se explanar a api eu como seu cu, e dps deixo ela off <3
    
                                if (rs.Telefone != undefined) { 
            
            consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════          
 *Informações:*
 
TELEFONE: ${rs.Telefone}
CPF: ${rs.Cpf}
NOME: ${rs.Nome}

 *Endereços:*

ENDEREÇO: ${rs.Endereço}
BAIRRO: ${rs.Bairro}
NUMERO: ${rs.Numero}
CEP: ${rs.Cep}

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`


m.reply(`${consulta}`) // <-- "reply" sempre acima do "}"
                               } else {

                                    m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
                                }
                                                      } //<---
                                                    
                                                    if (premm2 != 's') {
                                                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                                                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                                                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            templateMessage: {
                                                                hydratedTemplate: {
                                                                    imageMessage: message22.imageMessage,
                                                                    hydratedContentText: txt2,
                                                                    hydratedButtons: [{
                                                                        quickReplyButton: {
                                                                            displayText: '💸 Planos',
                                                                            id: 'preços'
                                                                        }  
                                                                    }]
                                                                }
                                                            }
                                                        }), { userJid: m.chat, quoted: m })
                                                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                                                    }
                break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Marque uma figurinha'
             //   if (!/webp/.test(mime)) throw `Marque uma figurinha com *${prefix + command}*`
                m.reply(mess.wait)
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    isa.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tm':
                if (!isQuotedSticker)  return m.reply('❌ Marque uma Figurinha.')
                reply(mess.wait)
              let encmediaxxx = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                 let media = await isa.downloadAndSaveMediaMessage(quoted)
                ran = getRandom('.png')
                exec(`ffmpeg -i ${mediaxxx} ${ran}`, (err) => {
                    fs.unlinkSync(mediaxxx)
                    if (err)  return m.reply('❌ Erro na conversão.')
                    buffer = fs.readFileSync(ran)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Concluido'})
                    fs.unlinkSync(ran)
                })
                break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Marque uma figurinha com *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await isa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envie ou Marque um video com ${prefix + command}`
            if (!quoted) throw `Envie ou Marque um video com ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            isa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Envie ou Marque um video/audio com ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envie ou Marque um video/audio com ${prefix + command}`
            if (!quoted) throw `Envie ou Marque um video/audio com ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            isa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${isa.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            isa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Marque uma fig animada'
                if (!/webp/.test(mime)) throw `Marque uma figurinha animada com *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await isa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'semfundo': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Envie uma imagem com a legenda ${prefix + command}`
	    if (!/image/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
	    if (/webp/.test(mime)) throw `Envie uma imagem com a legenda ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await isa.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    isa.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Exemplo: ${prefix + command} dark whatsapp bot`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'Pesquisa no Youtube\n\n Resultado de '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ Resultado: ${no++}\n⭔ Tipo: ${i.type}\n⭔ Video ID: ${i.videoId}\n⭔ Titulo: ${i.title}\n⭔ Views: ${i.views}\n⭔ Duração: ${i.timestamp}\n⭔ Postado em: ${i.ago}\n⭔ Criador: ${i.author.name}\n⭔ Url: ${i.url}\n\n─────────────────\n\n`
                }
                isa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Exemplo: ${prefix + command} rick and morty`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Pesquisa no Google de: ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Titulo*: ${g.title}\n`
                teks += `⭔ *Descrição*: ${g.snippet}\n`
                teks += `⭔ *Link*: ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break




                       
                    case 'localizar':
                        if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                        if (premm2 != 'n') {
                    let usersk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+''
                   //Pegando número da pessoa marcada:

    var resultadok = usersk.replace("@s.whatsapp.net", "");
    var resultado2k = resultadok.replace("55", "");
    var resultado3k = resultado2k.replace(/(\d{2})/, "$19")
    const checkmm = usersk ? 's' : 'n' 
   if (checkmm != 's')  return m.reply(`Marque o @ de uma pessoa do grupo, ou marque uma mensagem | Exemplo: /${command} @\n\n Ou apenas marque uma mensagem com /${command}`)
    //Configurando número para pegar apenas com 11 digitos:

    if(resultado2k.length < 11 || resultado2k.length > 11) {

        //Apis de buscas, telefone e cpf, explicação: o bot irá pegar o número marcado, jogar na api de telefone, pegar o cpf da api do telefone e jogar na api de cpf:
 xx = await fetchJson(`${apidarkbuscas}/telefone/${resultado3k}/${acess}`)

     apii = await fetchJson(`${apidarkbuscas}/cpf/${xx.CpfCnpj}/${acess}`)

     //Caso o cpf nao for encontrado:
     if (xx.CpfCnpj != undefined) return m.reply (`⚠️ LOCALIZAÇÃO NÃO ENCONTRADA!`)

    cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${apii.Cep}`)

    viacep = await fetchJson(`https://viacep.com.br/ws/${apii.Cep}/json/`)

    console.log(`Passando ${resultado3k} pra api de telefone, desse telefone coletei o cpf ${xx.CpfCnpj}, e desse cpf coletei o cep ${apii.Cep} `)

    if (cer.cep != undefined) {

    consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
await sleep(3000)
await isa.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
  

} else {

       consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${viacep.cep}
• DDD: ${viacep.ddd}
• SIAFI: ${viacep.siafi}
• IBGE: ${viacep.ibge}
• LOCALIDADE: ${viacep.localidade}
• UF: ${viacep.uf}

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`


if (viacep.cep != undefined) { 
    consulr = `${consulta}`
    } else { 
        consulr = `⚠️ A LOCALIZAÇÃO NÃO ESTÁ PRECISA!`
    }
m.reply(consulr)
}
    }
    xx = await fetchJson(`${apidarkbuscas}/telefone/${resultado2k}/${acess}`)


     apii = await fetchJson(`${apidarkbuscas}/cpf/${xx.CpfCnpj}/${acess}`)
     viacep = await fetchJson(`https://viacep.com.br/ws/${apii.Cep}/json/`)
    cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${apii.Cep}`)
    console.log(`Passando ${resultado2k} pra api de telefone, desse telefone coletei o cpf ${xx.CpfCnpj}, e desse cpf coletei o cep ${apii.Cep} `)

    if (cer.cep != undefined) {
   
    consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
await sleep(3000)
await isa.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
  
} else {
//Configurando api 2  
           consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${viacep.cep}
• DDD: ${viacep.ddd}
• SIAFI: ${viacep.siafi}
• IBGE: ${viacep.ibge}
• LOCALIDADE: ${viacep.localidade}
• UF: ${viacep.uf}

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`

if (viacep.cep != undefined) { 
    consulr = `${consulta}`
    } else { 
        consulr = `⚠️ LOCALIZAÇÃO NÃO ENCONTRADA!`
    }



m.reply(consulr)
  
}  {
}

   
}
if (premm2 != 's') {
    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                imageMessage: message22.imageMessage,
                hydratedContentText: txt2,
                hydratedButtons: [{
                    quickReplyButton: {
                        displayText: '💸 Planos',
                        id: 'preços'
                    }  
                }]
            }
        }
    }), { userJid: m.chat, quoted: m })
    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
}
                    break

                    case 'loc':
                        if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                        if (premm2 != 'n') {
                            if(!text) return m.reply (`Digite um telefone. | Exemplo: /loc 16996273400`)
                            var query = text
                            .split('+').join('')
                            .split('-').join('')
                            .split(' ').join('')
                            .split('(').join('')
                            .split(')').join('');
                            if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nO número deve conter 11 dígitos!\nUso: /loc 16996273400');
                            if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /loc 16996273400');
                            m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                            
    if(query.length < 11 || query.length > 11) {
        var txtmod = text.replace(/(\d{2})/, "$19")
        //Apis de buscas, telefone e cpf, explicação: o bot irá pegar o número marcado, jogar na api de telefone, pegar o cpf da api do telefone e jogar na api de cpf:
 xx = await fetchJson(`${apidarkbuscas}/telefone/${txtmod}/${acess}`)
     apii = await fetchJson(`${apidarkbuscas}/cpf/${xx.CpfCnpj}/${acess}`)
     //Caso o cpf nao for encontrado:
     if (xx.CpfCnpj != undefined) throw (`⚠️ LOCALIZAÇÃO NÃO ENCONTRADA!`)
     //Api de cep(1)
    cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${apii.Cep}`)
//Api de Cep(2)
    viacep = await fetchJson(`https://viacep.com.br/ws/${apii.Cep}/json/`)
    //Passando os resultados para o console
    console.log(`Passando ${resultado3k} pra api de telefone, desse telefone coletei o cpf ${xx.CpfCnpj}, e desse cpf coletei o cep ${apii.Cep} `)
 //Se o cpf for encontrado o bot ira mandar:
    if (cer.cep != undefined) {

    consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
await sleep(3000)
await isa.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
  
// Se o cpf não for encontrado o bot tentara dnv com a api secundario de cep:
} else {

       consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${viacep.cep}
• DDD: ${viacep.ddd}
• SIAFI: ${viacep.siafi}
• IBGE: ${viacep.ibge}
• LOCALIDADE: ${viacep.localidade}
• UF: ${viacep.uf}

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`

//Se tbm não for encontrado na api de cep2 ira retornar uma msg de erro
if (viacep.cep != undefined) { 
    consulr = `${consulta}`
    } else { 
        consulr = `⚠️ A LOCALIZAÇÃO NÃO ESTÁ PRECISA!`
    }
m.reply(consulr)
}
    }
    xx = await fetchJson(`${apidarkbuscas}/telefone/${text}/${acess}`)

//Apis - Repetindo processo caso de erro no sistema:
     apii = await fetchJson(`${apidarkbuscas}/cpf/${xx.CpfCnpj}/${acess}`)
     viacep = await fetchJson(`https://viacep.com.br/ws/${apii.Cep}/json/`)
    cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${apii.Cep}`)
    console.log(`Passando ${text} pra api de telefone, desse telefone coletei o cpf ${xx.CpfCnpj}, e desse cpf coletei o cep ${apii.Cep} `)

    if (cer.cep != undefined) {
   
    consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
await sleep(3000)
await isa.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
  
} else {
//Configurando api 2  
           consulta = `═════════════════════
🔍 CONSULTA DE LOC 🔍
═════════════════════

• Cep: ${viacep.cep}
• DDD: ${viacep.ddd}
• SIAFI: ${viacep.siafi}
• IBGE: ${viacep.ibge}
• LOCALIDADE: ${viacep.localidade}
• UF: ${viacep.uf}

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`

if (viacep.cep != undefined) { 
    consulr = `${consulta}`
    } else { 
        consulr = `⚠️ LOCALIZAÇÃO NÃO ENCONTRADA!`
    }



m.reply(consulr)
  
}  {
}

   
}
if (premm2 != 's') {
    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                imageMessage: message22.imageMessage,
                hydratedContentText: txt2,
                hydratedButtons: [{
                    quickReplyButton: {
                        displayText: '💸 Planos',
                        id: 'preços'
                    }  
                }]
            }
        }
    }), { userJid: m.chat, quoted: m })
    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
}
                    break

                case 'cep':
    if(!text) return m.reply (`☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗘𝗣\n\n━━━━━━━━━━━━━━━━━━━━━\nConsulta de CEP, obtém informações sobre os logradouros (como nome de rua, avenida, alameda, beco, travessa, praça etc), nome de bairro, cidade e estado onde ele está localizado.\n\nFormato:\n70040010\nou\n70040-010\n\n/cep 70040010\n\n━━━━━━━━━━━━━━━━━━━━━`)
    var query = text
    .split('.').join('')
    .split('-').join('')
    .split(' ').join('');
    if(query.length < 4 || query.length > 11) return m.reply('☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗘𝗣\n\n━━━━━━━━━━━━━━━━━━━━━\nConsulta de CEP, obtém informações sobre os logradouros (como nome de rua, avenida, alameda, beco, travessa, praça etc), nome de bairro, cidade e estado onde ele está localizado.\n\nFormato:\n70040010\nou\n70040-010\n\n/cep 70040010\n\n━━━━━━━━━━━━━━━━━━━━━');
    if(isNaN(query)) return m.reply('☑️ 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗖𝗘𝗣\n\n━━━━━━━━━━━━━━━━━━━━━\nConsulta de CEP, obtém informações sobre os logradouros (como nome de rua, avenida, alameda, beco, travessa, praça etc), nome de bairro, cidade e estado onde ele está localizado.\n\nFormato:\n70040010\nou\n70040-010\n\n/cep 70040010\n\n━━━━━━━━━━━━━━━━━━━━━');
                m.reply(`Ei ${pushname} já estou consultando... Enquanto isso tome um café☕\nCaso não retorne nada, nao foi encontrado.`)
                cer = await fetchJson(`https://cep.awesomeapi.com.br/json/${text}`)
 
if (cer.cep != undefined) {
    consulta = `═════════════════════
🔍 CONSULTA DE CEP 🔍
═════════════════════

• Cep: ${cer.cep}
• DDD: ${cer.ddd}
• Estado: ${cer.state}
• Tipo de logradouro: ${cer.address_type}
• Nome do logradouro: ${cer.address_name}
• Rua: ${cer.address}
• Bairro: ${cer.district}
• Cidade: ${cer.city}
• Latitude: ${cer.lat} 
• Longitude: ${cer.lng} 

• Usuario: ${pushname}

🔛 BY: ISA BOT

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
await sleep(3000)
await isa.sendMessage(m.chat, { location: { degreesLatitude: cer.lat, degreesLongitude: cer.lng }, })
} else {
    m.reply(`⚠️ CEP NÃO ENCONTRADO`)
}
  break
        case 'gimagem': {
        if (!text) throw `Exemplo: ${prefix + command} cirilo`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimagem ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 PESQUISA IMG 」-------*

🤠 *Pesquisa* : ${text}

🔗 *Imagem Url* : ${images}`,
                    footer: isa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Exemplo: ${prefix + command} pandora funk`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
💬 Titulo: ${anu.title}


▶️ Duração: ${anu.timestamp}

👁️️ Views: ${anu.views}

⏰️ Publicado há: ${anu.ago}

👑 Canal: ${anu.author.name}

🔗 Link: ${anu.url}

⭔ Descrição: ${anu.description}`,
                    footer: isa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                isa.sendImage(m.chat, thumbnail, `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '128kbps'}\n\n*Enviando Audio, aguarde...*`, m)
                isa.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                isa.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 1`
                if (!m.quoted) return m.reply('Marque uma msg')
                if (!m.quoted.isBaileys) throw `Só pode responder a mensagens minhas`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Talvez a mensagem que você respondeu não contenha o resultado do ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                isa.sendImage(m.chat, thumbnail, `⭔ Titulo: ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                isa.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 1`
                if (!m.quoted) return m.reply('Marque uma msg')
                if (!m.quoted.isBaileys) throw `Só pode responder a mensagens minhas`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Talvez a mensagem que você respondeu não contenha o resultado do ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                isa.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `⭔ Titulo: ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                isa.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Link da Imagem: '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                m.reply(mess.wait)
                isa.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
	    case 'metadinha': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                isa.sendMessage(m.chat, { image: { url: random.male }, caption: `Menino` }, { quoted: m })
                isa.sendMessage(m.chat, { image: { url: random.female }, caption: `Menina` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Café aleatório`,
                    footer: isa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'quer procura por oque? | Exemplo de Uso: /wallpaper marvel'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Titulo: ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Imagem Link: ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: isa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'quer procura por oque? | Exemplo de Uso: /wallpaper brasil'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Titulo: ${result.title}\n⭔ Source: ${result.source}\n⭔ Imagem Link: ${result.image}`,
                    footer: isa.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} text`
                m.reply(mess.wait)
                isa.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                isa.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                isa.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Exemplo de Uso: ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Exemplo de Uso: ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Exemplo de Uso: 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Exemplo de Uso: ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                isa.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await isa.sendMessage(m.chat, buttonMessage, { quoted: m })
		let { toAudio } = require('./lib/converter')
		let nganu = await getBuffer(anu.result.nowatermark)
		let cnvrt = await toAudio(nganu, 'mp4')
                isa.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) isa.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    isa.sendFile(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await isa.sendImage(m.chat, anu.result.img, `⭔ Titulo: ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                isa.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await isa.sendImage(m.chat, anu.result.thumb, `⭔ Titulo: ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                isa.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                isa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await isa.sendMessage(m.chat, buttonMessage, { quoted: m })
                isa.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                isa.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Titulo: ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                isa.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Exemplo de Uso: ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Titulo: ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: isa.user.name,
			buttons,
			headerType: 4
		    }
		    isa.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        isa.sendMessage(m.chat, { image: { url }, caption: `⭔ Titulo: ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Exemplo de Uso: ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		isa.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Exemplo de Uso: ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		isa.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		isa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		isa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		isa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		isa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Exemplo de Uso: ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
Mensagemmi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		isa.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await isa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return console.log(err)
                let buff = fs.readFileSync(ran)
                isa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Marque um audio com *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Marque uma msg!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash ausente'
                if (!text) throw `Para qual comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'Você não tem permissão para alterar este comando de fig'
                cmdmedia[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply(`Pronto!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Sem hashes`
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'Você não tem permissão para alterar este comando de fig'              
                delete cmdmedia[hash]
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply(`Pronto!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Listas Hash*
Info: *negrito* hash está bloqueado
${Object.entries(cmdmedia).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                isa.sendText(m.chat, teks, m, { mentions: Object.values(cmdmedia).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Marque uma msg!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in cmdmedia)) throw 'Hash not found in database'
                cmdmedia[hash].locked = !/^un/i.test(command)
                fs.writeFileSync('./src/cmdmedia.json', JSON.stringify(cmdmedia))
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Exemplo de Uso: ${prefix + command} nama file`
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list MSG`
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan MSG di list MSG sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list MSG Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} file name\n\nLihat list MSG dengan ${prefix}listmsg`
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list MSG`
                isa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list MSG`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./src/database.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' Mensagem list MSG`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                isa.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await isa.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, isa.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await isa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, isa.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await isa.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim MSG\`\`\``, isa.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await isa.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim MSG\`\`\``, isa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, isa.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await isa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await isa.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim MSG\`\`\``, isa.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await isa.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim MSG\`\`\``, isa.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await isa.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, isa.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                isa.public = true
                m.reply('Modo publico ativo')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                isa.public = false
                m.reply('Modo privado ativo')
            }
            break
            case 'nome2':
             
                if (premm2 != 'n') {
                if(!text) return m.reply (`Digite um nome. | Exemplo: /nome2 Jair Messias Bolsonaro`)
                



                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                api = await axios.get(`http://api.lkzn.tk/api/nome.php?token=${dktoken}&nome=${text}`)


let teks = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════\n\n`
for (let v of api.data.msg) {
                teks += `*NOME*: ${v.nome}\n`
                teks += `*CPF*: ${v.cpf}\n`
                teks += `*SEXO*: ${v.sexo}\n`
                teks += `*DATA DE NASCIMENTO*: ${v.nascimento}\n`
                teks += `━━━━━━━━━━━━━━━━━━\n\n`
               
}
isa.sendMessage(m.chat, { text: teks }, { quoted: m })
                          
            }
                if (premm2 != 's') {
                    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message22.imageMessage,
                                hydratedContentText: txt2,
                                hydratedButtons: [{
                                    quickReplyButton: {
                                        displayText: '💸 Planos',
                                        id: 'preços'
                                    }  
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                }
                break
            case 'nome':
             
                if (premm2 != 'n') {
                if(!text) return m.reply (`Digite um nome. | Exemplo: /nome Jair Messias Bolsonaro`)
                



                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                try {
                api = await axios.get(`${apidarkbuscas}/nome/${q}/${acess}`)

                if (api.data.Nome != undefined) {
retorno = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════

*NOME*: ${api.data.Nome}
*CPF*: ${api.data.Cpf}
*SEXO*: ${api.data.Sexo}
*DATA DE NASCIMENTO*: ${api.data.Nascimento}

━━━━━━━━━━━━━━━━━━`
                
m.reply(retorno)
} else {
    m.reply(`⚠️ NOME NÃO ENCONTRADO!`)
}
                
if (api.image === 'false') throw (`Encontrei mais de uma pessoa com esse nome, porem não sou capaz de enviar, te digitar o nome completo da pessoa.`)
} catch (err) {

    m.reply('Encontrei mais de uma pessoa com esse nome, porem não sou capaz de enviar, tente digitar o nome completo da pessoa.')
}           

                }
                if (premm2 != 's') {
                    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message22.imageMessage,
                                hydratedContentText: txt2,
                                hydratedButtons: [{
                                    quickReplyButton: {
                                        displayText: '💸 Planos',
                                        id: 'preços'
                                    }  
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                }
                break
            case 'cpf':
             
                if (premm2 != 'n') {
                if(!text) return m.reply (`Digite um cpf. | Exemplo: /cpf 00000000868`)
				var query = text
				.split('.').join('')
				.split('-').join('');
				if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nUse assim: /cpf 00000000868');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /cpf 00000000868');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                apii = await fetchJson(`${apidarkbuscas}/cpf/${text}/${acess}`)
                if (apii.Cpf != undefined) {
                 consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════

 INFORMAÇÕES DO CPF:

• *CPF:* ${apii.Cpf}
• *CNS:* ${apii.Cns}
• *RG:* ${apii.Rg}
• *CNS:* ${apii.Cns}
• *EXPEDIÇÃO:* ${apii.DataDeExpedição}
• *ORGÃO EXPEDIDOR:* ${apii.OrgãoExpedidor}
• *RG UF:* ${apii.UfRg}

 INFORMAÇÕES DA PESSOA:

• *NOME:* ${apii.Nome}
• *SEXO:* ${apii.Sexo}
• *NASCIMENTO:* ${apii.Nascimento}
• *IDADE:* ${apii.Idade}
• *COR:* ${apii.Cor}
• *SIGNO:* ${apii.Signo}
• *TIPO SANGUÍNEO:* ${apii.TipoSanguíneo}
• *EMAIL:* ${apii.Email}
• *TELEFONE:* ${apii.Telefone}

 PARENTES:

 • *MÃE:* ${apii.Mãe}
 • *PAI:* ${apii.Pai}

 ENDEREÇO:

 • *ESTADO:* ${apii.Estado}
 • *CIDADE:* ${apii.Cidade}
 • *BAIRRO:* ${apii.Bairro}
 • *CEP:* ${apii.Cep}
 • *RUA:* ${apii.Logradouro}
 • *NUMERO:* ${apii.Número}

 ━━━━━━━━━━━━━━━━━━`

m.reply(consulta)
} else {
    
    m.reply(`⚠️ CPF NÃO ENCONTRADO!`)
}
                }
                if (premm2 != 's') {
                    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                        templateMessage: {
                            hydratedTemplate: {
                                imageMessage: message22.imageMessage,
                                hydratedContentText: txt2,
                                hydratedButtons: [{
                                    quickReplyButton: {
                                        displayText: '💸 Planos',
                                        id: 'preços'
                                    }  
                                }]
                            }
                        }
                    }), { userJid: m.chat, quoted: m })
                    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                }
                break

                case 'cpf2':
                 
                    if (premm2 != 'n') {
                if(!text) return m.reply (`Digite um cpf. | Exemplo: /cpf2 00000000868`)
				var query = text
				.split('.').join('')
				.split('-').join('');
				if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nUse assim: /cpf2 00000000868');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /cpf2 00000000868');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                apii = await fetchJson(`${apidarkbuscas}/cpf2/${text}/${acess}`)
                api.data = apii
                if (apii.Cpf != undefined) {
                 consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════

INFORMAÇÕES DO CPF:

• *CPF:* ${api.data.Cpf}
• *CNS:* ${api.data.Cns}
• *RG:* ${api.data.Rg}
• *CNS:* ${api.data.Cns}
• *EXPEDIÇÃO:* ${api.data.DataDeExpedição}
• *ORGÃO EXPEDIDOR:* ${api.data.OrgãoExpedidor}
• *RG UF:* ${api.data.UfRg}

INFORMAÇÕES DA PESSOA:

• *NOME:* ${api.data.Nome}
• *SEXO:* ${api.data.Sexo}
• *NASCIMENTO:* ${api.data.Nascimento}
• *IDADE:* ${api.data.Idade}
• *COR:* ${api.data.Cor}
• *SIGNO:* ${api.data.Signo}
• *TIPO SANGUÍNEO:* ${api.data.TipoSanguíneo}
• *NACIONALIDADE:* ${api.data.Nacionalidade}
• *ESTADO NATAL:* ${api.data.EstadoDeNascimento}
• *CIDADE NATAL:* ${api.data.CidadeDeNascimento}
• *EMAIL:* ${api.data.Email}
• *TELEFONE:* ${api.data.Telefone}
• *TIPO:* ${api.data.Tipo}

PARENTES:

• *MÃE:* ${api.data.Mãe}
• *PAI:* ${api.data.Pai}

ENDEREÇO:

• *ESTADO:* ${api.data.Estado}
• *CIDADE:* ${api.data.Cidade}
• *BAIRRO:* ${api.data.Bairro}
• *CEP:* ${api.data.Cep}
• *RUA:* ${api.data.Logradouro}
• *NUMERO:* ${api.data.Número}

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
} else {
    m.reply(`⚠️ CPF NÃO ENCONTRADO!`)
}
if (apii === apii.error) throw (`Cpf invalido ou não encontrado.`)
                    }
                    if (premm2 != 's') {
                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    imageMessage: message22.imageMessage,
                                    hydratedContentText: txt2,
                                    hydratedButtons: [{
                                        quickReplyButton: {
                                            displayText: '💸 Planos',
                                            id: 'preços'
                                        }  
                                    }]
                                }
                            }
                        }), { userJid: m.chat, quoted: m })
                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                    }
break

                 case 'cpf3':
                 
                    if (premm2 != 'n') {
                if(!text) return m.reply (`Digite um cpf. | Exemplo: /cpf3 00000000868`)
				var query = text
				.split('.').join('')
				.split('-').join('');
				if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nUse assim: /cpf3 00000000868');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /cpf3 00000000868');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                apii = await fetchJson(`${apidarkbuscas}/cpf3/${text}/${acess}`)
                api.data = apii
                if (apii.Cpf != undefined) {
                 consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════

INFORMAÇÕES DO CPF:

• *CPF:* ${api.data.Cpf}
• *CNS:* ${api.data.Cns}
• *RG:* ${api.data.Rg}
• *CNS:* ${api.data.Cns}
• *EXPEDIÇÃO:* ${api.data.DataDeExpedição}
• *ORGÃO EXPEDIDOR:* ${api.data.OrgãoExpedidor}
• *RG UF:* ${api.data.UfRg}

INFORMAÇÕES DA PESSOA:

• *NOME:* ${api.data.Nome}
• *SEXO:* ${api.data.Sexo}
• *NASCIMENTO:* ${api.data.Nascimento}
• *IDADE:* ${api.data.Idade}
• *COR:* ${api.data.Cor}
• *SIGNO:* ${api.data.Signo}
• *TIPO SANGUÍNEO:* ${api.data.TipoSanguíneo}
• *NACIONALIDADE:* ${api.data.Nacionalidade}
• *ESTADO NATAL:* ${api.data.EstadoDeNascimento}
• *CIDADE NATAL:* ${api.data.CidadeDeNascimento}
• *EMAIL:* ${api.data.Email}
• *TELEFONE:* ${api.data.Telefone}
• *TIPO:* ${api.data.Tipo}

PARENTES:

• *MÃE:* ${api.data.Mãe}
• *PAI:* ${api.data.Pai}

ENDEREÇO:

• *ESTADO:* ${api.data.Estado}
• *CIDADE:* ${api.data.Cidade}
• *BAIRRO:* ${api.data.Bairro}
• *CEP:* ${api.data.Cep}
• *RUA:* ${api.data.Logradouro}
• *NUMERO:* ${api.data.Número}

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
} else {
    m.reply(`⚠️ CPF NÃO ENCONTRADO!`)
}

if (apii === apii.error) throw (`Cpf invalido ou não encontrado.`)
                    }
                    if (premm2 != 's') {
                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    imageMessage: message22.imageMessage,
                                    hydratedContentText: txt2,
                                    hydratedButtons: [{
                                        quickReplyButton: {
                                            displayText: '💸 Planos',
                                            id: 'preços'
                                        }  
                                    }]
                                }
                            }
                        }), { userJid: m.chat, quoted: m })
                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                    }
                break


                    case 'puxar':

                        if (!m.isGroup) return m.reply (mess.group)
if (!isCreator) return m.reply (mess.owner)
                        if (premm2 != 'n') {
                       
                    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+''
                    
                    var exemplo = "Aprendendo JavaScript na DevMedia!";
    var resultado = users.replace("@s.whatsapp.net", "");
    var resultado2 = resultado.replace("55", "");
    var resultado3 = resultado2.replace(/(\d{2})/, "$19")
    const checkmm = users ? 's' : 'n' 
   if (checkmm != 's')  return m.reply(`Marque o @ de uma pessoa do grupo, ou marque uma mensagem | Exemplo: /${command} @\n\n Ou apenas marque uma mensagem com /${command}`)
    if(resultado2.length < 11 || resultado2.length > 11) {
        m.reply(`Identifiquei que esse número marcado não tem 11 digitos, mas ja arrumei certinho e vou tentar puxar.\n\nEra assim: *${resultado2}*\nDeixei assim: *${resultado3}*\n\n Caso eu tenha configurado errado, ajuste manualmente e puxe usando o /tel`)
         xx = await fetchJson(`${apidarkbuscas}/telefone/${resultado3}/${acess}`)
       
   if (xx.Nome != undefined) {
    consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════
            
 INFORMAÇÕES:

• *NOME:* ${xx.Nome}
• *CPF:* ${xx.CpfCnpj} 

 ENDEREÇO:

 • *ESTADO:* ${xx.Estado}
 • *CIDADE:* ${xx.Cidade}
 • *BAIRRO:* ${xx.Bairro}
 • *COMPLEMENTO:* ${xx.Complemento}
 • *RUA:* ${xx.Logradouro}
 • *NUMERO:* ${xx.Número}

 • Usuario: ${pushname}

 🔛 BY: ISA BOT
 
 ━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
  
} else {
    
    m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
}
    } else {
    m.reply(`Aguarde ${pushname}, estou consultando os dados dessa pessoa...`)
    xx = await fetchJson(`${apidarkbuscas}/telefone/${resultado2}/${acess}`)
   if (xx.Nome != undefined) {
    consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════
            
 INFORMAÇÕES:

• *NOME:* ${xx.Nome}
• *CPF:* ${xx.CpfCnpj} 

 ENDEREÇO:

 • *ESTADO:* ${xx.Estado}
 • *CIDADE:* ${xx.Cidade}
 • *BAIRRO:* ${xx.Bairro}
 • *COMPLEMENTO:* ${xx.Complemento}
 • *RUA:* ${xx.Logradouro}
 • *NUMERO:* ${xx.Número}

━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
  
} else {
    
    m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
}
    }
}
if (premm2 != 's') {
    txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
    let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
    const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                imageMessage: message22.imageMessage,
                hydratedContentText: txt2,
                hydratedButtons: [{
                    quickReplyButton: {
                        displayText: '💸 Planos',
                        id: 'preços'
                    }  
                }]
            }
        }
    }), { userJid: m.chat, quoted: m })
    isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
}
    break

                     
                    case 'check':
                        if(!isPremium2) {
                          m.reply(`Não, você não tem Premium.`)
                        } else {
                            m.reply(`Sim, você tem premium!`)
                        }
                        break
                       
                            case 'testsend':
                                isa.sendMessage(`120363039363334975@g.us`, {text: 'a'}, m)
                                break
                            case 'getid':
                                m.reply(m.chat)
                                break
                                case 'tel':
                                    case 'telefone':  {
                                    if(!text) return m.reply (`Digite um telefone. | Exemplo: /telefone 16996273400`)
                                    var query = text
                                    .split('+').join('')
                                    .split('-').join('')
                                    .split(' ').join('')
                                    .split('(').join('')
                                    .split(')').join('');
                                    if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nO número deve conter 11 dígitos!\nUso: /telefone 16996273400');
                                    if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /telefone 16996273400');
                                    m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                                    xx = await fetchJson(`${apidarkbuscas}/telefone/${text}/${acess}`)
                    
                                    if (xx.CpfCnpj != undefined) {
                                    let buttonsxx = [
                                                {buttonId: `/cpf ${xx.CpfCnpj}`, buttonText: {displayText: 'Consulta Completa'}, type: 1},
                                                {buttonId: `/telxx ${text}`, buttonText: {displayText: 'Consulta Simples (Api 1)'}, type: 1},
                                                {buttonId: `/tel4 ${text}`, buttonText: {displayText: 'Consulta Simples (Api 2)'}, type: 1},
                                            ]
                                            let buttonMessage = {
                                                text: `Número encontrado!\n\nEscolha o tipo de consulta abaixo, caso uma não funcione, tente a outra.`,
                                                footer: isa.user.name,
                                                buttons: buttonsxx,
                                                headerType: 4
                                            }
                                            isa.sendMessage(m.chat, buttonMessage, { quoted: m })
                                        }else {
                                            m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
                                        }
                                    }
                                    break
                    
                                       
break
            case 'telxx':
                case 'telefonexx':
                    if (premm2 != 'n') {
                       if(!text) return m.reply (`Digite um telefone. | Exemplo: /telefone 16996273400`)
                var query = text
				.split('+').join('')
				.split('-').join('')
				.split(' ').join('')
				.split('(').join('')
				.split(')').join('');
				if(query.length < 11 || query.length > 11) return m.reply('*ERRO*\nO número deve conter 11 dígitos!\nUso: /telefone 16996273400');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /telefone 16996273400');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                xx = await fetchJson(`${apidarkbuscas}/telefone/${text}/${acess}`)
 pp = `•`
 if (xx.Nome != undefined) {
    consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════
            
 INFORMAÇÕES:

• *NOME:* ${xx.Nome}
• *CPF:* ${xx.CpfCnpj} 

 ENDEREÇO:

 • *ESTADO:* ${xx.Estado}
 • *CIDADE:* ${xx.Cidade}
 • *BAIRRO:* ${xx.Bairro}
 • *COMPLEMENTO:* ${xx.Complemento}
 • *RUA:* ${xx.Logradouro}
 • *NUMERO:* ${xx.Número}

 • Usuario: ${pushname}

 🔛 BY: ISA BOT
 
 ━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
} else {
    
    m.reply(`⚠️ TELEFONE NÃO ENCONTRADO!`)
}
 
                    } 
                    
                    if (premm2 != 's') {
                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    imageMessage: message22.imageMessage,
                                    hydratedContentText: txt2,
                                    hydratedButtons: [{
                                        quickReplyButton: {
                                            displayText: '💸 Planos',
                                            id: 'preços'
                                        }  
                                    }]
                                }
                            }
                        }), { userJid: m.chat, quoted: m })
                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                    }
                
                
                break

                 case 'bin':
                    if (premm2 != 'n') {
                       if(!text) return m.reply (`Digite uma bin. | Exemplo: /bin 550209`)
                var query = text
				.split('+').join('')
				.split('-').join('')
				.split(' ').join('')
				.split('(').join('')
				.split(')').join('');
				if(isNaN(query)) return m.reply('*ERRO*\nUse assim: /bin 550209');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                xx = await fetchJson(`https://bin-checker.net/api/${text}`)
 
    consulta = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════
            
 INFORMAÇÕES:

• *ESQUEMA:* ${xx.scheme}
• *TIPO:* ${xx.type} 
• *LEVEL:* ${xx.level}

 *PÁIS:*

• *CODE:* ${xx.country.code}
• *NOME:* ${xx.country.name}

 *BANCO:*

• *NOME:* ${xx.bank.name}
• *SITE:* ${xx.bank.website}
• *TELEFONE:* ${xx.bank.phone}

• Usuario: ${pushname}

 🔛 BY: ISA BOT
 
 ━━━━━━━━━━━━━━━━━━`
m.reply(consulta)
 
                    } 
                    
                    if (premm2 != 's') {
                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    imageMessage: message22.imageMessage,
                                    hydratedContentText: txt2,
                                    hydratedButtons: [{
                                        quickReplyButton: {
                                            displayText: '💸 Planos',
                                            id: 'preços'
                                        }  
                                    }]
                                }
                            }
                        }), { userJid: m.chat, quoted: m })
                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                    }
                
                
                break
                 case 'placa':
                case 'plac':
                 
                    if (premm2 != 'n') {
                if(!text) return m.reply (`Digite uma placa. | Exemplo: /placa JYE9708`)
                var query = text
				if(query.length < 7 || query.length > 11) return m.reply('*ERRO*\nA placa deve conter 7 dígitos!\nUso: /placa JYE9708');
                m.reply(`Aguarde ${pushname}, estou consultando os dados...`)
                xx = await fetchJson(`${apidarkbuscas}/placa/${text}/${acess}`)

                api = await axios.get(`${apidarkbuscas}/placa/${text}/${acess}`)
if (xx.Nome != undefined) {



  retorno = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════

• *PLACA:* ${xx.Placa}
• *SITUAÇÃO:* ${xx.Situação}
  
• *MARCA:* ${xx.MarcaModelo}
• *COR:* ${xx.Cor}
• *DATA DE FABRICAÇÃO:* ${xx.AnoFabricação}
  
• *MUNICIPIO:* ${xx.Cor}
• *ESTADO:* ${xx.Cor}
• *CHASSI:* ${xx.Chassi}

• *RENAVAM:* ${xx.Renavam}
• *UF FATURADO:* ${xx.UfFaturado}

• *TIPO VEICULO:* ${xx.TipoVeiculo}
• *ESPECIE:* ${xx.Especie}
• *CATEGORIA:* ${xx.Categoria}
• *COMBUSTIVEL:* ${xx.Combustivel}

• *POTENCIA:* ${xx.Potencia}
• *CILINDRADAS:* ${xx.Cilindradas}
• *NACIONALIDADE:* ${xx.Nacionalidade}
• *CAPACIDADE MAXIMA:* ${xx.QuantidadeDePassageiros}
• *QUANTIDADE EIXOS:* ${xx.QuantidadeEixos}

• *ATUALIZAÇÃO:* ${xx.AtualizaçãoVeiculo}
• *ROUBO/FURTO:* ${xx.RouboFurto}
• *REMARCAÇÃO CHASSI:* ${xx.RemarcaçãoChassi}

• *LICENCIAMENTO:* ${xx.Licenciamento}
• *EMISSÃO CRV:* ${xx.EmissãoUltimoCrv}

• *NOME:* ${xx.Nome}
• *CPF/CNPJ:* ${xx.CpfCnpj}

━━━━━━━━━━━━━━━━━━`

m.reply(retorno)
  
} else {
    
    m.reply(`⚠️ PLACA NÃO ENCONTRADA!`)
}
                    }
                    if (premm2 != 's') {
                        txt2 = `Ei, para você usar esse comando, você precisa ser vip! Adquira um de meus planos e se divirta com diversas consultas ilimitadas.`
                        let message22 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                        const template22 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                            templateMessage: {
                                hydratedTemplate: {
                                    imageMessage: message22.imageMessage,
                                    hydratedContentText: txt2,
                                    hydratedButtons: [{
                                        quickReplyButton: {
                                            displayText: '💸 Planos',
                                            id: 'preços'
                                        }  
                                    }]
                                }
                            }
                        }), { userJid: m.chat, quoted: m })
                        isa.relayMessage(m.chat, template22.message, { messageId: template22.key.id })
                    }
                break
             case 'owner': case 'creator': {
                isa.sendContact(m.chat, global.owner, m)
            }
            break

            

            
                

                    

           case 'consul':
               case 'consultas':
            const sections = [
                {
                title: "Consultar Telefone (3 Módulos)",
                rows: [
                    {title: "Tel", rowId: "/tel", description: "3 tipos de Consultas."},
                    {title: "Puxar", rowId: "/puxar", description: "Digite /puxar e marque uma pessoa."},
                    {title: "Localizar", rowId: "/localizar", description: "Digite /localizar e marque uma pessoa. | Irei localizar o número marcado"}
                ]
                },
               {
                title: "Consultar CPF (3 Módulos)",
                rows: [
                    {title: "Cpf", rowId: "/cpf", description: "Puxada Completa."},
                    {title: "Cpf2", rowId: "/cpf2", description: "Puxada Completa."},
                    {title: "Cpf3", rowId: "/cpf3", description: "Puxada Completa."}
                ]
                },
                {
                    title: "Consultar Nome (2 Módulos)",
                    rows: [
                        {title: "Nome", rowId: "/nome", description: "Puxada Simples."},
                        {title: "Nome2", rowId: "/nome2", description: "Puxada Completa."},
                        
                    ]
                    
                    },
                    {
                        title: "Consultar Placa:",
                        rows: [
                            {title: "Placa", rowId: "/placa", description: "Puxada Completa."},
                            
                        ]
                        
                        },
                        {
                            title: "Consultar Cep:",
                            rows: [
                                {title: "Cep", rowId: "/cep", description: "Puxada Completa."},
                                
                            ]
                            
                            },
                        {
                            title: "Consultar Bin:",
                            rows: [
                                {title: "Bin", rowId: "/bin", description: "Puxada Completa."},
                                
                            ]
                            
                            }
            ]
            
             txtf = `━━━━━━━━━━━━━━━━━━
🔘 Contrate agora o mais completo bot de consultas;
 
🔘 Consultas online 24h por dia, pague através do Mercado Pago, boleto ou Pix.

━━━━━━━━━━━━━━━━━━`
            const listMessage = {
               
              text: txtf,
              footer: "Clique em Consultas abaixo para ver as consultas disponíveis",
              title: "*☑️ 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗦*",
              buttonText: "Consultas",
              sections
            }
            
            isa.sendMessage(m.chat, listMessage)
              
break              
            case 'list': case 'menu': case 'help': case '?': {
                anu = `Olá, ${pushname} 👋 

Sou um bot com acesso a diversos bancos de dados. 🧐

(✅) Estou equipado com checkers
(✅) Consultas
(✅) Comandos para grupos
(✅) E conversões

🔘 Selecione uma opção abaixo.`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/men.jpg') }, { upload: isa.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '💻 Canal do Meu Dono',
                                    url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
                                },
                                urlButton: {
                                    displayText: '👥 Grupo Oficial',
                                    url: 'https://chat.whatsapp.com/JU4e0A7O5QmDD3uS0j00Um'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Numero do Meu Dono',
                                    phoneNumber: '+55 17 99113-4416'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🔍 Consultas',
                                    id: 'consul'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '⚙️ Menu Completo',
                                    id: 'menu2'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '💸 Planos',
                                    id: 'preços'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                isa.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

            case 'menu2':  {
                anu = `Olá,  ${pushname} 👋

┏━「💟 *FIGURINHA*」━┓
*┃ •*/F
*┃ •*/Semfundo
┗━━━━━━━━━━━━━━┛

┏━「💬 *GRUPOS*」━┓
*┃ •*/Setname
*┃ •*/Setdesc
*┃ •*/Setftgp
*┃ •*/Marcar
*┃ •*/Hidetag
*┃ •*/Gp abrir
*┃ •*/Gp fechar
*┃ •*/Modoedit abrir
*┃ •*/Modoedit fechar
*┃ •*/Linkgp
*┃ •*/Del
*┃ •*/Bcgp
*┃ •*/Bc
*┃ •*/Infomsg
*┃ •*/Onlines
*┃ •*/Kick
*┃ •*/Add
*┃ •*/Reviver
*┃ •*/Promote
*┃ •*/Demote
*┃ •*/Tempban
┗━━━━━━━━━━━━━━┛

┏━「⚙️ *TOOLS*」━┓
*┃ •*/Codificar
*┃ •*/Decodificar
*┃ •*/Toaud
*┃ •*/Tomp3
*┃ •*/Tourl
┗━━━━━━━━━━━━━━┛

┏━「🔎 *PESQUISA*」━┓
*┃ •*/Yts
*┃ •*/Google
*┃ •*/Gimagem
*┃ •*/Pinterest
┗━━━━━━━━━━━━━━┛

┏━「🖼 *IMAGENS*」━┓
*┃ •*/Metadinha
*┃ •*/Coffe
*┃ •*/Wallpaper
*┃ •*/Wikimedia
┗━━━━━━━━━━━━━━┛

┏━「🎥 *YOUTUBE*」━┓
*┃ •*/Play
┗━━━━━━━━━━━━━━┛

┏━「🔊 *VOICE CHANGER*」━┓
*┃ •*/Bass
*┃ •*/Blown
*┃ •*/Deep
*┃ •*/Earrape
*┃ •*/Fast
*┃ •*/Fat
*┃ •*/Nightcore
*┃ •*/Reverse
*┃ •*/Robot
*┃ •*/Slow
*┃ •*/Smooth
*┃ •*/Tupai
┗━━━━━━━━━━━━━━┛

┏━「👤 *DONO*」━┓
*┃ •*/Public
*┃ •*/Self
*┃ •*/Setftbot
┗━━━━━━━━━━━━━┛`
                let messagex = await prepareWAMessageMedia({ image: fs.readFileSync('./media/isa.jpg') }, { upload: isa.waUploadToServer })
                const templatex = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: messagex.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '💻 Canal do Meu Dono',
                                    url: 'https://www.youtube.com/channel/UCcNXUT8f4grmNxQCxiZX95Q'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Numero do Meu Dono',
                                    phoneNumber: '+55 17 99113-4416'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🔍 Consultas',
                                    id: 'consul'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '💸 Planos',
                                    id: 'preços'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '💬 Adicione-me em um Grupo',
                                    id: 'gpadc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                isa.relayMessage(m.chat, templatex.message, { messageId: templatex.key.id })
            }
            break


           
               
             
            case 'gpadc':
                txt = `Compre o plano de grupo!`
                let message2 = await prepareWAMessageMedia({ image: fs.readFileSync('./media/preços.png') }, { upload: isa.waUploadToServer })
                const template2 = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message2.imageMessage,
                            hydratedContentText: txt,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: '💸 Planos',
                                    id: 'preços'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                isa.relayMessage(m.chat, template2.message, { messageId: template2.key.id })
                break
            case 'preços':
                txt = `☑️ 𝗣𝗟𝗔𝗡𝗢𝗦 𝗘 𝗩𝗔𝗟𝗢𝗥𝗘𝗦

━━━━━━━━━━━━━━━━━━
⚜ CONSULTAS DISPONÍVEIS

🔘 CPF
🔘 CNS
🔘 CNPJ
🔘 NOME
🔘 PLACA 
🔘 TELEFONE

━━━━━━━━━━━━━━━━━━
⚜ CONSULTAS ILIMITADA  

🔘 FAÇA CONSULTAS SEM LIMITE

━━━━━━━━━━━━━━━━━━
⚜ PLANOS  INDIVIDUAIS

🔘 07 DIAS = R$ 5,00
🔘 15 DIAS = R$ 10,00
🔘 30 DIAS = R$ 25,00

━━━━━━━━━━━━━━━━━━
⚜ PLANOS PARA GRUPOS

🔘 07 DIAS = R$ 10,00
🔘 15 DIAS = R$ 15,00
🔘 30 DIAS = R$ 35,00

━━━━━━━━━━━━━━━━━━
⚜ FORMAS DE PAGAMENTO

🔘 BOLETO
🔘 TRANSFERÊNCIA PIX

━━━━━━━━━━━━━━━━━━

Unico número de venda:

wa.me/+5517991134416`
m.reply(txt)
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return console.log(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    isa.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
       console.log(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
