<template>
    <NavBarComponent/>
    <div class="container">
        <div class="row justify-content-center">
            <div id="profile-pic-div">
                <router-link :to="{ name: 'ContactSudarshan'}">
                    <img id="profile-pic" class="img-thumbnail float-start" v-bind:src="ProfilePicture" />
                </router-link>
            </div>
            <div>
                <p>
                    Greetings,<br/>
                    My name is Sudarshan Shantaram Choudhari. At present my age is {{years}}. 
                    I am born and raised in India. My hometown is Pune, Maharashtra. 
                    I completed my school and highschool in India and undergrad in United States.
                    For more information on my qualifications please navigate through the Education tab in the navbar.
                    
                </p>                
            </div>
        </div>
    </div>
</template>

<script>
import NavBarComponent from "./NavBarComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import ProfilePicture from "/images/sudarshanProfile.jpg";

    export default {
        components: {
            'NavBarComponent': NavBarComponent,
            'FooterComponent': FooterComponent
        },
        data: function () {
            return {
                ProfilePicture: ProfilePicture
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
#profile-pic{
    border-radius: 50%;
    height: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#profile-pic:hover{
    box-shadow: 0 4px 8px 0 rgba(114, 173, 216, 0.8), 0 6px 20px 0 rgba(114, 173, 216, 0.8);
}
#profile-pic-div{
    
}
</style>
