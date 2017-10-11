var dataUrl = "http://person.cronberg.dk/people?count=10";

Vue.component("person-table", {
  props: ["people"],
  template: "#person-table-template"
});

var app = new Vue({
  el: "#app",
  data: {
    people: [],
    filteredPeople: [],
    filterString: ""
  },
  mounted: function() {
    this.refresh();
  },
  methods: {
    refresh: function() {
      axios.get(dataUrl).then(function(value) {
        app.people = value.data;
      });
    },
    filterPeople: function() {
      app.filteredPeople = app.people.filter(function(obj) {
        return obj.name.toLowerCase().includes(app.filterString.toLowerCase());
      });
    }
  }
});
