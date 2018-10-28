import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMoveToInboxElement
 * @class IconSharpMoveToInboxElement
 * @extends {AoflElement}
 */
class IconSharpMoveToInboxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMoveToInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-move-to-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMoveToInboxElement.is, IconSharpMoveToInboxElement);

export default IconSharpMoveToInboxElement;
