import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RootHome from '../page/home';
configure({
    adapter: new Adapter()
})
// test("Test Home", () => {
//     const wrapper = shallow(<RootHome />); 
//     console.log(wrapper.getElements());
//     const button = wrapper.find("button");
//     expect(button).toHaveLength(2)
// })