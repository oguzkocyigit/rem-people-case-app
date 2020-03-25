import { Transformer } from '@tb/transformer'

export class TerminalTransformers extends Transformer {
  static fetch (data) {
    return {
      id: data.id,
      name: data.name,
      destination: data.destination.name,
    }
  }
}
