import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUndoElement
 * @class IconTwotoneUndoElement
 * @extends {AoflElement}
 */
class IconTwotoneUndoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUndoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-undo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUndoElement.is, IconTwotoneUndoElement);

export default IconTwotoneUndoElement;
