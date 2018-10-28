import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMultilineChartElement
 * @class IconRoundMultilineChartElement
 * @extends {AoflElement}
 */
class IconRoundMultilineChartElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMultilineChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-multiline-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMultilineChartElement.is, IconRoundMultilineChartElement);

export default IconRoundMultilineChartElement;
