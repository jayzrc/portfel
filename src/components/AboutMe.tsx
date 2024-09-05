import age from '@/utils/age'

import EmojiProvider from '@/utils/EmojiProvider'
import Emoji from '@/utils/Emoji'

import emojiData from '@/utils/data.json'

export const AboutMe = () => {
  return (
    <EmojiProvider data={emojiData}>
    <section className='p-6 max-w-lg rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold mb-4'>
        <Emoji name="raising-hands" width={32} style={{ display: 'inline', verticalAlign: 'top' }}/> O mnie
      </h2>
      <p className='text-base leading-relaxed'>
        Jestm {age()}-letnim developerem z polski <Emoji name="flag-poland" width={16} style={{ display: 'inline', verticalAlign: 'middle' }} />, W tej chwili ucze sie w ZDZ Sosnowiec i jestem w 2 klasie.
        Kierunek który studiuje Programowanie. Na ten moment pracuje na kilkoma projektami takimi jak, aplikacja discord "treat" i innymi. Serdecznie zapraszam na mojego discorda gdzie mozecie sie ze mna najszybciej zkontaktowac. <Emoji name="hugging-face" width={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
      </p>
    </section>
    </EmojiProvider>
  )
}
