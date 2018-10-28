import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTableChartElement
 * @class IconOutlineTableChartElement
 * @extends {AoflElement}
 */
class IconOutlineTableChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTableChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-table-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTableChartElement.is, IconOutlineTableChartElement);

export default IconOutlineTableChartElement;
