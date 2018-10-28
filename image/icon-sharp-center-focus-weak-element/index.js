import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCenterFocusWeakElement
 * @class IconSharpCenterFocusWeakElement
 * @extends {AoflElement}
 */
class IconSharpCenterFocusWeakElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCenterFocusWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-center-focus-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCenterFocusWeakElement.is, IconSharpCenterFocusWeakElement);

export default IconSharpCenterFocusWeakElement;
