import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMultilineChartElement
 * @class IconTwotoneMultilineChartElement
 * @extends {AoflElement}
 */
class IconTwotoneMultilineChartElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMultilineChartElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-multiline-chart';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMultilineChartElement.is, IconTwotoneMultilineChartElement);

export default IconTwotoneMultilineChartElement;
