import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUndoElement
 * @class IconSharpUndoElement
 * @extends {AoflElement}
 */
class IconSharpUndoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUndoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-undo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUndoElement.is, IconSharpUndoElement);

export default IconSharpUndoElement;
