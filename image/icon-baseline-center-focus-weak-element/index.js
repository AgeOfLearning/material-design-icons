import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCenterFocusWeakElement
 * @class IconBaselineCenterFocusWeakElement
 * @extends {AoflElement}
 */
class IconBaselineCenterFocusWeakElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCenterFocusWeakElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-center-focus-weak';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCenterFocusWeakElement.is, IconBaselineCenterFocusWeakElement);

export default IconBaselineCenterFocusWeakElement;
