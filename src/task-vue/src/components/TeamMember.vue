<template>
  <div class="team-member" @click.prevent="contactMe">
    <div class="row g-0">
      <div class="col-4">
        <img :src="teamMember.image ?? '/no-img.png'"
             :alt="fullName" class="team-member__image">
      </div>
      <div class="col-8 p-3">
        <div class="">
          <span class="team-member__name">{{ fullName }}</span>
          <p class="team-member__job">{{ jobs || 'Liiper' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ITeamMember} from "@/services/team-service";

export default {
  name: "TeamMember",
  props: {
    teamMember: {
      type: ITeamMember,
      required: true
    }
  },
  computed: {
    fullName: {
      get() {
        return `${this.teamMember.firstName} ${this.teamMember.lastName}`;
      }
    },
    jobs: {
      get() {
        return this.teamMember.job.join(", ");
      }
    }
  },
  methods: {
    contactMe() {
      this.$emit("selected", {teamMember: this.teamMember});
    }
  }
};
</script>

<style lang="scss" scoped>
.team-member {
  img, span, p {
    cursor: pointer;
  }

  .team-member__name {
    font-weight: 700;
  }

  .team-member__job {
    color: #a5a59f;
    font-size: 0.9rem;
    margin: 0rem;
  }

  .team-member__image {
    width: 100%;
    border-radius: 50%;
  }
}
</style>
