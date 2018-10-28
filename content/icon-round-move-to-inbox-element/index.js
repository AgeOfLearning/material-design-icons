import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoveToInboxElement
 * @class IconRoundMoveToInboxElement
 * @extends {AoflElement}
 */
class IconRoundMoveToInboxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoveToInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-move-to-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoveToInboxElement.is, IconRoundMoveToInboxElement);

export default IconRoundMoveToInboxElement;
