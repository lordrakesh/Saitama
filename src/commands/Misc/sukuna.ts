import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'saitama',

            description: 'Displays the info.',

            category: 'misc',

            usage: `${client.config.prefix}saitama`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/videos/Sukuna/Saitama-git.mp4'

        ]

        let sukuna = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video, {

            mimetype: Mimetype.gif,

            caption: ` *🥚 Saitama 🥚*\n\n🍁 *Description: Simple Wa Bot Made with Typescript*\n\n🍄 *URL: https://github.com/lordrakesh/Saitama* \n\n 👒 *Guide: https://github.com/lordrakesh/Saitama-Guides*\n` }

        )

    }

}
