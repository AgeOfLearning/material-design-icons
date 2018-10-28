import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBarChartElement
 * @class IconSharpBarChartElement
 * @extends {AoflElement}
 */
class IconSharpBarChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBarChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bar-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBarChartElement.is, IconSharpBarChartElement);

export default IconSharpBarChartElement;
