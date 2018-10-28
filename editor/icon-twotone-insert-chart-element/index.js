import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertChartElement
 * @class IconTwotoneInsertChartElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertChartElement.is, IconTwotoneInsertChartElement);

export default IconTwotoneInsertChartElement;
