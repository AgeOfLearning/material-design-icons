import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUndoElement
 * @class IconOutlineUndoElement
 * @extends {AoflElement}
 */
class IconOutlineUndoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUndoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-undo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUndoElement.is, IconOutlineUndoElement);

export default IconOutlineUndoElement;
