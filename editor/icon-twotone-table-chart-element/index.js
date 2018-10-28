import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTableChartElement
 * @class IconTwotoneTableChartElement
 * @extends {AoflElement}
 */
class IconTwotoneTableChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTableChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-table-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTableChartElement.is, IconTwotoneTableChartElement);

export default IconTwotoneTableChartElement;
