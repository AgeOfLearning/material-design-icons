import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNatureElement
 * @class IconOutlineNatureElement
 * @extends {AoflElement}
 */
class IconOutlineNatureElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNatureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-nature';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNatureElement.is, IconOutlineNatureElement);

export default IconOutlineNatureElement;
