import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooks6Element
 * @class IconSharpLooks6Element
 * @extends {AoflElement}
 */
class IconSharpLooks6Element extends AoflElement {
  /**
   * Creates an instance of IconSharpLooks6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooks6Element.is, IconSharpLooks6Element);

export default IconSharpLooks6Element;
