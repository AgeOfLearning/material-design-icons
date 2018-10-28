import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChatElement
 * @class IconTwotoneChatElement
 * @extends {AoflElement}
 */
class IconTwotoneChatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChatElement.is, IconTwotoneChatElement);

export default IconTwotoneChatElement;
