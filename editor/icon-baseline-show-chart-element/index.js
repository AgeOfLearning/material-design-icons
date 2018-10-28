import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShowChartElement
 * @class IconBaselineShowChartElement
 * @extends {AoflElement}
 */
class IconBaselineShowChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShowChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-show-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShowChartElement.is, IconBaselineShowChartElement);

export default IconBaselineShowChartElement;
