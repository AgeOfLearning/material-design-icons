import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRedoElement
 * @class IconOutlineRedoElement
 * @extends {AoflElement}
 */
class IconOutlineRedoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRedoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-redo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRedoElement.is, IconOutlineRedoElement);

export default IconOutlineRedoElement;
