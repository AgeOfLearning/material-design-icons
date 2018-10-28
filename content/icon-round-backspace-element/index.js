import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBackspaceElement
 * @class IconRoundBackspaceElement
 * @extends {AoflElement}
 */
class IconRoundBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBackspaceElement.is, IconRoundBackspaceElement);

export default IconRoundBackspaceElement;
