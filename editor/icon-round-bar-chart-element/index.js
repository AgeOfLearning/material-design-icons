import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBarChartElement
 * @class IconRoundBarChartElement
 * @extends {AoflElement}
 */
class IconRoundBarChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBarChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bar-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBarChartElement.is, IconRoundBarChartElement);

export default IconRoundBarChartElement;
