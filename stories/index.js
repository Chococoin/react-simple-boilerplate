import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Home from '../src/components/Home';
import About from '../src/components/About';
import Articles from '../src/components/Articles'

storiesOf('Home', module)
  .add('with counter', () => (
    <Home counter={10} increment={action('incremented')}/>
  ));

storiesOf('Articles', module).add('Table', table);


storiesOf('About', module)
  .add('with 2 contributors', aboutStory);


function aboutStory() {
    const contributors = [{
      username: 'gvaldambrini',
      url: 'https://github.com/gvaldambrini',
      avatar: 'https://avatars3.githubusercontent.com/u/2461921?v=3',
      contributions: 10
    }, {
      username: 'rugginoso',
      url: 'https://github.com/rugginoso',
      avatar: 'https://avatars1.githubusercontent.com/u/425276?v=3',
      contributions: 1
    }];

    return (
      <About
        contributors={contributors}
        fetchContributors={action('fetch contributors')}
        loaded={true}/>
    );  
}

function table(){
  const soul = [{id:1, 
                 titulo:'Italia', 
                 cuerpo:'La capital de Italia es Roma.',
                 img:'picofwc.png'
                }, 
                {id:2,
                 titulo:'Venezuela',
                 cuerpo:'La capital de Venezuela  es Caracas.',
                 img:'picofwc.png'
                },
                {id:3,
                 titulo:'Francia',
                 cuerpo:'La capital de Francia es Paris.',
                 img:'picofwc.png'
                }];

                return (
                  <Articles list_art={soul}/>)

}
