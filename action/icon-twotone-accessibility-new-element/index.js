import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessibilityNewElement
 * @class IconTwotoneAccessibilityNewElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessibilityNewElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessibilityNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-accessibility-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessibilityNewElement.is, IconTwotoneAccessibilityNewElement);

export default IconTwotoneAccessibilityNewElement;
