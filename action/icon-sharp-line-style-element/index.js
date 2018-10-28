import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLineStyleElement
 * @class IconSharpLineStyleElement
 * @extends {AoflElement}
 */
class IconSharpLineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-line-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLineStyleElement.is, IconSharpLineStyleElement);

export default IconSharpLineStyleElement;
