import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessibleForwardElement
 * @class IconTwotoneAccessibleForwardElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessibleForwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessibleForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-accessible-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessibleForwardElement.is, IconTwotoneAccessibleForwardElement);

export default IconTwotoneAccessibleForwardElement;
