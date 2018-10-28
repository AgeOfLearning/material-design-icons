import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCompareArrowsElement
 * @class IconBaselineCompareArrowsElement
 * @extends {AoflElement}
 */
class IconBaselineCompareArrowsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCompareArrowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-compare-arrows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCompareArrowsElement.is, IconBaselineCompareArrowsElement);

export default IconBaselineCompareArrowsElement;
