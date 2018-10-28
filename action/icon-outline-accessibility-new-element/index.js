import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessibilityNewElement
 * @class IconOutlineAccessibilityNewElement
 * @extends {AoflElement}
 */
class IconOutlineAccessibilityNewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessibilityNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-accessibility-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessibilityNewElement.is, IconOutlineAccessibilityNewElement);

export default IconOutlineAccessibilityNewElement;
