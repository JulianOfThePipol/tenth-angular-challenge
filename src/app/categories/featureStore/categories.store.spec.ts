import { categoryStateMock } from "src/app/mocks/data.mock";
import * as categoriesStore from "./categories.reducers";



describe('Store: categories', () => {
    it('should have initial state of isOn false', () => {
      const expected = categoryStateMock;
      const action = { type: 'addCategories' } as any;
      expect(categoriesStore.categoryReducers(categoryStateMock, action)).toEqual(expected);
    });

    it('Should have a default state', () => {
        const { initialState } = categoriesStore;
        const action = {type: ''};
        const state = categoriesStore.categoryReducers(undefined, action);
        expect(state).toBe(initialState);
        expect(state.categories.length).toBe(0)
    })
});