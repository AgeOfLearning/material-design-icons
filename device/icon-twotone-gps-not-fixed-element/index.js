import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGpsNotFixedElement
 * @class IconTwotoneGpsNotFixedElement
 * @extends {AoflElement}
 */
class IconTwotoneGpsNotFixedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGpsNotFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gps-not-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGpsNotFixedElement.is, IconTwotoneGpsNotFixedElement);

export default IconTwotoneGpsNotFixedElement;
