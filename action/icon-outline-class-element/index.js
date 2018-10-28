import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineClassElement
 * @class IconOutlineClassElement
 * @extends {AoflElement}
 */
class IconOutlineClassElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineClassElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-class';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineClassElement.is, IconOutlineClassElement);

export default IconOutlineClassElement;
