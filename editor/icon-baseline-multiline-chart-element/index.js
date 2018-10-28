import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMultilineChartElement
 * @class IconBaselineMultilineChartElement
 * @extends {AoflElement}
 */
class IconBaselineMultilineChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMultilineChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-multiline-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMultilineChartElement.is, IconBaselineMultilineChartElement);

export default IconBaselineMultilineChartElement;
