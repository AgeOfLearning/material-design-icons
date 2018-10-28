import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePieChartElement
 * @class IconTwotonePieChartElement
 * @extends {AoflElement}
 */
class IconTwotonePieChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePieChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pie-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePieChartElement.is, IconTwotonePieChartElement);

export default IconTwotonePieChartElement;
