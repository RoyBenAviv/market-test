<template>
  <tr class="marketer-preview">
    <td class="name">{{ marketer?.firstName || "-" }}</td>
    <td class="name">{{ marketer?.lastName || "-" }}</td>
    <td>{{ marketer?.email }}</td>
    <td>{{ marketer?.website || "-" }}</td>
    <td>{{ marketer?.linkedin || "-" }}</td>
    <td>{{ marketer?.experience || "-" }}</td>
    <td>$ {{ marketer?.budget || "-" }}</td>
  </tr>
</template>

<script>
export default {
  name: "marketer-preview",
  props: {
    marketer: Object,
  },
  computed: {},
  created() {
    console.log(this.marketer);
  },
};
</script>
