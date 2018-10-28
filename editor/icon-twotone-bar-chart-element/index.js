import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBarChartElement
 * @class IconTwotoneBarChartElement
 * @extends {AoflElement}
 */
class IconTwotoneBarChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBarChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bar-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBarChartElement.is, IconTwotoneBarChartElement);

export default IconTwotoneBarChartElement;
