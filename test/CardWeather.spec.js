import { mount } from '@vue/test-utils'
import CardWeather from '@/components/CardWeather.vue'

describe('CardWeather', () => {

    it('renderiza card com as informações corretas', () => {
        const cardData = {
            propsData: {
                city: 'Bahia',
                country: 'BR',
                temperature: 1,
                numberHumity: 50,
                numberPressure: 800
            }
        }
        const wrapper = mount(CardWeather, cardData)
        Object.keys(cardData.propsData).forEach(key => {
            expect(wrapper.vm._props[key]).toEqual(cardData.propsData[key])
        })
    })
})