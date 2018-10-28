import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessibilityElement
 * @class IconOutlineAccessibilityElement
 * @extends {AoflElement}
 */
class IconOutlineAccessibilityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-accessibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessibilityElement.is, IconOutlineAccessibilityElement);

export default IconOutlineAccessibilityElement;
