import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTableChartElement
 * @class IconSharpTableChartElement
 * @extends {AoflElement}
 */
class IconSharpTableChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTableChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-table-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTableChartElement.is, IconSharpTableChartElement);

export default IconSharpTableChartElement;
