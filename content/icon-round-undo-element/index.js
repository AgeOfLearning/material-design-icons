import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundUndoElement
 * @class IconRoundUndoElement
 * @extends {AoflElement}
 */
class IconRoundUndoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundUndoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-undo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundUndoElement.is, IconRoundUndoElement);

export default IconRoundUndoElement;
