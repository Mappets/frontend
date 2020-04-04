<template>
    <div>
        <loading :active.sync="isLoading" :is-full-page="fullPage" :loader="loader" :color="color"></loading>
        <div>
            <p>Blank page</p>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import * as webservices from '../utils/webServices';

    export default {
        props: [
            //
        ],
        data() {
            return {
                isLoading: false,
                fullPage: true,
                loader: "dots",
                color: "#007bff",
            }
        },
        methods:{
            update(){
                console.log('Component is updating.');

                this.isLoading = true

                axios.get(webservices.USERS, {
                    //
                })
                .then(response => {
                    this.isLoading = true
                })
                .catch(error => {
                    // Show error toast message
                    this.showErrorToast();
                    this.isLoading = false
                    console.log(error);
                })
            },
            showErrorToast(){
                // Show a toast message
                Vue.$toast.open({
                    message: "The field wasn't changed.",
                    type: 'error',
                    duration: 3000,
                    position: 'top-right',
                    queue: true
                });
            },
            showSuccessToast(){
                // Show a toast message
                Vue.$toast.open({
                    message: 'The field was changed.',
                    type: 'success',
                    duration: 3000,
                    position: 'top-right',
                    queue: true
                });
            }
        },
        mounted() {
            //
        },
        created() {
            //
        },
    }
</script>
