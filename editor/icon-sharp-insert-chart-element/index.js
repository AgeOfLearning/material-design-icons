import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertChartElement
 * @class IconSharpInsertChartElement
 * @extends {AoflElement}
 */
class IconSharpInsertChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertChartElement.is, IconSharpInsertChartElement);

export default IconSharpInsertChartElement;
