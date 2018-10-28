import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMultilineChartElement
 * @class IconOutlineMultilineChartElement
 * @extends {AoflElement}
 */
class IconOutlineMultilineChartElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMultilineChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-multiline-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMultilineChartElement.is, IconOutlineMultilineChartElement);

export default IconOutlineMultilineChartElement;
