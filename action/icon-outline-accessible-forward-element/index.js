import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessibleForwardElement
 * @class IconOutlineAccessibleForwardElement
 * @extends {AoflElement}
 */
class IconOutlineAccessibleForwardElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessibleForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-accessible-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessibleForwardElement.is, IconOutlineAccessibleForwardElement);

export default IconOutlineAccessibleForwardElement;
