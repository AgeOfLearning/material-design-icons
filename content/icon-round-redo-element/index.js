import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRedoElement
 * @class IconRoundRedoElement
 * @extends {AoflElement}
 */
class IconRoundRedoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRedoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-redo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRedoElement.is, IconRoundRedoElement);

export default IconRoundRedoElement;
