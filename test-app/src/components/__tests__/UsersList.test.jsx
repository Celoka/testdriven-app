import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UsersList from '../UserList';

const users = [
    {
        'active': true,
        'email': 'west@yahoo.com',
        'id': 1,
        'username': 'West'
    },
    {
        'active': true,
        'email': 'luska@yahoo.com',
        'id': 2,
        'username': 'Luska'
    }
];

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.children).toBe('West');
});
test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users}/>).toJSON();
    expect(tree).toMatchSnapshot();
});