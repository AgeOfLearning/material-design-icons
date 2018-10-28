import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRedoElement
 * @class IconSharpRedoElement
 * @extends {AoflElement}
 */
class IconSharpRedoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRedoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-redo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRedoElement.is, IconSharpRedoElement);

export default IconSharpRedoElement;
