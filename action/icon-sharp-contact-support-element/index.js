import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpContactSupportElement
 * @class IconSharpContactSupportElement
 * @extends {AoflElement}
 */
class IconSharpContactSupportElement extends AoflElement {
  /**
   * Creates an instance of IconSharpContactSupportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-contact-support';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpContactSupportElement.is, IconSharpContactSupportElement);

export default IconSharpContactSupportElement;
