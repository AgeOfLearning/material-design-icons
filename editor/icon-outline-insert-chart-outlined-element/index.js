import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertChartOutlinedElement
 * @class IconOutlineInsertChartOutlinedElement
 * @extends {AoflElement}
 */
class IconOutlineInsertChartOutlinedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertChartOutlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-chart-outlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertChartOutlinedElement.is, IconOutlineInsertChartOutlinedElement);

export default IconOutlineInsertChartOutlinedElement;
