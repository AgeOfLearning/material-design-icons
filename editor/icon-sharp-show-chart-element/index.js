import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShowChartElement
 * @class IconSharpShowChartElement
 * @extends {AoflElement}
 */
class IconSharpShowChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShowChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-show-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShowChartElement.is, IconSharpShowChartElement);

export default IconSharpShowChartElement;
