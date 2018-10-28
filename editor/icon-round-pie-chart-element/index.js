import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPieChartElement
 * @class IconRoundPieChartElement
 * @extends {AoflElement}
 */
class IconRoundPieChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPieChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pie-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPieChartElement.is, IconRoundPieChartElement);

export default IconRoundPieChartElement;
