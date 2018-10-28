import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooksTwoElement
 * @class IconSharpLooksTwoElement
 * @extends {AoflElement}
 */
class IconSharpLooksTwoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLooksTwoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-two';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooksTwoElement.is, IconSharpLooksTwoElement);

export default IconSharpLooksTwoElement;
