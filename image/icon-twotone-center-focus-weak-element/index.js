import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCenterFocusWeakElement
 * @class IconTwotoneCenterFocusWeakElement
 * @extends {AoflElement}
 */
class IconTwotoneCenterFocusWeakElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCenterFocusWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-center-focus-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCenterFocusWeakElement.is, IconTwotoneCenterFocusWeakElement);

export default IconTwotoneCenterFocusWeakElement;
