import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAccessibilityNewElement
 * @class IconBaselineAccessibilityNewElement
 * @extends {AoflElement}
 */
class IconBaselineAccessibilityNewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAccessibilityNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-accessibility-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAccessibilityNewElement.is, IconBaselineAccessibilityNewElement);

export default IconBaselineAccessibilityNewElement;
