import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBarChartElement
 * @class IconOutlineBarChartElement
 * @extends {AoflElement}
 */
class IconOutlineBarChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBarChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bar-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBarChartElement.is, IconOutlineBarChartElement);

export default IconOutlineBarChartElement;
