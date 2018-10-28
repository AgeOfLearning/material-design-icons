import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocationOnElement
 * @class IconOutlineLocationOnElement
 * @extends {AoflElement}
 */
class IconOutlineLocationOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-location-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocationOnElement.is, IconOutlineLocationOnElement);

export default IconOutlineLocationOnElement;
