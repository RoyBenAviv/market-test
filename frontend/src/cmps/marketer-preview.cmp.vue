<template>
  <section class="marketer-preview">
    {{ marketer }}
    <tr>
      <td>{{ marketer?.firstName || "not required" }}</td>
      <td>{{ marketer?.lastName || "not required" }}</td>
      <td>{{ marketer?.email }}</td>
      <td>{{ marketer?.website || "not required" }}</td>
      <td>{{ marketer?.linkedin || "not required" }}</td>
      <td>{{ marketer?.experience || "not required" }}</td>
      <td>{{ marketer?.budget || "not required" }}</td>
      <td>{{ marketer?.createdAt || "not required" }}</td>
    </tr>
  </section>
</template>

<script>
export default {
  name: "marketer-preview",
  props: {
    marketer: Object,
  },
  computed: {},
};
</script>
