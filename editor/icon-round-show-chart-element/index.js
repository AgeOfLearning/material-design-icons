import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShowChartElement
 * @class IconRoundShowChartElement
 * @extends {AoflElement}
 */
class IconRoundShowChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShowChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-show-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShowChartElement.is, IconRoundShowChartElement);

export default IconRoundShowChartElement;
