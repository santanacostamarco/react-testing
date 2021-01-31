import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Home from './Home';

it("should render the homepage for non logged in users", () => {
  const app = mount(<App isLoggedIn={false} username={null} />)

  expect(app.find(Home)).toHaveLength(0)
  expect(app.find('p').at(0).text()).toEqual("Hello, visitor. Sign in to continue.")
})

it("should render the homepage for the logged in user (Heisenberg)", () => {
  const app = mount(<App isLoggedIn username="Heisenberg" />)

  expect(app.find(Home)).toHaveLength(1)
  expect(app.find('p').at(0).text()).toEqual("Welcome, Heisenberg!")
  expect(app.find('li').at(0).text()).toEqual("8am - Chemistry classes at school")
  expect(app.find('li').at(1).text()).toEqual("12:30pm - Meet Jesse for lunch")
  expect(app.find('li').at(2).text()).toEqual("15pm - Meet Gus at the Pollos Hermanos")
  expect(app.find('li').at(3).text()).toEqual("20pm - Dinner by the pool with Hank and Marie")
})

it("should render the homepage for the logged in user (GusFring)", () => {
  const app = mount(<App isLoggedIn username="GusFring" />)

  expect(app.find(Home)).toHaveLength(1)
  expect(app.find('p').at(0).text()).toEqual("Welcome, GusFring!")
  expect(app.find('li').at(0).text()).toEqual("8am - Meeting with the DEA")
  expect(app.find('li').at(1).text()).toEqual("15pm - Meet Walter at the Pollos Hermanos")
})