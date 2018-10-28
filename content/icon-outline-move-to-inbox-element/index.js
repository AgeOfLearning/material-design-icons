import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMoveToInboxElement
 * @class IconOutlineMoveToInboxElement
 * @extends {AoflElement}
 */
class IconOutlineMoveToInboxElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMoveToInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-move-to-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMoveToInboxElement.is, IconOutlineMoveToInboxElement);

export default IconOutlineMoveToInboxElement;
