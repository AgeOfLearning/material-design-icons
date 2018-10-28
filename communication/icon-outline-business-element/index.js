import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBusinessElement
 * @class IconOutlineBusinessElement
 * @extends {AoflElement}
 */
class IconOutlineBusinessElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBusinessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-business';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBusinessElement.is, IconOutlineBusinessElement);

export default IconOutlineBusinessElement;
