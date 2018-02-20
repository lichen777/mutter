import React from 'react'
import { Select } from 'semantic-ui-react'

var feelingOptions = [
   {
     text: 'Good',
     value: 'Good',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Slightly_Smiling_Face_Emoji_Icon_42x42.png?16228697460559734940' },
   },
   {
     text: 'Playful',
     value: 'Playful',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_42x42.png?6135488989279264585' },
   },
   {
     text: 'Happy',
     value: 'Happy',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Smiling_Emoji_with_Smiling_Eyes_Icon_42x42.png?16228697460559734940' },
   },
   {
     text: 'Sad',
     value: 'Sad',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji_Icon_42x42.png?7614083643283495824' },
   },
   {
     text: 'Tired',
     value: 'Tired',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Tired_Face_Emoji_42x42.png?2976903553660223024' },
   },
   {
     text: 'Hurt',
     value: 'Hurt',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Face_With_Head-Bandage_Emoji_42x42.png?6135488989279264585' },
   },
   {
     text: 'Angry',
     value: 'Angry',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Angry_Emoji_42x42.png?2976903553660223024' },
   },
   {
     text: 'Afraid',
     value: 'Afraid',
     image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Fearful_Face_Emoji_42x42.png?8026536574188759287' },
   }
 ]


const FeelingDropdown = () => (
  <Select placeholder='Your feeling today' options={feelingOptions} />
)

export default FeelingDropdown
