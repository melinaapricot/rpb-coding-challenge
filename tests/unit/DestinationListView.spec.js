import { shallowMount } from '@vue/test-utils'
import DestinationListView from '@/components/DestinationListView.vue';
import DestinationCard from '@/components/DestinationCard.vue';
import Vue from "vue";

describe('DestinationListView.vue', () => {
  it('renders cards according to provided data', async () => {
    const wrapper = shallowMount(DestinationListView, {
      propsData: {
        dataProvider: createSuccessfullDataProvider(),
      }
    })

    await Vue.nextTick();
    const cards = wrapper.findAllComponents(DestinationCard);

    expect(cards.length).toBe(2);
    expect(cards.at(0).props("destination").text).toBe("Ägypten");
    expect(cards.at(1).props("destination").text).toBe("Griechenland");
    expect(wrapper.find(".error-message").exists()).toBe(false);
  })

  it('renders error message on failure to fetch data', async () => {
    const wrapper = shallowMount(DestinationListView, {
      propsData: {
        dataProvider: createFailedDataProvider(),
      }
    })

    await Vue.nextTick();
    await Vue.nextTick();
    const cards = wrapper.findAllComponents(DestinationCard);
    expect(cards.length).toBe(0);
    expect(wrapper.find(".error-message").exists()).toBe(true);
  })
})

function createSuccessfullDataProvider() {
  return {
    fetchData() {
      return Promise.resolve([
        {
          "text": "Ägypten",
          "price": 1237,
          "image": "https://images.flux.reisen/hotel/1262/1/s",
          "link": "https://google.com"
        },
        {
          "text": "Griechenland",
          "price": 334,
          "image": "https://images.flux.reisen/hotel/1262/1/s",
          "link": "https://google.com"
        },
      ]);
    }
  };
}

function createFailedDataProvider() {
  return {
    fetchData() {
      return Promise.reject("Something bad happened");
    }
  }
}