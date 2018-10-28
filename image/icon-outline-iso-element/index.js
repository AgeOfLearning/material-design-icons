import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineIsoElement
 * @class IconOutlineIsoElement
 * @extends {AoflElement}
 */
class IconOutlineIsoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineIsoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-iso';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineIsoElement.is, IconOutlineIsoElement);

export default IconOutlineIsoElement;
