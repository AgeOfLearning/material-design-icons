import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCenterFocusStrongElement
 * @class IconBaselineCenterFocusStrongElement
 * @extends {AoflElement}
 */
class IconBaselineCenterFocusStrongElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCenterFocusStrongElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-center-focus-strong';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCenterFocusStrongElement.is, IconBaselineCenterFocusStrongElement);

export default IconBaselineCenterFocusStrongElement;
