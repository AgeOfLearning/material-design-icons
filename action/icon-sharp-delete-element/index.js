import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeleteElement
 * @class IconSharpDeleteElement
 * @extends {AoflElement}
 */
class IconSharpDeleteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeleteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-delete';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeleteElement.is, IconSharpDeleteElement);

export default IconSharpDeleteElement;
