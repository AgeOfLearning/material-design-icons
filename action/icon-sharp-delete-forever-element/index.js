import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeleteForeverElement
 * @class IconSharpDeleteForeverElement
 * @extends {AoflElement}
 */
class IconSharpDeleteForeverElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeleteForeverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-delete-forever';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeleteForeverElement.is, IconSharpDeleteForeverElement);

export default IconSharpDeleteForeverElement;
