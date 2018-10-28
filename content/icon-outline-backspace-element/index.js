import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBackspaceElement
 * @class IconOutlineBackspaceElement
 * @extends {AoflElement}
 */
class IconOutlineBackspaceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBackspaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-backspace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBackspaceElement.is, IconOutlineBackspaceElement);

export default IconOutlineBackspaceElement;
