import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'

const YAML_CONFIG_FILENAME = `config.${process.env.NODE_ENV}.yml`

interface Configuration {
  haha: {
    name: string
  }
}

export default (): Configuration => {
  return yaml.load(
    readFileSync(join(__dirname, `../../env/${YAML_CONFIG_FILENAME}`), 'utf-8')
  ) as Configuration
}
