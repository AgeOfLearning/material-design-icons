import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInsertChartOutlinedElement
 * @class IconTwotoneInsertChartOutlinedElement
 * @extends {AoflElement}
 */
class IconTwotoneInsertChartOutlinedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInsertChartOutlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-insert-chart-outlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInsertChartOutlinedElement.is, IconTwotoneInsertChartOutlinedElement);

export default IconTwotoneInsertChartOutlinedElement;
