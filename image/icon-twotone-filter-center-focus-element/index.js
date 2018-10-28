import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterCenterFocusElement
 * @class IconTwotoneFilterCenterFocusElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterCenterFocusElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterCenterFocusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-center-focus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterCenterFocusElement.is, IconTwotoneFilterCenterFocusElement);

export default IconTwotoneFilterCenterFocusElement;
