import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertChartOutlinedElement
 * @class IconRoundInsertChartOutlinedElement
 * @extends {AoflElement}
 */
class IconRoundInsertChartOutlinedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertChartOutlinedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-chart-outlined';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertChartOutlinedElement.is, IconRoundInsertChartOutlinedElement);

export default IconRoundInsertChartOutlinedElement;
