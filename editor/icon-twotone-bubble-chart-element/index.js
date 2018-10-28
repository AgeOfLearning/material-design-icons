import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBubbleChartElement
 * @class IconTwotoneBubbleChartElement
 * @extends {AoflElement}
 */
class IconTwotoneBubbleChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBubbleChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bubble-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBubbleChartElement.is, IconTwotoneBubbleChartElement);

export default IconTwotoneBubbleChartElement;
