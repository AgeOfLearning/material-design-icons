import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalLaundryServiceElement
 * @class IconTwotoneLocalLaundryServiceElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalLaundryServiceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalLaundryServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-laundry-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalLaundryServiceElement.is, IconTwotoneLocalLaundryServiceElement);

export default IconTwotoneLocalLaundryServiceElement;
