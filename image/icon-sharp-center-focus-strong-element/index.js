import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCenterFocusStrongElement
 * @class IconSharpCenterFocusStrongElement
 * @extends {AoflElement}
 */
class IconSharpCenterFocusStrongElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCenterFocusStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-center-focus-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCenterFocusStrongElement.is, IconSharpCenterFocusStrongElement);

export default IconSharpCenterFocusStrongElement;
