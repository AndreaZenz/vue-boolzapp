var app = new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Andrea Valeri',
            avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6a/6a1958164d9ed9751deb297bf6da573937159142_full.jpg'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '03/20/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '03/20/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '03/20/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '03/20/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '03/28/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '03/28/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '01/10/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '01/10/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Michele',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Antonio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giovanni',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Flavio',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Maria',
                avatar: '_io',
                visible: true,
                messages: [
                    {
                        date: '01/10/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '01/10/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
        ],
        activeUser: 0,
        searchInput: "",
        newMessage: "",
        messageActive: {
            index: false,
            show: false
        },
    },
    methods: {

        getLastData(index) {
            //prendiamo la data dell'ultimo messaggio
            return this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
        },

        //funzione che classifica un messaggio in base al suo thi.status e lo stampa a schermo tramite l'indice 
        getMessageClass(index) {
            let thisContact = this.contacts[this.activeUser];
            let messageClass = 'message ' + thisContact.messages[index].status;
            if (this.messageActive.show && this.messageActive.index === index) { //per non sovrapporre messaggi con la tendina
                messageClass += ' z-index-100';
            }
            return messageClass;
        },

        //funzione che rende visibile il contatto con i messaggi tramite l'index
        currentConversation(index) {
            if (this.messageActive.index !== false) { //sistemiamo le opzioni
                this.messageActive.show = false;
                this.messageActive.index = false;
            }
            this.activeUser = index;
        },

        //funzione che mostra le opzioni di un messaggio
        showOption(index) {
            if (this.messageActive.index !== false && this.messageActive.index !== index) {
                this.messageActive.show = false;
                this.messageActive.index = false;
            }
            this.messageActive.show = (this.messageActive.show) ? false : true;
            this.messageActive.index = index;
        },

        //funzione che cancella un messaggio eliminandolo dall'array
        messageCancel(index) {
            this.contacts[this.activeUser].messages.splice(index, 1);
        
            this.messageActive.show = false;
            this.messageActive.index = false;
        },

        formatTime(date) {
            return moment(date).format('hh:mm');
        },

        //Funzione che filtra i nostri contatti in base allo stato di element.visible, collegato ad un v-if nell'html per mostrare o no il contatto nella nostra lista laterale
        filterContacts() {
            this.contacts.forEach((element) => {
                // if (element.name.toLowerCase().startsOf(this.searchInput.toLowerCase()))
                if (element.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        //creiamo una funzione che, collegata ad un event listener invia quanto scritto stampandolo
        messageSending() {
            this.contacts[this.activeUser].messages.push({
                message: this.newMessage,
                date: moment().format('DD/MM/YYYY hh:mm:ss'),
                status: 'sent'
            });
            this.newMessage = '';
            setTimeout(() => {
                this.contacts[this.activeUser].messages.push({
                    message: 'Ok!',
                    date: moment().format('DD/MM/YYYY hh:mm:ss'),
                    status: 'received'
                });
            }, 1000);
        },
    }
})