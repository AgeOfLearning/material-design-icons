import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTripOriginElement
 * @class IconTwotoneTripOriginElement
 * @extends {AoflElement}
 */
class IconTwotoneTripOriginElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTripOriginElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-trip-origin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTripOriginElement.is, IconTwotoneTripOriginElement);

export default IconTwotoneTripOriginElement;
