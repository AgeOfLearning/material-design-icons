import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMotorcycleElement
 * @class IconOutlineMotorcycleElement
 * @extends {AoflElement}
 */
class IconOutlineMotorcycleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMotorcycleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-motorcycle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMotorcycleElement.is, IconOutlineMotorcycleElement);

export default IconOutlineMotorcycleElement;
