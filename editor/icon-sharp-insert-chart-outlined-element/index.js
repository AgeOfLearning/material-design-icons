import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertChartOutlinedElement
 * @class IconSharpInsertChartOutlinedElement
 * @extends {AoflElement}
 */
class IconSharpInsertChartOutlinedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertChartOutlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-chart-outlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertChartOutlinedElement.is, IconSharpInsertChartOutlinedElement);

export default IconSharpInsertChartOutlinedElement;
