import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCenterFocusStrongElement
 * @class IconRoundCenterFocusStrongElement
 * @extends {AoflElement}
 */
class IconRoundCenterFocusStrongElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCenterFocusStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-center-focus-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCenterFocusStrongElement.is, IconRoundCenterFocusStrongElement);

export default IconRoundCenterFocusStrongElement;
