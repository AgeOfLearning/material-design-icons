import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBubbleChartElement
 * @class IconOutlineBubbleChartElement
 * @extends {AoflElement}
 */
class IconOutlineBubbleChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBubbleChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bubble-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBubbleChartElement.is, IconOutlineBubbleChartElement);

export default IconOutlineBubbleChartElement;
