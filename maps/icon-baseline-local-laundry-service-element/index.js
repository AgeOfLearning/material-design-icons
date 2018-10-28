import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalLaundryServiceElement
 * @class IconBaselineLocalLaundryServiceElement
 * @extends {AoflElement}
 */
class IconBaselineLocalLaundryServiceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalLaundryServiceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-laundry-service';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalLaundryServiceElement.is, IconBaselineLocalLaundryServiceElement);

export default IconBaselineLocalLaundryServiceElement;
