  <template>
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Login</h1>
                        <form @submit.prevent="loggedin">
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            v-model="email"
                            placeholder="Name" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            v-model="password"
                            placeholder="Password" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>
                        </form>
                    </div>

                </div>
            </div>
    </div>
  </template>

  <script>
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import {AUTH_KEY} from '../const'
  import { CometChat } from '@cometchat-pro/chat'
  export default {
    data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
   loggedin(){
     firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Home" });
          console.log(firebase.auth().currentUser.uid);
          this.UID = firebase.auth().currentUser.uid
          console.log(this.UID)
          const user = new CometChat.User(UID);
          user.setName(this.email);
          CometChat.createUser(user, AUTH_KEY).then(
              user => {
                CometChat.login(this.UID, AUTH_KEY).then(
                  user => {
                    console.log("Login Successful:", { user });
                  },
                  error => {
                    console.log("Login failed with exception:", { error });
                  }
                );
                  console.log("user created", user);
              },error => {
                CometChat.login(this.UID, AUTH_KEY).then(
                  user => {
                    console.log("Login Successful:", { user });
                  },
                  error => {
                    console.log("Login failed with exception:", { error });
                  }
                );
                  console.log("error", error);
              }
          )
        })
        .catch(error => {
          this.error = error;
        })
      const UID = firebase.auth().currentUser.uid
      console.log(UID);

    }
  }
 }
</script>
