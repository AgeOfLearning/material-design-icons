import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessibilityElement
 * @class IconBaselineAccessibilityElement
 * @extends {AoflElement}
 */
class IconBaselineAccessibilityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-accessibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessibilityElement.is, IconBaselineAccessibilityElement);

export default IconBaselineAccessibilityElement;
