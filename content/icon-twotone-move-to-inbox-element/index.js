import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoveToInboxElement
 * @class IconTwotoneMoveToInboxElement
 * @extends {AoflElement}
 */
class IconTwotoneMoveToInboxElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoveToInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-move-to-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoveToInboxElement.is, IconTwotoneMoveToInboxElement);

export default IconTwotoneMoveToInboxElement;
