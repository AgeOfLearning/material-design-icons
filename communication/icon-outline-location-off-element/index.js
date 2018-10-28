import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocationOffElement
 * @class IconOutlineLocationOffElement
 * @extends {AoflElement}
 */
class IconOutlineLocationOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocationOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-location-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocationOffElement.is, IconOutlineLocationOffElement);

export default IconOutlineLocationOffElement;
