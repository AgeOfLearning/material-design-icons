import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCompareElement
 * @class IconBaselineCompareElement
 * @extends {AoflElement}
 */
class IconBaselineCompareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCompareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-compare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCompareElement.is, IconBaselineCompareElement);

export default IconBaselineCompareElement;
