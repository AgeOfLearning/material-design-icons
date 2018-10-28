import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChatElement
 * @class IconOutlineChatElement
 * @extends {AoflElement}
 */
class IconOutlineChatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChatElement.is, IconOutlineChatElement);

export default IconOutlineChatElement;
