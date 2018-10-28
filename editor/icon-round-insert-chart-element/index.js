import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertChartElement
 * @class IconRoundInsertChartElement
 * @extends {AoflElement}
 */
class IconRoundInsertChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertChartElement.is, IconRoundInsertChartElement);

export default IconRoundInsertChartElement;
