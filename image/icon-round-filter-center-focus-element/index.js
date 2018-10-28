import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterCenterFocusElement
 * @class IconRoundFilterCenterFocusElement
 * @extends {AoflElement}
 */
class IconRoundFilterCenterFocusElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterCenterFocusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-center-focus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterCenterFocusElement.is, IconRoundFilterCenterFocusElement);

export default IconRoundFilterCenterFocusElement;
