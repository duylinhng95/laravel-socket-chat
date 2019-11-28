require('./bootstrap');

class Chat {
    constructor() {
        this.init()
    }

    init() {
        this.listen()
        this.config()
    }

    config() {
        this.channel = {}
        this.element = {
            messageContent: $("#message-content")
        }
    }

    listen() {
        this.listenChannel()
    }

    listenChannel() {
        let channel = Echo.channel('laravel_database_my-chat');
        console.log(channel)
        const self = this
        channel.listen('.my-event', function(data) {
            self.element.messageContent.append(data.message)
        });
    }
}

export default new Chat
