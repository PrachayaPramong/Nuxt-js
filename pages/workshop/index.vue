<template>
    <div>
        <v-app-bar 
        color="primary"
        dense 
        flat 
        dark
        >
            <v-toolbar-title>Register workshop</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="mt-8 text-primary text-title text-center">
                        {{ list.date }}
                    </div>
                </v-col>
                <v-col cols="12">
                    <Card 
                    v-for="item in list.sessions"
                    :session="item"
                    :key="item.id"
                    :active="selectedWorkshop.includes(item.id)"
                    v-on:moreDetail="moreDetail(item)"
                    v-on:chooseWorkshop="chooseWorkshop(item)"/>
                    
                </v-col>
                <v-col cols="12">
                    <div class="set-padding">
                        <v-btn rounded color="primary" dark class="w-100 mt-3 my-btn" @click="next">Next</v-btn>
                    </div>
                    <div v-if="index > 0" class="w-100 mt-3 text-center my-btn text-primary" @click="back">Back</div>
                </v-col>
            </v-row>
            
            <v-dialog v-model="isShowDialog" max-width="290">
                <v-img class="white--text align-end" height="200px" :src="dialog.image"></v-img>
                <v-card>
                    <v-card-title class="headline"> {{ dialog.toppic }} </v-card-title> 
                    <v-card-text>
                        Date : {{ list.date }} <p></p>
                        Time : {{ dialog.time}}<p></p>
                        Content : {{ dialog.content }} <p></p>
                        By : {{ dialog.spaker }}
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="isShowDialog = false">
                        OK
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>   
</template>

<script>
import Card from '~/components/Card'
export default {
    components: {
        Card
    },
    data(){
        return {
            isShowDialog: false,
            index:0,
            dialog:{
                title: '',
                time: '',
                content: '',
                image: '',
                spaker: '',
                toppic: ''
            },
            selectedWorkshop: [],
            list: [],
            workshop: this.$store.getters.getWorkshop
        }
    },
    mounted(){
        // api
        this.list = this.workshop[this.index]
    },
    methods: {
        back(){
                this.index = this.index-1
                this.list = this.workshop[this.index]
        },
        next(){
            if(this.index == this.workshop.length -1){
                //api save workshop
                this.$axios.patch(`https://register-a5f37-default-rtdb.firebaseio.com/workshop/line:0001.json`, { ...this.selectedWorkshop}).then((res) => {
                this.$router.push('/workshop/done')
                }).catch(e => console.log(e))
            }else{
                this.index = this.index+1
                this.list = this.workshop[this.index]
            }
        },
        moreDetail(item){
            this.isShowDialog = true
            this.dialog = item
        },
        chooseWorkshop(item){
            const listId = this.list.sessions.map(session => session.id)
            this.selectedWorkshop = this.selectedWorkshop.filter(session => !listId.includes(session))
            this.selectedWorkshop.push(item.id)
            
        }
    }
}
</script>
