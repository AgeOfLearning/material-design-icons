import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCenterFocusWeakElement
 * @class IconRoundCenterFocusWeakElement
 * @extends {AoflElement}
 */
class IconRoundCenterFocusWeakElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCenterFocusWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-center-focus-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCenterFocusWeakElement.is, IconRoundCenterFocusWeakElement);

export default IconRoundCenterFocusWeakElement;
