import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertChartElement
 * @class IconBaselineInsertChartElement
 * @extends {AoflElement}
 */
class IconBaselineInsertChartElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertChartElement.is, IconBaselineInsertChartElement);

export default IconBaselineInsertChartElement;
