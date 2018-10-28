import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTableChartElement
 * @class IconRoundTableChartElement
 * @extends {AoflElement}
 */
class IconRoundTableChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTableChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-table-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTableChartElement.is, IconRoundTableChartElement);

export default IconRoundTableChartElement;
