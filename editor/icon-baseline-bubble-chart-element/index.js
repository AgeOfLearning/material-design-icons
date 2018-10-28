import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBubbleChartElement
 * @class IconBaselineBubbleChartElement
 * @extends {AoflElement}
 */
class IconBaselineBubbleChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBubbleChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-bubble-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBubbleChartElement.is, IconBaselineBubbleChartElement);

export default IconBaselineBubbleChartElement;
