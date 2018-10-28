import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBubbleChartElement
 * @class IconSharpBubbleChartElement
 * @extends {AoflElement}
 */
class IconSharpBubbleChartElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBubbleChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bubble-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBubbleChartElement.is, IconSharpBubbleChartElement);

export default IconSharpBubbleChartElement;
