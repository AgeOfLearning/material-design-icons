import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOpenWithElement
 * @class IconOutlineOpenWithElement
 * @extends {AoflElement}
 */
class IconOutlineOpenWithElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOpenWithElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-open-with';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOpenWithElement.is, IconOutlineOpenWithElement);

export default IconOutlineOpenWithElement;
