import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessibilityElement
 * @class IconTwotoneAccessibilityElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessibilityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessibilityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-accessibility';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessibilityElement.is, IconTwotoneAccessibilityElement);

export default IconTwotoneAccessibilityElement;
