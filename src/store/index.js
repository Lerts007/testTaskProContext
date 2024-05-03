import { createStore } from "vuex";

export default createStore({
  state: {
    lists: [
      {
        name: "List 1",
        collapsed: false,
        selected: false,
        indeterminate: false,
        items: [
          { name: "Item 1", quantity: 5, color: "#ff0000", selected: false },
          { name: "Item 2", quantity: 3, color: "#00ff00", selected: false },
        ],
      },
      {
        name: "List 2",
        collapsed: false,
        selected: false,
        indeterminate: false,
        items: [
          { name: "Item 1", quantity: 5, color: "#ffas00", selected: false },
          { name: "Item 2", quantity: 3, color: "#00ff03", selected: false },
        ],
      },
    ],
  },
  getters: {},
  mutations: {
    itemSelected(state, index) {
      const list = state.lists[index];

      for (const item of list.items) {
        console.log(item);
        if (item.selected) {
          list.indeterminate = true;
          break;
        }
        list.indeterminate = false;
      }

      const allSelected = list.items.every((item) => item.selected);
      if (allSelected) {
        list.selected = allSelected;
        list.indeterminate = !allSelected;
      } else {
        list.selected = allSelected;
      }
    },

    selectAllItems(state, index) {
      const list = state.lists[index];

      const allSelected = list.items.every((item) => item.selected);
      list.items.forEach((item) => (item.selected = !allSelected));
    },
    toggleList(state, index) {
      const list = state.lists[index];

      list.collapsed = !list.collapsed;
    },
  },
  actions: {},
});
