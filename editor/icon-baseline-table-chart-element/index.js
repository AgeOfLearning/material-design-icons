import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTableChartElement
 * @class IconBaselineTableChartElement
 * @extends {AoflElement}
 */
class IconBaselineTableChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTableChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-table-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTableChartElement.is, IconBaselineTableChartElement);

export default IconBaselineTableChartElement;
