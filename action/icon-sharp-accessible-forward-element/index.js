import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessibleForwardElement
 * @class IconSharpAccessibleForwardElement
 * @extends {AoflElement}
 */
class IconSharpAccessibleForwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessibleForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-accessible-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessibleForwardElement.is, IconSharpAccessibleForwardElement);

export default IconSharpAccessibleForwardElement;
