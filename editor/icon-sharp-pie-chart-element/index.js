import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPieChartElement
 * @class IconSharpPieChartElement
 * @extends {AoflElement}
 */
class IconSharpPieChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPieChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-pie-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPieChartElement.is, IconSharpPieChartElement);

export default IconSharpPieChartElement;
