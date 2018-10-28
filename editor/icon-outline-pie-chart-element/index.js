import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePieChartElement
 * @class IconOutlinePieChartElement
 * @extends {AoflElement}
 */
class IconOutlinePieChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePieChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pie-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePieChartElement.is, IconOutlinePieChartElement);

export default IconOutlinePieChartElement;
