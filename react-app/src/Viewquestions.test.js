import React from "react";
import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ViewQuestions from "./modules/questions/Viewquestions";
import { BrowserRouter} from "react-router-dom";


beforeAll(() => {
  configure({ adapter: new Adapter()});
})

const questions = [
  {date: "date1", description: "descr1", first_name: "Fname1", id: "id1", id_owner: "owner1", last_name: "Lname1", status: "open", title: "Quest1" },
  {date: "date2", description: "descr2", first_name: "Fname2", id: "id2", id_owner: "owner2", last_name: "Lname2", status: "open", title: "Quest2" }
];

const reducers = combineReducers({
  questionsReducer: () => ({questions: questions}),
  profileReducer: () => ({id_user: "toto"})
});

const fakeStore = createStore(reducers);



fetch = jest.fn()
  .mockImplementation(() =>{
    return Promise.resolve({
      json: () => Promise.resolve(questions)
    })}
  )




test("all questions are displayed in a div", () => {
  const wrapper = mount(
    <Provider store={fakeStore}>
      <BrowserRouter>
        <ViewQuestions />
      </BrowserRouter>
    </Provider>
  )

  expect.assertions(4);

  expect(wrapper.find('div.question_item').length).toBe(2);
  expect(wrapper.find('div.idea_description').length).toBe(2);

  expect(wrapper.find('div.question_item h3').at(0).text()).toEqual('Quest1');
  expect(wrapper.find('div.question_item h3').at(1).text()).toEqual('Quest2');
});
