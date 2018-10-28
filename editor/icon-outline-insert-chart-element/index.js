import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInsertChartElement
 * @class IconOutlineInsertChartElement
 * @extends {AoflElement}
 */
class IconOutlineInsertChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInsertChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-insert-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInsertChartElement.is, IconOutlineInsertChartElement);

export default IconOutlineInsertChartElement;
