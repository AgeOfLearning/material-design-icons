import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTripOriginElement
 * @class IconBaselineTripOriginElement
 * @extends {AoflElement}
 */
class IconBaselineTripOriginElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTripOriginElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-trip-origin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTripOriginElement.is, IconBaselineTripOriginElement);

export default IconBaselineTripOriginElement;
