<template>
  <div class="container-lg p-4">
    <div class="mb-3">
      <h1>Our Team</h1>
      <hr>
    </div>

    <Team :team-members="teamMembers" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Team from "./components/Team.vue";
import { ITeamMember, TeamService } from "@/services/team-service.ts";

@Options({
  components: {
    Team
  },
  data() {
    return {
      teamMembers: new Array()
    };
  },
  mounted() {
    this.teamMembers = new TeamService().getTeamMembers();
  }
})

export default class App extends Vue {
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');
$font-family-base: 'Archivo', sans-serif;

//#region Bootstrap
$primary: #6ea644;
$secondary: #414141;
$body-color: $secondary;
$body-bg: #f7f7f5;

$card-border-width: 0px;
$card-bg: none;

@import "~bootstrap/scss/bootstrap";
@import "~bootstrap-icons/font/bootstrap-icons.css";
//#endregion Bootstrap
</style>
