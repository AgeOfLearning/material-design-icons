import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChatElement
 * @class IconSharpChatElement
 * @extends {AoflElement}
 */
class IconSharpChatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChatElement.is, IconSharpChatElement);

export default IconSharpChatElement;
