import Replicate from 'replicate'
import dotenv from 'dotenv'

dotenv.config()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})

// push random images
const image = 'https://replicate.delivery/pbxt/KZVNCfqUqyMBvHD9qiKli5gSrmuYftalyLss6LhI2ctwOW0H/3_before.png'

const model = 'philz1337x/clarity-upscaler:eba39f520856d5e61a8ad56fd57f97be2fa30de65e29d8e94db5209a1827cd59'
const input = {
  seed: 1337,
  image: image,
  prompt: 'masterpiece, best quality, highres, <lora:more_details:0.5> <lora:SDXLrender_v2.0:1>',
  dynamic: 6,
  sd_model: 'juggernaut_reborn.safetensors [338b85bc4f]',
  scheduler: 'DPM++ 3M SDE Karras',
  creativity: .35,
  lora_links: '',
  downscaling: false,
  resemblance: 0.6,
  scale_factor: 2,
  tiling_width: 112,
  tiling_height: 144,
  custom_sd_model: '',
  negative_prompt: '(worst quality, low quality, normal quality:2) JuggernautNegative-neg',
  num_inference_steps: 18,
  downscaling_resolution: 768,
}

console.log({ model, input })
console.log('Running...')
const output = await replicate.run(model, { input })
console.log('Done!', output)
