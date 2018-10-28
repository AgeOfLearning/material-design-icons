import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHomeElement
 * @class IconOutlineHomeElement
 * @extends {AoflElement}
 */
class IconOutlineHomeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHomeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-home';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHomeElement.is, IconOutlineHomeElement);

export default IconOutlineHomeElement;
