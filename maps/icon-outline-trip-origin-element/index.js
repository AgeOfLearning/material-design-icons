import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTripOriginElement
 * @class IconOutlineTripOriginElement
 * @extends {AoflElement}
 */
class IconOutlineTripOriginElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTripOriginElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-trip-origin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTripOriginElement.is, IconOutlineTripOriginElement);

export default IconOutlineTripOriginElement;
