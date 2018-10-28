import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocationDisabledElement
 * @class IconOutlineLocationDisabledElement
 * @extends {AoflElement}
 */
class IconOutlineLocationDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocationDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-location-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocationDisabledElement.is, IconOutlineLocationDisabledElement);

export default IconOutlineLocationDisabledElement;
