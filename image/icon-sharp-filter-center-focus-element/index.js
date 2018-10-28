import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterCenterFocusElement
 * @class IconSharpFilterCenterFocusElement
 * @extends {AoflElement}
 */
class IconSharpFilterCenterFocusElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterCenterFocusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-center-focus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterCenterFocusElement.is, IconSharpFilterCenterFocusElement);

export default IconSharpFilterCenterFocusElement;
