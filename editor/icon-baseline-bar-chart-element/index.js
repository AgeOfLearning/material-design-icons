import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBarChartElement
 * @class IconBaselineBarChartElement
 * @extends {AoflElement}
 */
class IconBaselineBarChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBarChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bar-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBarChartElement.is, IconBaselineBarChartElement);

export default IconBaselineBarChartElement;
