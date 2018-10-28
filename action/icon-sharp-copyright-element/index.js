import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCopyrightElement
 * @class IconSharpCopyrightElement
 * @extends {AoflElement}
 */
class IconSharpCopyrightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCopyrightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-copyright';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCopyrightElement.is, IconSharpCopyrightElement);

export default IconSharpCopyrightElement;
