import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import NewsList from "./components/NewsList";
import Loader from "./components/Loader";
import NotFoundPage from "./components/NotFoundPage";

const initialState = [
  {
    "source": {
      "id": null,
      "name": "New York Times"
    },
    "author": "Emmanuel Morgan",
    "title": "U.F.C. 264 Live Updates: What to Expect and Live Stream Details - The New York Times",
    "description": "McGregor and Poirier meet in Las Vegas in what could be the biggest spectacle of the year for the Ultimate Fighting Championship.",
    "url": "https://www.nytimes.com/live/2021/07/10/sports/ufc-264-mcgregor-poirier-live",
    "urlToImage": "https://static01.nyt.com/images/2021/07/10/sports/10ufc-live01/merlin_190619520_7c927d1d-f9c2-4a89-93c8-5342a97e0c22-articleLarge.jpg",
    "publishedAt": "2021-07-10T22:39:49Z",
    "content": "LiveUpdated July 10, 2021, 6:54 p.m. ET\r\nJuly 10, 2021, 6:54 p.m. ET\r\nMcGregor and Poirier meet in Las Vegas in what could be the biggest spectacle of the year for the Ultimate Fighting Championship.… [+6133 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "New York Post"
    },
    "author": "Ryan Dunleavy",
    "title": "Falcons linebacker Barkevious Mingo charged with indecency with child - New York Post ",
    "description": "Falcons pass-rusher Barkevious Mingo was arrested earlier this week and charged with indecency with child, sexual contact, according to various reports. He posted a $25,000 bond in Tarrant County, …",
    "url": "https://nypost.com/2021/07/10/falcons-linebacker-barkevious-mingo-charged-with-indecency-with-child/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/07/barkevious-mingo.jpg?quality=90&strip=all&w=1200",
    "publishedAt": "2021-07-10T22:03:00Z",
    "content": "Falcons pass-rusher Barkevious Mingo was arrested earlier this week and charged with indecency with child, sexual contact, according to various reports. He posted a $25,000 bond in Tarrant County, Te… [+1266 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Rob Schneider Suggests Using Guns Against Potential of 3rd Vaccine - TMZ",
    "description": "Schneider doubles down on his hesitancy to get the COVID-19 vaccine, or any others that may follow.",
    "url": "https://www.tmz.com/2021/07/10/rob-schneider-use-guns-second-amendment-covid-vaccine-shot/",
    "urlToImage": "https://imagez.tmz.com/image/3a/16by9/2021/07/10/3a66c042dca64874b7c3ba5ed905e0fa_xl.jpg",
    "publishedAt": "2021-07-10T21:17:00Z",
    "content": "Rob Schneider seems to be saying the best way to ward off the COVID vaccine is with an old Nancy Reagan campaign on drugs -- and if that doesn't work ... maybe flash some ammo.\r\nThe actor -- known fo… [+2316 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "WPLG Local 10"
    },
    "author": "David Dwork, Calvin Hughes",
    "title": "First Lady of Haiti Martine Moïse makes first public statement since assassination of her husband - WPLG Local 10",
    "description": "On Saturday, Haitian First Lady Martine Moïse posted an audio message on her personal Twitter account.",
    "url": "https://www.local10.com/news/local/2021/07/10/first-lady-of-haiti-martine-moise-makes-first-public-statement-since-assassination-of-her-husband/",
    "urlToImage": "https://www.local10.com/resizer/VZKinO9ppCzy8kYX2t-mpdZpGsQ=/800x450/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65):fill(FFF)/d1vhqlrjc8h82r.cloudfront.net/07-10-2021/t_60b83e6c1ed747e48cae50b3e4bdff22_name_image.jpg",
    "publishedAt": "2021-07-10T20:46:56Z",
    "content": "MIAMI The First Lady of Haiti, Martine Moïse, is being heard from publicly for the first time since she was badly injured during the assassination of her husband, Haitian President Jovenel Moïse.\r\nOn… [+1220 chars]"
  },
  {
    "source": {
      "id": "usa-today",
      "name": "USA Today"
    },
    "author": "Christine Fernando, USA TODAY",
    "title": "'Small miracle': Binx the cat, furry survivor of Florida condo collapse, reunited with family - USA TODAY",
    "description": "A volunteer who had been feeding cats near the site found the black cat wandering the area before bringing him to a Miami Beach rescue center.",
    "url": "https://www.usatoday.com/story/news/nation/2021/07/10/florida-condo-collapse-binx-cat-found-reunited-family/7925338002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2021/07/09/NPPP/a476d758-7569-4c40-adc4-1ed8f52ff8df-070921_surfside_lw_17.jpg?auto=webp&crop=2099,1181,x0,y208&format=pjpg&width=1200",
    "publishedAt": "2021-07-10T20:36:27Z",
    "content": "Weeks after a Florida condo building crashed to the ground, an unlikely survivor has emerged: Binx the cat.\r\nIn a \"small piece of good news\" amid the devastation, Binx, who lived on the ninth floor o… [+2379 chars]"
  }
]

const mockStore = configureStore();
const store = mockStore(initialState);
configure({adapter: new Adapter()});

describe('App Component', () => {
  it('Initial App render', () => {
    render(<Provider store={store}><App/></Provider>)
  })
});

describe('News list Component', () => {
  it('Search div', () => {
    const wrapper = mount(<Provider store={store}><NewsList /></Provider>);
    expect(wrapper.find('div.searchDiv')).toHaveLength(1);
  });

  it('News list div', () => {
    const wrapper = mount(<Provider store={store}><NewsList /></Provider>);
    expect(wrapper.find('div.newsList')).toHaveLength(1);
  });
});

describe('Loader Component', () => {
  it('Load image', () => {
    const wrapper = mount(<Provider store={store}><Loader /></Provider>);
    expect(wrapper.find('img.loader')).toHaveLength(1);
  });
});

describe('404 Page Component', () => {
  it('Load image', () => {
    const wrapper = mount(<Provider store={store}><NotFoundPage /></Provider>);
    expect(wrapper.find('img.notFound')).toHaveLength(1);
  });
});
