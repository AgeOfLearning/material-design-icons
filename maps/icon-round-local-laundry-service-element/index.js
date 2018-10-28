import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalLaundryServiceElement
 * @class IconRoundLocalLaundryServiceElement
 * @extends {AoflElement}
 */
class IconRoundLocalLaundryServiceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalLaundryServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-laundry-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalLaundryServiceElement.is, IconRoundLocalLaundryServiceElement);

export default IconRoundLocalLaundryServiceElement;
