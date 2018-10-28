import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFilterCenterFocusElement
 * @class IconOutlineFilterCenterFocusElement
 * @extends {AoflElement}
 */
class IconOutlineFilterCenterFocusElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFilterCenterFocusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-filter-center-focus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFilterCenterFocusElement.is, IconOutlineFilterCenterFocusElement);

export default IconOutlineFilterCenterFocusElement;
