<template>
  <div class="facebook-comments">
  </div>
</template>

<script>
// Helpers
import {
  loadFbSdk
} from './helpers.js'

export default {
  name: 'facebook-comments',
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v2.10'
    }
  },
  data() {
    return {
      isWorking: false,
      isConnected: false
    }
  },
  mounted() {
    this.isWorking = true
    loadFbSdk(this.appId, this.version)
      .then(getFbLoginStatus)
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true
        }
        this.isWorking = false
        /** Event `get-initial-status` to be deprecated in next major version! */
        this.$emit('get-initial-status', response)
        this.$emit('sdk-loaded', {
          isConnected: this.isConnected,
          FB: window.FB
        })
      })
  }
}
</script>
