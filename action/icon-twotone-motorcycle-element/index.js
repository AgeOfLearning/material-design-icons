import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMotorcycleElement
 * @class IconTwotoneMotorcycleElement
 * @extends {AoflElement}
 */
class IconTwotoneMotorcycleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMotorcycleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-motorcycle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMotorcycleElement.is, IconTwotoneMotorcycleElement);

export default IconTwotoneMotorcycleElement;
