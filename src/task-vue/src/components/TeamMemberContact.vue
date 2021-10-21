<template>
  <div class="card mt-3 mb-3">
    <div class="card-body">
      <h2>{{ teamMember.firstName }} {{ teamMember.lastName }}</h2>
      <p>To: {{ teamMember.email }}</p>

      <form class="form mt-3" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Your Email address</label>
          <input type="email" class="form-control" id="email"
                 placeholder="you@domain.com" v-model="emailFrom">
        </div>
        <div class="mb-3">
          <label for="contact-body" class="form-label">Message</label>
          <textarea class="form-control" id="contact-body" rows="3"
                    v-model="message" placeholder="Hi 👋"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Send</button>
      </form>

    </div>
  </div>

</template>

<script lang="ts">
import { ITeamMember } from "@/services/team-service";

export default {
  name: "TeamMemberContact",
  props: {
    teamMember: {
      type: ITeamMember,
      required: true
    }
  },
  data() {
    return {
      emailFrom: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {
      // TODO
      window.location = `mailto:${this.teamMember.email}?body=${encodeURIComponent(this.message)}`;
    }
  }
};
</script>

<style lang="scss" scoped>
button[type=submit] {
  color: #ffffff;
}
</style>