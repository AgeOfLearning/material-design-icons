import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCenterFocusStrongElement
 * @class IconOutlineCenterFocusStrongElement
 * @extends {AoflElement}
 */
class IconOutlineCenterFocusStrongElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCenterFocusStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-center-focus-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCenterFocusStrongElement.is, IconOutlineCenterFocusStrongElement);

export default IconOutlineCenterFocusStrongElement;
