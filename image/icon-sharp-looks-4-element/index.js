import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLooks4Element
 * @class IconSharpLooks4Element
 * @extends {AoflElement}
 */
class IconSharpLooks4Element extends AoflElement {
  /**
   * Creates an instance of IconSharpLooks4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-looks-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLooks4Element.is, IconSharpLooks4Element);

export default IconSharpLooks4Element;
