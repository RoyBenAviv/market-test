<template>
  <section class="marketer-preview">
    {{ marketer }}
    <tr>
      <td>{{ marketer?.firstName }}</td>
      <td>{{ marketer?.lastName }}</td>
      <td>{{ marketer?.email }}</td>
      <td>{{ marketer?.website }}</td>
      <td>{{ marketer?.linkedin }}</td>
      <td>{{ marketer?.experience }}</td>
      <td>{{ marketer?.budget }}</td>
      <td>{{ marketer?.createdAt }}</td>
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
