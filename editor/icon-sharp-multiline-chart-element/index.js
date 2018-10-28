import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMultilineChartElement
 * @class IconSharpMultilineChartElement
 * @extends {AoflElement}
 */
class IconSharpMultilineChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMultilineChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-multiline-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMultilineChartElement.is, IconSharpMultilineChartElement);

export default IconSharpMultilineChartElement;
