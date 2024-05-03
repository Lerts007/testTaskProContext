import { createStore } from "vuex";

export default createStore({
  state: {
    allItems: [],
    lists: [
      {
        name: "List 1",
        collapsed: false,
        selected: false,
        indeterminate: false,
        sort: true,
        allItems: [],
        items: [
          { name: "Item 1", quantity: 40, color: "#ff0000", selected: false },
          { name: "Item 2", quantity: 10, color: "#00ff00", selected: false },
          { name: "Item 3", quantity: 15, color: "#ffbb00", selected: false },
          { name: "Item 4", quantity: 25, color: "#bd47b9", selected: false },
        ],
      },
      {
        name: "List 2",
        collapsed: false,
        selected: false,
        indeterminate: false,
        sort: true,
        allItems: [],
        items: [
          { name: "Item 1", quantity: 15, color: "#32b1f1", selected: false },
          { name: "Item 2", quantity: 33, color: "#00ff03", selected: false },
          { name: "Item 3", quantity: 23, color: "#32A434", selected: false },
          { name: "Item 4", quantity: 13, color: "#5900ff", selected: false },
        ],
      },
      {
        name: "List 3",
        collapsed: false,
        selected: false,
        indeterminate: false,
        sort: true,
        allItems: [],
        items: [
          { name: "Item 1", quantity: 15, color: "#319cb9", selected: false },
          { name: "Item 2", quantity: 6, color: "#ff00ae", selected: false },
          { name: "Item 3", quantity: 18, color: "#ebadc3", selected: false },
          { name: "Item 4", quantity: 13, color: "#34f1fe", selected: false },
        ],
      },
      {
        name: "List 4",
        collapsed: false,
        selected: false,
        indeterminate: false,
        sort: true,
        allItems: [],
        items: [
          { name: "Item 1", quantity: 15, color: "#eeff00", selected: false },
          { name: "Item 2", quantity: 45, color: "#9c9c9c", selected: false },
          { name: "Item 3", quantity: 3, color: "#70b5ff", selected: false },
          { name: "Item 4", quantity: 12, color: "#00ff03", selected: false },
        ],
      },
      {
        name: "List 5",
        collapsed: false,
        selected: false,
        indeterminate: false,
        sort: true,
        allItems: [],
        items: [
          { name: "Item 1", quantity: 15, color: "#32b1f1", selected: false },
          { name: "Item 2", quantity: 7, color: "#ffA53d", selected: false },
          { name: "Item 3", quantity: 31, color: "#b858e4", selected: false },
          { name: "Item 4", quantity: 25, color: "#990059", selected: false },
        ],
      },
    ],
  },
  mutations: {
    // выбор item в list
    itemSelected(state, index) {
      const list = state.lists[index];
      this.commit("mixedItems", index);

      // проверка для промежуточного чекбокса
      for (const item of list.items) {
        if (item.selected) {
          list.indeterminate = true;
          break;
        }
        list.indeterminate = false;
      }

      // проверка все ли выбраны item в Listе
      const allSelected = list.items.every((item) => item.selected);
      if (allSelected) {
        list.selected = allSelected;
        list.indeterminate = !allSelected;
      } else {
        list.selected = allSelected;
      }
    },

    // Если выбран List, то всем его item тоже выбираются
    selectAllItems(state, index) {
      const list = state.lists[index];

      const allSelected = list.items.every((item) => item.selected);
      list.items.forEach((item) => (item.selected = !allSelected));
    },

    // сворачивание List
    toggleList(state, index) {
      const list = state.lists[index];

      list.collapsed = !list.collapsed;
    },

    // удаление при нажатии в правой части
    removeItem(state, { index, indexItem, indexAllItems }) {
      const list = state.lists[index];
      list.items[indexItem].quantity--;
      list.allItems.splice(indexAllItems, 1);
    },

    // перемешивание item
    mixedItems(state, index) {
      const list = state.lists[index];

      list.allItems = [];

      // объеденяю все items в один массив
      for (const item of list.items) {
        if (item.selected) {
          for (let i = 0; i < item.quantity; i++) {
            list.allItems.push({
              indexItem: list.items.indexOf(item),
              color: item.color,
              selected: true,
            });
          }
        }
      }

      // перемешиваю массив
      for (let i = list.allItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list.allItems[i], list.allItems[j]] = [
          list.allItems[j],
          list.allItems[i],
        ];
      }
    },
  },
});
