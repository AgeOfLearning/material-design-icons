import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertChartOutlinedElement
 * @class IconBaselineInsertChartOutlinedElement
 * @extends {AoflElement}
 */
class IconBaselineInsertChartOutlinedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertChartOutlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-chart-outlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertChartOutlinedElement.is, IconBaselineInsertChartOutlinedElement);

export default IconBaselineInsertChartOutlinedElement;
