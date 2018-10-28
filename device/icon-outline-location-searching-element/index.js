import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocationSearchingElement
 * @class IconOutlineLocationSearchingElement
 * @extends {AoflElement}
 */
class IconOutlineLocationSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocationSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-location-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocationSearchingElement.is, IconOutlineLocationSearchingElement);

export default IconOutlineLocationSearchingElement;
