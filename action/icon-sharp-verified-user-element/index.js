import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVerifiedUserElement
 * @class IconSharpVerifiedUserElement
 * @extends {AoflElement}
 */
class IconSharpVerifiedUserElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVerifiedUserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-verified-user';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVerifiedUserElement.is, IconSharpVerifiedUserElement);

export default IconSharpVerifiedUserElement;
