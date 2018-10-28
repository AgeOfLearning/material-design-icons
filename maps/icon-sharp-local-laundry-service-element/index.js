import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalLaundryServiceElement
 * @class IconSharpLocalLaundryServiceElement
 * @extends {AoflElement}
 */
class IconSharpLocalLaundryServiceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalLaundryServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-laundry-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalLaundryServiceElement.is, IconSharpLocalLaundryServiceElement);

export default IconSharpLocalLaundryServiceElement;
