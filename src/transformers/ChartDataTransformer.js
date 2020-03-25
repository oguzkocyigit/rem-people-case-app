import { Transformer } from './Transformer'

export class ChartDataTransformer extends Transformer {
  static fetch (data) {
    return {
      name: data.name,
      y: data.data.map(item => item[1]).reduce((acc, current) => acc + current),
      drilldown: data.id,
    }
  }
}
