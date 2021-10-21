<template>
  <transition name="fade">
    <TeamMemberContact :team-member="teamMembersSelected"
                       v-if="teamMembersSelected" />
  </transition>

  <div class="row display-flex">

    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mb-2" v-for="teamMember in teamMembers">
      <TeamMember :team-member="teamMember" @selected="onTeamMemberSelected($event.teamMember)" />
    </div>

  </div>
</template>

<script>
import TeamMember from "@/components/TeamMember.vue";
import TeamMemberContact from "@/components/TeamMemberContact.vue";
import { ITeamMember } from "@/services/team-service";

export default {
  name: "Team",
  components: {
    TeamMember,
    TeamMemberContact
  },
  props: {
    teamMembers: {
      required: true
    }
  },
  data() {
    return {
      teamMembersSelected: null
    };
  },
  methods: {
    onTeamMemberSelected(selected) {
      this.teamMembersSelected = selected;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
