import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalLaundryServiceElement
 * @class IconOutlineLocalLaundryServiceElement
 * @extends {AoflElement}
 */
class IconOutlineLocalLaundryServiceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalLaundryServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-laundry-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalLaundryServiceElement.is, IconOutlineLocalLaundryServiceElement);

export default IconOutlineLocalLaundryServiceElement;
