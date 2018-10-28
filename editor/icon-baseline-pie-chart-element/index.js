import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePieChartElement
 * @class IconBaselinePieChartElement
 * @extends {AoflElement}
 */
class IconBaselinePieChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePieChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pie-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePieChartElement.is, IconBaselinePieChartElement);

export default IconBaselinePieChartElement;
