import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCenterFocusStrongElement
 * @class IconTwotoneCenterFocusStrongElement
 * @extends {AoflElement}
 */
class IconTwotoneCenterFocusStrongElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCenterFocusStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-center-focus-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCenterFocusStrongElement.is, IconTwotoneCenterFocusStrongElement);

export default IconTwotoneCenterFocusStrongElement;
