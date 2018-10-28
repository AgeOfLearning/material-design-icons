import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGpsNotFixedElement
 * @class IconOutlineGpsNotFixedElement
 * @extends {AoflElement}
 */
class IconOutlineGpsNotFixedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGpsNotFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gps-not-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGpsNotFixedElement.is, IconOutlineGpsNotFixedElement);

export default IconOutlineGpsNotFixedElement;
