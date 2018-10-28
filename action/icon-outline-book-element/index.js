import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBookElement
 * @class IconOutlineBookElement
 * @extends {AoflElement}
 */
class IconOutlineBookElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-book';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBookElement.is, IconOutlineBookElement);

export default IconOutlineBookElement;
