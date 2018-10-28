import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGpsFixedElement
 * @class IconOutlineGpsFixedElement
 * @extends {AoflElement}
 */
class IconOutlineGpsFixedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGpsFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-gps-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGpsFixedElement.is, IconOutlineGpsFixedElement);

export default IconOutlineGpsFixedElement;
