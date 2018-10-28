import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBubbleChartElement
 * @class IconRoundBubbleChartElement
 * @extends {AoflElement}
 */
class IconRoundBubbleChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBubbleChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bubble-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBubbleChartElement.is, IconRoundBubbleChartElement);

export default IconRoundBubbleChartElement;
