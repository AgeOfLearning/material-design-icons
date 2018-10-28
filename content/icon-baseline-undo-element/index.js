import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUndoElement
 * @class IconBaselineUndoElement
 * @extends {AoflElement}
 */
class IconBaselineUndoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUndoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-undo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUndoElement.is, IconBaselineUndoElement);

export default IconBaselineUndoElement;
