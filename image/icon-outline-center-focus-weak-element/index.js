import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCenterFocusWeakElement
 * @class IconOutlineCenterFocusWeakElement
 * @extends {AoflElement}
 */
class IconOutlineCenterFocusWeakElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCenterFocusWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-center-focus-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCenterFocusWeakElement.is, IconOutlineCenterFocusWeakElement);

export default IconOutlineCenterFocusWeakElement;
