import React from "react";
import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Viewusers from "./modules/profile/Viewusers";
import { BrowserRouter} from "react-router-dom";


beforeAll(() => {
  configure({ adapter: new Adapter()});
})

const userslist = [
  {id: "id1", first_name: "Fname1", last_name: "Lname1", gender: "male", email: "email1", phone: "phone1", player_index: "index1", id_google: "google1", id_index_category: "cat1", birthdate: "birthdate1", is_admin: "true", level: "level1"},
  {id: "id2", first_name: "Fname2", last_name: "Lname2", gender: "female", email: "email2", phone: "phone2", player_index: "index2", id_google: "google2", id_index_category: "cat2", birthdate: "birthdate2", is_admin: "false", level: "level2"}
];

const reducers = combineReducers({
  profileReducer: () => ({userslist: userslist}),
  googleUserReducer: () => ({user: {isAdmin: "true"}})
});

const fakeStore = createStore(reducers);

fetch = jest.fn()
  .mockImplementation(() =>{
    return Promise.resolve({
      json: () => Promise.resolve(userslist)
    })}
  )


test("all users are displayed in a div", () => {

  const wrapper = mount(
    <Provider store={fakeStore}>
      <BrowserRouter>
        <Viewusers />
      </BrowserRouter>
    </Provider>
  )

  expect.assertions(2);

  expect(wrapper.find('h4').length).toBe(2);
  expect(wrapper.find('h4').at(0).text()).toEqual('Fname1 Lname1');
});
