import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShowChartElement
 * @class IconOutlineShowChartElement
 * @extends {AoflElement}
 */
class IconOutlineShowChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShowChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-show-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShowChartElement.is, IconOutlineShowChartElement);

export default IconOutlineShowChartElement;
