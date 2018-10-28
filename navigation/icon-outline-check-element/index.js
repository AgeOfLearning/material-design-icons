import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCheckElement
 * @class IconOutlineCheckElement
 * @extends {AoflElement}
 */
class IconOutlineCheckElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCheckElement.is, IconOutlineCheckElement);

export default IconOutlineCheckElement;
